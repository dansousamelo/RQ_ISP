import { Request, Response } from "express";
import FileServices from "../services/fileServices";
import { isMulterFilesArray } from "../interfaces/typeGuards";
import { getErrorMessage } from "../utils/errorMessage";

export default {
  async uploadFile(req: Request, res: Response) {
    try {
      const files = req.files as globalThis.Express.Multer.File[];

      if (!files || files.length === 0) {
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
};
