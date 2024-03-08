import { Request, Response } from "express";
import FileServices, { destroiDocument, postDocuments } from "../services/fileServices";
import {
  isArrayEmpty,
  isMulterFilesArray,
  isString,
} from "../interfaces/typeGuards";
import { getErrorMessage } from "../utils/errorMessage";
import { findUser, findUserById } from "../services/userServices";
import { findInspectionById } from "../services/inspectionServices";

export default {
  async uploadFile(req: Request, res: Response) {
    try {
      const files = req.files as globalThis.Express.Multer.File[];

      if (!files || isArrayEmpty(files)) {
        throw new Error("Nenhum arquivo enviado!");
      }

      if (!isMulterFilesArray(files)) {
        throw new Error("Formato inválido de arquivo enviado!");
      }

      const fileServices = new FileServices();

      const uploadedFiles = await Promise.all(
        files.map(async (file) => {
          const { name, url, type } = await fileServices.uploadFile(file);
          return { name, url, type };
        })
      );

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Arquivos submetidos com sucesso!",
        data: {
          documents: uploadedFiles,
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

  async loggedUploadFile(req: Request, res: Response) {
    try {
      const { inspectionId } = req.body;

      if (!isString(inspectionId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "",
          data: {},
        });
      }

      const inspection = await findInspectionById(inspectionId);

      if (!inspection) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Inspeções não encontradas!",
          data: {},
        });
      }

      const files = req.files as globalThis.Express.Multer.File[];

      if (!files || isArrayEmpty(files)) {
        throw new Error("Nenhum arquivo enviado!");
      }

      if (!isMulterFilesArray(files)) {
        throw new Error("Formato inválido de arquivo enviado!");
      }

      const fileServices = new FileServices();

      const uploadedFiles = await Promise.all(
        files.map(async (file) => {
          const { name, url, type } = await fileServices.uploadFile(file);
          return { name, url, type };
        })
      );

      const documents = await postDocuments(inspection, uploadedFiles);

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Arquivos submetidos com sucesso!",
        data: {
          documents: documents,
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

  async deleteFile(req: Request, res: Response) {
    try {
      const { documentId } = req.query;

      if(!isString(documentId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Forneça um id de documento válido!",
          data: {}
        })
      }

      await destroiDocument(documentId)

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Documento excluído com sucesso!",
        data: {}
      })
      
    } catch (error) {
      return res.status(500).json({
        error: true,
        status: 500,
        message: getErrorMessage(error),
        data: {},
      });
    }
  }
};
