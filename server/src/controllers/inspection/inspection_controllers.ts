import { Request, Response } from "express";
import { isString } from "../../interfaces/type_guards";
import {
  isValidInspectionType,
  isValidInspectionEmail,
  isValidInspectionDocument,
} from "./interfaces/type_guards";
import { verifyUser } from "../user/user_controllers";
import {
  generateToken,
  generateRefreshToken,
} from "../../services/auth/auth_services";
import { inspectionTemplates } from "../../services/inspection/populateDB_service";
import { prisma } from "../../db";
import bcrypt from "bcrypt";

import {
  User,
  Inspection,
  DocumentItems,
  Item,
  Template,
} from "../../interfaces/types";

import { getErrorMessage } from "../../utils/error";

export default {
  async createFirstInspection(req: Request, res: Response) {
    try {
      const {
        inspection_type,
        name,
        responsible,
        responsible_email,
        participants,
        recording_url,
        documents,
        accessCode,
      } = req.body;

      if (!isString(name) || !isString(responsible)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: `Fornaça um ${
            !name ? "nome" : "responsável"
          } válido para a inspeção!`,
          data: {},
        });
      }

      try {
        isValidInspectionEmail(responsible_email);
        isValidInspectionType(inspection_type);
      } catch (error) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: getErrorMessage(error),
          data: {},
        });
      }

      if (!isString(accessCode)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um código de acesso válido!",
          data: {},
        });
      }

      if (documents && documents.length > 0) {
        const isValidDocuments = documents.every(isValidInspectionDocument);

        if (!isValidDocuments) {
          return res.status(400).json({
            error: true,
            status: 400,
            message:
              "Os atributos de documento não foram enviados corretamente!",
            data: {},
          });
        }
      }

      const userExists = await verifyUser(accessCode);

      if (userExists !== null) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Já existe um usuário com este código de acesso!",
          data: {},
        });
      }

      const hashedAccessCode = await bcrypt.hash(accessCode, 10);

      let user: User;

      try {
        user = await prisma.user.create({
          data: {
            access_code: hashedAccessCode,
          },
        });
      } catch (error) {
        return res.status(500).json({
          error: true,
          status: 500,
          message: getErrorMessage(error),
          data: {},
        });
      }

      let inspection: Inspection;

      try {
        inspection = await prisma.inspection.create({
          data: {
            user_id: user.id,
            name,
            responsible,
            type: inspection_type,
            recording_url,
            participants,
            responsible_email,
          },
        });
      } catch (error) {
        return res.status(500).json({
          error: true,
          status: 500,
          message: getErrorMessage(error),
          data: {},
        });
      }

      let documentPromises;

      try {
        documentPromises = documents.map(async (doc: DocumentItems) => {
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
      } catch (error) {
        return res.status(500).json({
          error: true,
          status: 500,
          message: getErrorMessage(error),
          data: {},
        });
      }

      let template: Template;
      let items;

      try {
        const templateData = inspectionTemplates(
          inspection_type,
          inspection.id
        );

        template = await prisma.template.create({
          data: {
            inspection_id: inspection.id,
            name: templateData.templateName,
            description: templateData.templateDescription,
          },
        });

        items = await Promise.all(
          templateData.templateItems.map(async (item: Item) => {
            const createdItem = await prisma.item.create({
              data: {
                template_id: template.id,
                item_index: item.item_index,
                description: item.description,
                situation: item.situation,
                observations: item.observations,
                category: item.category,
              },
            });
            return createdItem;
          })
        );
      } catch (error) {
        return res.status(500).json({
          error: true,
          status: 500,
          message: getErrorMessage(error),
          data: {},
        });
      }

      const uploadedDocuments = await Promise.all(documentPromises);
      const access_token = await generateToken(user.id);
      const refreshToken = await generateRefreshToken(user.id);

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Inspeção criada com sucesso!",
        data: {
          inspection,
          documents: uploadedDocuments,
          template,
          items,
          token: access_token,
          refreshToken,
        },
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        status: 500,
        message: getErrorMessage(error),
        data: {},
      });
    }
  },

  async createInspection(req: Request, res: Response) {
    try {
      const {
        inspection_type,
        name,
        responsible,
        responsible_email,
        participants,
        recording_url,
        documents,
        accessCode,
      } = req.body;

      if (!isString(name) || !isString(responsible)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: `Fornaça um ${
            !name ? "nome" : "responsável"
          } válido para a inspeção!`,
          data: {},
        });
      }

      try {
        isValidInspectionEmail(responsible_email);
        isValidInspectionType(inspection_type);
      } catch (error) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: getErrorMessage(error),
          data: {},
        });
      }

      if (!isString(accessCode)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um código de acesso válido!",
          data: {},
        });
      }

      if (documents && documents.length > 0) {
        const isValidDocuments = documents.every(isValidInspectionDocument);

        if (!isValidDocuments) {
          return res.status(400).json({
            error: true,
            status: 400,
            message:
              "Os atributos de documento não foram enviados corretamente!",
            data: {},
          });
        }
      }

      const user = await verifyUser(accessCode);

      if (!user) {
        return res.status(404).json({
          error: true,
          status: 401,
          message: "Usuário não encontrado!",
          data: {},
        });
      }

      let inspection: Inspection;

      try {
        inspection = await prisma.inspection.create({
          data: {
            user_id: user.id,
            name,
            responsible,
            type: inspection_type,
            recording_url,
            participants,
            responsible_email,
          },
        });
      } catch (error) {
        return res.status(500).json({
          error: true,
          status: 500,
          message: getErrorMessage(error),
          data: {},
        });
      }

      let documentPromises;

      try {
        documentPromises = documents.map(async (doc: DocumentItems) => {
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
      } catch (error) {
        return res.status(500).json({
          error: true,
          status: 500,
          message: getErrorMessage(error),
          data: {},
        });
      }

      const uploadedDocuments = await Promise.all(documentPromises);

      let template: Template;
      let items;

      try {
        const templateData = inspectionTemplates(
          inspection_type,
          inspection.id
        );

        template = await prisma.template.create({
          data: {
            inspection_id: inspection.id,
            name: templateData.templateName,
            description: templateData.templateDescription,
          },
        });

        items = await Promise.all(
          templateData.templateItems.map(async (item: Item) => {
            const createdItem = await prisma.item.create({
              data: {
                template_id: template.id,
                item_index: item.item_index,
                description: item.description,
                situation: item.situation,
                observations: item.observations,
                category: item.category,
              },
            });
            return createdItem;
          })
        );
      } catch (error) {
        return res.status(500).json({
          error: true,
          status: 500,
          message: getErrorMessage(error),
          data: {},
        });
      }

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Inspeção criada com sucesso!",
        data: {
          inspection,
          documents: uploadedDocuments,
          template,
          items,
        },
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        status: 500,
        message: getErrorMessage(error),
        data: {},
      });
    }
  },

  async listUserInspections(req: Request, res: Response) {
    const { accessCode } = req.query;

    if (!isString(accessCode)) {
      return res.status(400).json({
        error: true,
        status: 400,
        message: "Fornaça um código de acesso válido!",
        data: {},
      });
    }

    const user = await verifyUser(accessCode);

    if (!user) {
      return res.status(404).json({
        error: true,
        status: 401,
        message: "Usuário não encontrado!",
        data: {},
      });
    }

    let inspections: Inspection[];

    try {
      inspections = await prisma.inspection.findMany({
        where: {
          user_id: user.id,
        },
      });

      console.log(inspections);
    } catch (error) {
      return res.status(500).json({
        error: true,
        status: 500,
        message: getErrorMessage(error),
        data: {},
      });
    }

    const inspectionsData = inspections.map((inspection) => ({
      id: inspection.id,
      name: inspection.name,
      created_at: inspection.created_at,
      type: inspection.type,
      status: inspection.status,
    }));

    return res.status(200).json({
      error: false,
      status: 200,
      message: "Inspeções do usuário encontradas com sucesso",
      data: {
        inspectionsData,
      },
    });
  },
};
