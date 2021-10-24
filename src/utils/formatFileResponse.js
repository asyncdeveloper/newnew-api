import dotenv from "dotenv";

dotenv.config();

const HOST = `${process.env.APP_URL}:${process.env.APP_PORT}`;     

export default file => {   
    const { filename, path } = file; 
    return {
        fileUrl: `${HOST}/${path}`,
        thumbnailUrl: `${HOST}/public/thumbs/${filename}`,
    };  
};