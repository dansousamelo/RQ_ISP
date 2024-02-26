import { Request, Response } from "express";

import { findUser, createUser } from "../services/userServices";
import { postDocuments } from "../services/fileServices";
import { generateToken, generateRefreshToken } from "../services/authServices";
import {
  findInspectionsListByUserId,
  findInspectionItemsByInspectionId,
  findInspectionAttributes,
  createInspectionItems,
  createInspection,
} from "../services/inspectionServices";
import { getErrorMessage } from "../utils/errorMessage";

import { isString, isArrayNotEmpty } from "../interfaces/typeGuards";
import {
  isValidInspectionName,
  isValidInspectionResponsible,
  isValidInspectionType,
  isValidInspectionEmail,
  isValidInspectionDocument,
} from "./interfaces/typeGuards";

export default {
  async listInspections(req: Request, res: Response) {
    try {
      const { accessCode } = req.query;

      if (!isString(accessCode)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um código de acesso válido!",
          data: {},
        });
      }

      const user = await findUser(accessCode);

      if (!user) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Usuário não encontrado!",
          data: {},
        });
      }

      const inspections = await findInspectionsListByUserId(user.id);

      if (!inspections) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Inspeções não encontradas!",
          data: {},
        });
      }

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Inspeções do usuário encontradas com sucesso",
        data: {
          inspections,
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

  async findInspectionItems(req: Request, res: Response) {
    try {
      const { accessCode, inspectionId } = req.query;

      if (!isString(accessCode)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Forneça um código de acesso válido!",
          data: {},
        });
      }

      const user = await findUser(accessCode);

      if (!user) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Usuário não encontrado!",
          data: {},
        });
      }

      if (!isString(inspectionId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Forneça um id de inspeção válido!",
          data: {},
        });
      }

      const inspectionItems = await findInspectionItemsByInspectionId(
        inspectionId
      );

      if (!inspectionItems) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Itens não encontrados!",
          data: {},
        });
      }

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Inspeção encontrada com sucesso!",
        data: {
          items: inspectionItems,
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

  async findInspectionAttributes(req: Request, res: Response) {
    try {
      const { accessCode, inspectionId } = req.query;

      if (!isString(accessCode)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Forneça um código de acesso válido!",
          data: {},
        });
      }

      const user = await findUser(accessCode);

      if (!user) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Usuário não encontrado!",
          data: {},
        });
      }

      if (!isString(inspectionId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Forneça um id de inspeção válido!",
          data: {},
        });
      }

      const inspectionAttributes = await findInspectionAttributes(inspectionId);

      if (!inspectionAttributes) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Inspeção não encontrada!",
          data: {},
        });
      }

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Dados da inspeção encontrados com sucesso!",
        data: {
          inspection: inspectionAttributes,
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

      if ((await findUser(accessCode)) !== null) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Já existe um usuário com este código de acesso!",
          data: {},
        });
      }

      try {
        isValidInspectionName(name);
        isValidInspectionResponsible(responsible);
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

      if (documents && isArrayNotEmpty(documents)) {
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

      const userExists = await createUser(accessCode);

      const inspectionsExists = await createInspection(
        userExists.id,
        name,
        responsible,
        inspection_type,
        recording_url,
        participants,
        responsible_email
      );

      const documentsExists = await postDocuments(
        inspectionsExists.id,
        documents
      );
      console.log(documentsExists);

      const itemsExist = await createInspectionItems(
        inspectionsExists.id,
        inspection_type
      );
      console.log(itemsExist);

      const access_token = await generateToken(userExists.id);
      const refreshToken = await generateRefreshToken(userExists.id);

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Inspeção criada com sucesso!",
        data: {
          inspection: inspectionsExists.id,
          // documents: documentsExists,
          // items,
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

      try {
        isValidInspectionName(name);
        isValidInspectionResponsible(responsible);
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

      const user = await findUser(accessCode);

      if (!user) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Usuário não encontrado!",
          data: {},
        });
      }

      const userExists = await createUser(accessCode);

      const inspectionsExists = await createInspection(
        userExists.id,
        name,
        responsible,
        inspection_type,
        recording_url,
        participants,
        responsible_email
      );

      const documentsExists = await postDocuments(
        inspectionsExists.id,
        documents
      );
      console.log(documentsExists);

      const itemsExist = await createInspectionItems(
        inspectionsExists.id,
        inspection_type
      );
      console.log(itemsExist);

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Inspeção criada com sucesso!",
        data: {
          inspection: inspectionsExists.id,
          // documents: documentsExists,
          // items,
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
};
