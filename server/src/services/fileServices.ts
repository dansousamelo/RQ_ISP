import { DocumentItem } from "aws-sdk/clients/marketplaceagreement";
import { prisma } from "../db/prismaClient";

import { DocumentItems } from "../interfaces/types";

import S3Storage from "../utils/fileStorage";

class FileServices {
  async uploadFile(file: Express.Multer.File): Promise<DocumentItems> {
    try {
      const s3Storage = new S3Storage();

      const { filename } = file;

      const fileUrl = await s3Storage.saveFile(filename);

      const fileName = file.originalname;

      const fileType = file.mimetype;

      return { fileName, fileUrl, fileType };
    } catch (error) {
      console.error("Erro ao fazer upload do arquivo:", error);
      throw error;
    }
  }

  async deleteFile(): Promise<void> {}
}

export async function postDocuments(inspectionId: string, inpectionDocuments: DocumentItems[] ) {
  try {
    const documents = await Promise.all(inpectionDocuments.map(async (doc: DocumentItems) => {
      const { fileName, fileUrl, fileType } = doc;
      const document = await prisma.document.create({
        data: {
          inspection_id: inspectionId,
          name: fileName,
          type: fileType,
          url: fileUrl,
        },
      });

      return document;

    }));

    return documents;

  } catch (error) {
    throw new Error("Erro ao enviar documentos!");
  }
}

export default FileServices;
