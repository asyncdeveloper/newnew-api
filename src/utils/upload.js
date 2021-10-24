import util from "util";

import multer from "multer";
import path from "path";
import { BadRequest } from "./errors";
const maxSize = 10 * 1000 * 1024 ; // 10MB

const __dirname = "./public/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname);
    },
    filename: (req, file, cb) => {                    
        const ext = file.mimetype.split("/")[1];
        cb(null, `${Date.now()}.${ext}`);
    },
});
    
export const singleFileUpload = util.promisify(multer({
    storage,
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {        
        // Allowed ext TODO: allow more ext
        const types = /jpeg|jpg|png|gif|mp4/;
        // Check ext
        const ext = types.test(path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = types.test(file.mimetype);

        if (mimetype && ext){
            return cb(null,true);
        } else {
            return cb(new BadRequest("Only image or video files supported"));
        }
    },
}).single("file"));
