import Express from "express";
import user_controllers from "./controllers/user/user_controllers";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { generateToken } from "./services/auth/auth_services";
import dotenv from "dotenv";
import cors from "cors";

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
app.get("/find-user/:accessCode", user_controllers.findUser);

// Rotas de Serviço
app.post("/refresh-token", async (req, res) => {
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
    return res.status(403).json({
      error: false,
      status: 200,
      message: error.message,
      data: {},
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}.............`);
});
