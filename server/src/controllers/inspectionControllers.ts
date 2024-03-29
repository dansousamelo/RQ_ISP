import { Request, Response } from "express";

import { findUser, createUser, findUserById } from "../services/userServices";
import { postDocuments } from "../services/fileServices";
import { generateToken, generateRefreshToken } from "../services/authServices";
import {
  findInspectionsListByUserId,
  findInspectionItemsByInspectionId,
  findInspectionAttributes,
  createInspectionItems,
  createInspection,
  destroiInspection,
  updateInspectionAttributes,
  findInspectionById,
  updateInspectionItems,
  findInspectionAttributesAndItemsToExport,
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
import { handleInspectionStatus } from "../utils/handleInspectionStatus";

export default {
  async findUserInspections(req: Request, res: Response) {
    try {
      const { userId } = req.query;

      if (!isString(userId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um id de usuário válido!",
          data: {},
        });
      }

      const user = await findUserById(userId);

      if (!user) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Usuário não encontrado!",
          data: {},
        });
      }

      const inspections = await findInspectionsListByUserId(user.id);

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
      const { inspectionId } = req.query;

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
      const { inspectionId } = req.query;

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
  async findInspectionAttributesAndItems(req: Request, res: Response){
    try {
      const { inspectionId } = req.query
      if(!isString(inspectionId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Forneça um id de inspeção válido!",
          data: {},
        });
      }

      const inspectionData = await findInspectionAttributesAndItemsToExport(inspectionId);

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Atributos e items da inspeção encontrados com sucesso!",
        data: inspectionData
      })

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
        inspectionType,
        name,
        responsible,
        responsibleEmail,
        participants,
        recordingUrl,
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
        isValidInspectionEmail(responsibleEmail);
        isValidInspectionType(inspectionType);
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

      const user = await createUser(accessCode);

      const inspection = await createInspection(
        user.id,
        name,
        responsible,
        inspectionType,
        recordingUrl,
        participants,
        responsibleEmail
      );

      await postDocuments(inspection.id, documents);

      await createInspectionItems(inspection.id, inspectionType);

      const accessToken = await generateToken(user.id);
      const refreshToken = await generateRefreshToken(user.id);

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Inspeção criada com sucesso!",
        data: {
          user: user.id,
          inspection: inspection.id,
          token: accessToken,
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
        inspectionType,
        name,
        responsible,
        responsibleEmail,
        participants,
        recordingUrl,
        documents,
        userId,
      } = req.body;

      try {
        isValidInspectionName(name);
        isValidInspectionResponsible(responsible);
        isValidInspectionEmail(responsibleEmail);
        isValidInspectionType(inspectionType);
      } catch (error) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: getErrorMessage(error),
          data: {},
        });
      }

      if (!isString(userId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um id de usuário válido!",
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

      const user = await findUserById(userId);

      if (!user) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Usuário não encontrado!",
          data: {},
        });
      }

      const inspection = await createInspection(
        user.id,
        name,
        responsible,
        inspectionType,
        recordingUrl,
        participants,
        responsibleEmail
      );

      await postDocuments(inspection.id, documents);

      await createInspectionItems(inspection.id, inspectionType);

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Inspeção criada com sucesso!",
        data: {
          inspection: inspection.id,
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

  async updateInspectionAttributes(req: Request, res: Response) {
    try {
      const {
        id,
        name,
        responsible,
        recordingUrl,
        participants,
        responsibleEmail,
      } = req.body.inspection;

      if (!isString(id)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um id de inspeção válido!",
          data: {},
        });
      }

      try {
        isValidInspectionName(name);
        isValidInspectionResponsible(responsible);
        isValidInspectionEmail(responsibleEmail);
      } catch (error) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: getErrorMessage(error),
          data: {},
        });
      }

      const inspection = await updateInspectionAttributes(
        id,
        name,
        responsible,
        recordingUrl,
        participants,
        responsibleEmail
      );

      if (!inspection) {
        return res.status(404).json({
          error: true,
          status: 404,
          message:
            "Não foi possível encontrar uma inspeção com o id fornecido!",
          data: {},
        });
      }

      return res.status(200).json({
        error: true,
        status: 200,
        message: "Atributos da inspeção atualizados com sucesso",
        data: {
          inspection,
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

  async saveInspection(req: Request, res: Response) {
    try {
      const { items, inspectionId, inspectionStatus } = req.body;

      if (!isString(inspectionId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um id de inspeção válido!",
          data: {},
        });
      }

      if(!isString(inspectionStatus)){
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um status de inspeção válido!",
          data: {},
        });
      }

      const handledInspectionStatus = handleInspectionStatus(inspectionStatus);

      await updateInspectionItems(items, handledInspectionStatus, inspectionId);

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Itens da inspeção atualizados com sucesso",
        data: {},
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

  async deleteInspection(req: Request, res: Response) {
    try {
      const { inspectionId } = req.query;

      if (!isString(inspectionId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um id inspeção válido!",
          data: {},
        });
      }

      const inspectionsExists = await findInspectionById(inspectionId);

      if (!inspectionsExists) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Inspeção não encontrada!",
          data: {},
        });
      }

      await destroiInspection(inspectionId);

      return res.status(200).json({
        error: false,
        status: 200,
        messsage: "Inspeção excluída com sucesso!",
        data: {},
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
