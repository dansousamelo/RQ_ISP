import { Request, Response } from "express";
import FileServices, { postDocuments } from "../services/fileServices";
import {
  isArrayEmpty,
  isMulterFilesArray,
  isString,
} from "../interfaces/typeGuards";
import { getErrorMessage } from "../utils/errorMessage";
import { findUser } from "../services/userServices";
import {
  findInspection,
  findInspectionsListByUserId,
} from "../services/inspectionServices";

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
          const { fileName, fileUrl, fileType } = await fileServices.uploadFile(
            file
          );
          return { fileName, fileUrl, fileType };
        })
      );

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Arquivos submetidos com sucesso!",
        data: uploadedFiles,
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
      const { accessCode, inspectionId } = req.body;

      if (!isString(accessCode) && !isString(inspectionId)) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "",
          data: {},
        });
      }

      const user = await findUser(accessCode);

      if (!user) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "",
          data: {},
        });
      }

      const inspectionsExists = await findInspection(inspectionId, user.id);

      if (!inspectionsExists) {
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
          const { fileName, fileUrl, fileType } = await fileServices.uploadFile(
            file
          );
          return { fileName, fileUrl, fileType };
        })
      );

      const documents = await postDocuments(inspectionsExists, uploadedFiles);

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Arquivos submetidos com sucesso!",
        data: {
          documents: documents
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
