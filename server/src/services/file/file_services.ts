import S3Storage from "../../utils/S3_storage";

class FileServices {
  async uploadFile(file: Express.Multer.File): Promise<string> {
    const s3Storage = new S3Storage();

    return await s3Storage.saveFile(file.filename);
  }

  async deleteFile(): Promise<void> {}
}

export default FileServices;
