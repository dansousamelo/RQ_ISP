import aws, { S3 } from "aws-sdk";
import path from "path";
import mime from "mime";
import fs from "fs";

import multerConfig from "../config/multer";

const bucket = process.env.S3_BUCKET;

class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: "us-east-1",
    });
  }

  async saveFile(fileName: string){
    const originalPath = path.resolve(multerConfig.directory, fileName);
    try {
      if(!bucket) {
        throw new Error("Não foi encontrado bucket aws")
      }
      const ContentType = mime.getType(originalPath);

      if (!ContentType) {
        throw new Error("Arquivo não encontrado!");
      }

      const fileContent = await fs.promises.readFile(originalPath);

      await this.client
        .putObject({
          Bucket: bucket,
          Key: fileName,
          ACL: "public-read",
          Body: fileContent,
          ContentType,
        })
        .promise();

      await fs.promises.unlink(originalPath);

      const fileUrl = `https://${bucket}.s3.amazonaws.com/${fileName}`;

      return { url: fileUrl, s3Name: fileName };
    } catch (error) {
      console.error("Erro ao salvar o arquivo:", error);
      throw error;
    }
  }

  async deleteFile(fileName: string): Promise<void> {
    try {
      if(!bucket) {
        throw new Error("Não foi encontrado bucket aws")
      }
      this.client.deleteObject({
        Bucket: bucket,
        Key: fileName,
      }).promise() 
    } catch(error) {
      throw new Error("Erro ao apagar o arquivo!")
    }
  }
}

export default S3Storage;
