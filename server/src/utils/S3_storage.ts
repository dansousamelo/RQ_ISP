import { S3 } from "aws-sdk";
import aws from "aws-sdk";
import path from "path";
import mime from "mime";
import fs from "fs";

import multerConfig from "../config/multer";

const bucket = process.env.S3_BUCKET || "rqs-bucket";

class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: "us-east-1",
    });
  }

  async saveFile(filename: string): Promise<string> {
    const originalPath = path.resolve(multerConfig.directory, filename);
    try {
      const ContentType = mime.getType(originalPath);

      if (!ContentType) {
        throw new Error("Arquivo não encontrado!");
      }

      const fileContent = await fs.promises.readFile(originalPath);

      await this.client
        .putObject({
          Bucket: bucket,
          Key: filename,
          ACL: "public-read",
          Body: fileContent,
          ContentType,
        })
        .promise();

      await fs.promises.unlink(originalPath);

      const fileUrl = `https://${bucket}.s3.amazonaws.com/${filename}`;

      return fileUrl;
      
    } catch (error) {
      console.error("Erro ao salvar o arquivo:", error);
      throw error; // Propaga o erro para ser tratado no nível superior
    }
  }
}

export default S3Storage;
