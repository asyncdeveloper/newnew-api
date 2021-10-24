import sharp from "sharp";
import path from "path";
import supportedTypes from "../utils/upload";

export default async (file, isVideo) => {    
    if (! isVideo) {
        const { filename: image } = file;
        const ext = path.extname(file.originalname).toLowerCase();
        const types = `/\.(${supportedTypes})$/`; 
        return sharp(file.path, { failOnError: false })
            .resize(64, 64)
            .withMetadata()
            .toFile(
                path.resolve(file.destination, "./thumbs", 
                    image.replace(types, ext))
            );    
    }        
};