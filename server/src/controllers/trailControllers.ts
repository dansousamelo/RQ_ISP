import { Request, Response } from "express";
import { findUserById } from "../services/userServices";
import {
  findDocumentTrailById,
  createDocumentTrail,
  destroiDocumentTrail,
  findDocumentTrails,
} from "../services/trailServices";

import { getErrorMessage } from "../utils/errorMessage";
import { isString } from "../interfaces/typeGuards";

export default {
  async findDocumentTrails(req: Request, res: Response) {
    try {
      const { documentId } = req.query;

      if (!isString(documentId)) {
        console.log(documentId);
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um id de documento válido!",
          data: {},
        });
      }
      const trails = await findDocumentTrails(documentId);

      console.log(trails);

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Rastros de documento encontrado!",
        data: {
          trails: trails,
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
  async createTrail(req: Request, res: Response) {
    try {
      const { trailData, userId, inspectionId, documentId } = req.body;

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

      const trail = await createDocumentTrail(
        inspectionId,
        documentId,
        trailData
      );

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Marcação criada com sucesso",
        data: {
          trail: trail.id,
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

  async deleteDocumentTrail(req: Request, res: Response) {
    try {
      const { trailId } = req.query;

      if (!isString(trailId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Fornaça um id de rastro válido!",
          data: {},
        });
      }

      const documentTrailExists = await findDocumentTrailById(trailId);

      if (!documentTrailExists) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Inspeção não encontrada!",
          data: {},
        });
      }

      await destroiDocumentTrail(trailId);

      return res.status(200).json({
        error: false,
        status: 200,
        messsage: "Rastro excluído com sucesso!",
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
