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
import { verifyToken } from "../token/token_controllers";
import { prisma } from "../../db";
import bcrypt from "bcrypt";

import { DocumentItems } from "../../interfaces/types";

export default {
  async createInspection(req: Request, res: Response) {
    try {
      const inspection_type = isValidInspectionType(req.body.inspection_type);

      const name = isString(req.body.name) ? req.body.name : null;

      const responsible = isString(req.body.responsible)
        ? req.body.responsible
        : null;

      const responsible_email = isValidInspectionEmail(
        req.body.responsible_email
      );

      const { recording_url, participants, documents, token } = req.body;

      const accessCode = isString(req.body.accessCode)
        ? req.body.accessCode
        : null;

      if (!name || !responsible) {
        throw new Error(
          `Forneça um ${!name ? "nome" : "responsável"} válido para inspeção!`
        );
      }

      if (documents && documents.length > 0) {
        const isValidDocuments = documents.every(isValidInspectionDocument);

        if (!isValidDocuments) {
          throw new Error(
            "Os atributos de documentos não foram fornecidos corretamente"
          );
        }
      }

      let userId: string | null = null;

      // const userExists = await verifyUser(accessCode);

      // if (userExists !== null) {
      //   return res.status(500).json({
      //     error: true,
      //     status: 500,
      //     message: "Já existe um usuário com este código de acesso!",
      //     data: {},
      //   });
      // }

      // const hashedAccessCode = await bcrypt.hash(accessCode, 10);

      // const user = await prisma.user.create({
      //   data: {
      //     access_code: hashedAccessCode,
      //   },
      // });

      if (token) {
        const verifiedUserId = await verifyToken(token);

        if (!verifiedUserId) {
          return res.status(401).json({
            error: true,
            status: 401,
            message: "Token inválido!",
            data: {},
          });
        } else {
          const userExists = await verifyUser(accessCode);

          if (userExists) {
            userId = verifiedUserId;
          } else {
            return res.status(404).json({
              error: true,
              status: 401,
              message: "Usuário não encontrado!",
              data: {},
            });
          }
        }
      } else {
        const userExists = await verifyUser(accessCode);

        if (userExists) {
          throw new Error(
            "Já existe um usuário com este código de acesso e não foi enviado um token de verificação"
          );
        } else {
          const hashedAccessCode = await bcrypt.hash(accessCode, 10);

          const newUser = await prisma.user.create({
            data: {
              access_code: hashedAccessCode,
            },
          });

          userId = newUser.id;
        }
      }

      if (userId === null) {
        throw new Error("Usuário não encontrado!");
      }

      const inspection = await prisma.inspection.create({
        data: {
          user_id: userId,
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

      // const refreshToken = await generateRefreshToken(user.id);

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Inspeção criada com sucesso!",
        data: {
          inspection,
          documents: uploadedDocuments,
          // token,
          // refreshToken,
        },
      });
    } catch (error: any) {
      return res.status(500).json({
        error: true,
        status: 500,
        message: error.message,
        data: {},
      });
    }
  },
};
