import { prisma } from "../db/prismaClient";

import S3Storage from "../utils/fileStorage";

import { DocumentItems } from "../interfaces/types";
import { DocumentResult } from "./interfaces/types";

class FileServices {
  async uploadFile(file: Express.Multer.File): Promise<DocumentItems> {
    try {
      const s3Storage = new S3Storage();

      const { filename, originalname, mimetype } = file;

      const fileUrl = await s3Storage.saveFile(filename);

      const fileName = Buffer.from(originalname, 'latin1').toString('utf8');

      const fileType = mimetype;

      return { fileName, fileUrl, fileType };
    } catch (error) {
      console.error("Erro ao fazer upload do arquivo:", error);
      throw error;
    }
  }

  async deleteFile(): Promise<void> {}
}

export async function postDocuments(
  inspectionId: string,
  inpectionDocuments: DocumentItems[]
) {
  try {
    const documents = await Promise.all(
      inpectionDocuments.map(async (doc: DocumentItems) => {
        const { fileName, fileUrl, fileType } = doc;
        const document = await prisma.document.create({
          data: {
            inspectionId: inspectionId,
            name: fileName,
            type: fileType,
            url: fileUrl,
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

export default FileServices;
