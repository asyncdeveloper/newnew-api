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
        const uniqueSuffix = Math.round(Math.random() * 1E9);              
        const ext = file.mimetype.split("/")[1];
        cb(null, `${Date.now()}-${uniqueSuffix}.${ext}`);
    },
});

export const supportedTypes = /jpeg|jpg|png|gif|mov|quicktime|mp4/;

const supportedVideoTypes = /mov|quicktime|mkv|mp4|avi|webm/;

const isVideoFile = mimetype => supportedVideoTypes.test(mimetype);
    
export const singleFileUpload = util.promisify(multer({
    storage,
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {                
        // Check ext
        const ext = supportedTypes.test(
            path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = supportedTypes.test(file.mimetype);

        if (mimetype && ext){
            if (isVideoFile(file.mimetype)) {
                req.isVideo = true;
            }            
            return cb(null,true);
        } else {
            return cb(new BadRequest("Only image or video files supported"));
        }
    },
}).single("file"));
