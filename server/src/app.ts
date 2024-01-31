import Express from "express";
import { Request, Response } from "express"
import user_controllers from "./controllers/user/user_controllers";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { generateToken } from "./services/auth/auth_services";
import dotenv from "dotenv";
import cors from "cors";

import FileServices from "./services/file/file_services";
import multer from "multer";
import { Multer } from "multer";
import multerConfig from "./config/multer";
import { isMulterFilesArray } from "./interfaces/type_guards"

dotenv.config();

const PORT = process.env.PORT || 8000;

const secretKey =
  process.env.TOKEN_SECRET_KEY || crypto.randomBytes(32).toString("hex");

const app = Express();
app.use(Express.json());

app.use(cors());

app.get("/", (req, res) => {
  return res.send({ message: "Bem vindo a API do RQ-ISP!!!" });
});

// Rotas de Usuário
app.post("/create-user", user_controllers.createUser);
app.get("/find-user", user_controllers.findUser);

// Rotas de Serviço
app.post("/refresh-token", async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({
      error: false,
      status: 401,
      message: "refreshToken não informado",
      data: {},
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, secretKey) as
      | { user_id: string }
      | undefined;

    if (!decoded || !decoded.user_id) {
      return res.status(401).json({
        error: true,
        status: 201,
        message: "Formato inválido de token de acesso",
        data: {},
      });
    }

    const newToken = generateToken(decoded.user_id);

    return res.status(200).json({
      error: false,
      status: 200,
      message: "New Refresh Token generated",
      data: {
        token: newToken,
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
});

// rotas de arquivo
const upload = multer(multerConfig);
app.post("/upload-file", upload.array("files"), async (req, res) => {
  try {
    const files = req.files as globalThis.Express.Multer.File[];
    
    if (!files || files.length === 0) {
      throw new Error("Nenhum arquivo enviado!");
    }

    if(!isMulterFilesArray(files)){
      throw new Error("Formato inválido de arquivo enviado!");
    }

    const fileServices = new FileServices();

    const uploadedFiles = [];

    for (const file of files) {
      const { fileName, fileUrl } = await fileServices.uploadFile(file);
      uploadedFiles.push({ fileName, fileUrl });
    }

    return res.status(200).json({
      error: false,
      status: 200,
      message: "Arquivos submetidos com sucesso!",
      data: uploadedFiles,
    });

  } catch (error) {
    console.error("Erro durante o upload ", error);
    return res.status(500).json({
      error: true,
      status: 500,
      message: "Erro durante o upload",
      data: {},
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}.............`);
});
