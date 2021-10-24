import dotenv from "dotenv";

dotenv.config();

const HOST = `${process.env.APP_URL}:${process.env.APP_PORT}`;     

export default (file, isVideo) => {   
    const { filename, path} = file; 

    if (isVideo) {
        return {
            fileUrl: `${HOST}/${path}`,        
        };  
    }
     
    return {
        fileUrl: `${HOST}/${path}`,
        thumbnailUrl: `${HOST}/public/thumbs/${filename}`,
    };  
};