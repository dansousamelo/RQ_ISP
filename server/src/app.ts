import Express from "express";
import { Request, Response } from "express"
import user_controllers from "./controllers/user/user_controllers";
import dotenv from "dotenv";
import cors from "cors";

import token_controllers from "./controllers/token/token_controllers";

import multer from "multer";
import multerConfig from "./config/multer";
import file_controller from "./controllers/file/file_controller";

import inspection_controllers from "./controllers/inspection/inspection_controllers";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = Express();
app.use(Express.json());

app.use(cors());

app.get("/", (req, res) => {
  return res.send({ message: "Bem vindo a API do RQ-ISP!!!" });
});

// Rotas de Usuário
app.post("/create-user", user_controllers.createUser);
app.get("/generate-access_code", user_controllers.createAccessCode);
app.get("/find-user", user_controllers.findUser);

// Rotas de Serviço
app.post("/refresh-token", token_controllers.generateRefreshToken);

// rotas de arquivo
const upload = multer(multerConfig);
app.post("/upload-file", upload.array("files"), file_controller.uploadFile);

//rotas de inspeção
app.post("/create-inspection", inspection_controllers.createInspection);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}.............`);
});
