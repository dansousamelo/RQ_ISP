import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");

export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const filename = `${uuidv4()}_${Buffer.from(file.originalname, 'latin1').toString('utf8')}`;

      return callback(null, filename);
    },
  }),
};
