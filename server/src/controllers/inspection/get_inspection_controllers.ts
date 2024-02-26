import { Request, Response } from "express";
import { prisma } from "../../db/prismaClient";

import { isString } from "../../interfaces/typeGuards";
import { verifyUser } from "../../services/userServices";

import { getErrorMessage } from "../../utils/errorMessage";
import { formatDate, formatDataWithHours } from "../../utils/formatDatetime";

import { Inspection, Document, Item } from "../../interfaces/types";

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

      const user = await verifyUser(accessCode);

      if (!user) {
        return res.status(404).json({
          error: true,
          status: 404,
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
          orderBy: {
            updated_at: "desc",
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

      const inspectionsData = inspections.map((inspection: Inspection) => ({
        id: inspection.id,
        name: inspection.name,
        created_at: formatDate(inspection.created_at),
        type: inspection.type,
        status: inspection.status,
      }));

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Inspeções do usuário encontradas com sucesso",
        data: {
          inspections: inspectionsData,
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

      const user = await verifyUser(accessCode);

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

      let inspection: Inspection | null;

      try {
        inspection = await prisma.inspection.findFirst({
          where: {
            id: inspectionId,
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

      if (!inspection) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Inspeção não encontrada!",
          data: {},
        });
      }

      let items: Item[] | null;

      try {
        items = await prisma.item.findMany({
          where: {
            inspection_id: inspection.id,
          },
          include: {
            Trail: true,
          },
        });

        items.sort((a, b) => parseInt(a.item_index) - parseInt(b.item_index));
      } catch (error) {
        return res.status(500).json({
          error: true,
          status: 500,
          message: getErrorMessage(error),
          data: {},
        });
      }

      if (!items) {
        return res.status(500).json({
          error: true,
          status: 500,
          message: "Essa inspeção foi criada sem items de template!",
          data: {},
        });
      }

      const itemsData = items.map((item: Item) => {
        const trailData = item.trail
          ? item.trail.page_number
            ? {
                trail_id: item.trail.id,
                text: item.trail.text,
                page_number: item.trail.page_number,
              }
            : item.trail.text
          : null;

        return {
          item_index: item.item_index,
          situation: item.situation,
          category: item.category,
          description: item.description,
          observations: item.observations,
          trail: trailData,
        };
      });

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Inspeção encontrada com sucesso!",
        data: {
          items: itemsData,
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

      const user = await verifyUser(accessCode);

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

      let inspection: Inspection | null;

      try {
        inspection = await prisma.inspection.findFirst({
          where: {
            id: inspectionId,
          },
          include: {
            Document: true,
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

      if (!inspection) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Inspeção não encontrada!",
          data: {},
        });
      }

      if (!inspection) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Inspeção não encontrada!",
          data: {},
        });
      }

      const inspectionDocuments = inspection.Document
        ? inspection.Document.map((doc: Document) => ({
            fileName: doc.name,
            fileType: doc.type,
            fileUrl: doc.url,
          }))
        : [];

      const inspectionsData = {
        name: inspection.name,
        responsible: inspection.responsible,
        type: inspection.type,
        recording_url: inspection.recording_url,
        participants: inspection.participants,
        responsible_email: inspection.responsible_email,
        documents: inspectionDocuments,
        status: inspection.status,
        updated_at: formatDataWithHours(inspection.updated_at),
      };

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Dados da inspeção encontrados com sucesso!",
        data: {
          inspection: inspectionsData,
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
