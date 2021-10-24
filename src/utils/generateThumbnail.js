import sharp from "sharp";
import path from "path";

export default async file => {
    const { filename: image } = file;
    return sharp(file.path, { failOnError: false })
        .resize(64, 64)
        .withMetadata()
        .toFile(
            path.resolve(file.destination, "./thumbs", 
                image.replace(/\.(jpeg|png)$/, ".jpg"))
        );    
};