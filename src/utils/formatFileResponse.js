import dotenv from "dotenv";

dotenv.config();

const HOST = `${process.env.APP_URL}:${process.env.APP_PORT}`;     

export default (file, isVideo) => {   
    const { filename, path} = file; 
    const fileUrl = `${HOST}/${path}`;

    if (isVideo) {
        return { fileUrl };  
    }
     
    return {
        fileUrl,
        thumbnailUrl: `${HOST}/public/thumbs/${filename}`,
    };  
};