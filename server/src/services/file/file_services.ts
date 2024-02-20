import S3Storage from "../../utils/S3_storage";

type UploadResult = {
    fileName: string;
    fileUrl: string;
    fileType: string;
  }
class FileServices {
  async uploadFile(file: Express.Multer.File): Promise<UploadResult> {
    try {
        const s3Storage = new S3Storage();

        const { filename } = file;

        const fileUrl = await s3Storage.saveFile(filename);
        
        const fileName = file.originalname;

        const fileType = file.mimetype;

        return { fileName, fileUrl, fileType };
      } catch (error) {
        console.error("Erro ao fazer upload do arquivo:", error);
        throw error;
      }
  }

  async deleteFile(): Promise<void> {}
}

export default FileServices;
