import Express from "express";
import dotenv from "dotenv";
import cors from "cors";

import fileRoutes from "./routes/fileRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import userRoutes from "./routes/userRoutes";
import inspectionRoutes from "./routes/inspectionRoutes";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = Express();
app.use(Express.json());

app.use(cors());

app.get("/", (req, res) => {
  return res.send({ message: "Bem vindo a API do RQ-ISP!!!" });
});

// Rotas de Usuário
app.use("/", userRoutes);

// Rotas de token
app.use("/", tokenRoutes);

// Rotas de arquivo
app.use("/", fileRoutes);

// Rotas de inspeção
app.use("/", inspectionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}.............`);
});
