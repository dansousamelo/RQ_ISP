import { Request, Response } from "express";
import { isString } from "../../interfaces/type_guards";
import { verifyUser } from "../user/user_controllers";
import { prisma } from "../../db";

type DocumentItems = {
  fileName: string;
  fileUrl: string;
  fileType: string;
};

function isValidInspectionType(inspection_type: string) {
  if (
    inspection_type !== "privacyRequirement" && inspection_type !== "userStory") {
    throw new Error("O tipo de inspeção não é válido!");
  }

  return inspection_type;
}

export default {
  async createInspection(req: Request, res: Response) {
    try {
      const {
        inspection_type,
        name,
        responsible,
        responsible_email,
        recording_url,
        participants,
        documents,
      } = req.body;

      isValidInspectionType(inspection_type);

      const accessCode = isString(req.body.accessCode)
        ? req.body.accessCode
        : null;

      const userExists = await verifyUser(accessCode);

      const inspection = await prisma.inspection.create({
        data: {
          user_id: userExists.id,
          name,
          responsible,
          type: inspection_type,
          recording_url,
          participants,
          responsible_email,
        },
      });

      const documentPromises = documents.map(async (doc: DocumentItems) => {
        const { fileName, fileUrl, fileType } = doc;
        const document = await prisma.document.create({
          data: {
            inspection_id: inspection.id,
            name: fileName,
            type: fileType,
            url: fileUrl,
          },
        });
        return document;
      });

      const uploadedDocuments = await Promise.all(documentPromises);

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Inspeção criada com sucesso!",
        data: {
          inspection,
          documents: uploadedDocuments,
        },
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        error: true,
        status: 500,
        message: error.message,
        data: {},
      });
    }
  },
};
