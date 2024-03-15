import { prisma } from "../db/prismaClient";

import S3Storage from "../utils/fileStorage";

import { DocumentItems } from "../interfaces/types";
import { DocumentResult } from "./interfaces/types";

class FileServices {
  async uploadFile(file: Express.Multer.File): Promise<DocumentItems> {
    try {
      const s3Storage = new S3Storage();

      const { filename, originalname, mimetype } = file;

      const name = Buffer.from(originalname, "latin1").toString("utf8");
      const { url, s3Name }  = await s3Storage.saveFile(filename);
      const type = mimetype;

      return { name, s3Name, url , type };
    } catch (error) {
      console.error("Erro ao fazer upload do arquivo:", error);
      throw error;
    }
  }

  async deleteFile(filename: string): Promise<void> {
    try {
      const s3Storage = new S3Storage();

      await s3Storage.deleteFile(filename)
    } catch(error) {
      console.error("Erro ao remover arquivo: ", error)
      throw error
    }
  }
}

export async function postDocuments(
  inspectionId: string,
  inpectionDocuments: DocumentItems[]
) {
  try {
    const documents = await Promise.all(
      inpectionDocuments.map(async (doc: DocumentItems) => {
        const { name, s3Name, url, type } = doc;
        const document = await prisma.document.create({
          data: {
            inspectionId: inspectionId,
            name,
            s3Name,
            url,
            type,
          },
        });

        return document;
      })
    );

    const documentsData: DocumentResult[] = documents.map(
      (document: DocumentResult) => ({
        id: document.id,
        name: document.name,
        url: document.url,
        type: document.type,
      })
    );

    return documentsData;
  } catch (error) {
    throw new Error("Erro ao enviar documentos!");
  }
}

export async function destroiDocument(documentId: string) {
  try {
    const document = await prisma.document.findUnique({
      where: {
        id: documentId,
      }
    })

    if(!document) {
      throw new Error("Não foi possível encontrar um documento com este id!")
    }

    const documentS3Name = document.s3Name

    const deleteFileService = new FileServices()

    await deleteFileService.deleteFile(documentS3Name);

    await prisma.document.delete({
      where: {
        id: document.id,
      }
    })
  } catch (error) {
    throw error
  }
}

export default FileServices;
