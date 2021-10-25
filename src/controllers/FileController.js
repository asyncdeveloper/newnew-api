import { StatusCodes } from "http-status-codes";
import { BadRequest } from "../utils/errors";
import formatFileResponse from "../utils/formatFileResponse";
import generateThumbnail from "../utils/generateThumbnail";
import { apiResponse } from "../utils/response";

class FileController {

    async create (req, res, next) {
        try {        
            if(! req.file) {
                throw new BadRequest('No File Found');
            }                                          
            const isVideo = req.isVideo || false;

            await generateThumbnail(req.file, isVideo);
        
            const fileData = formatFileResponse(req.file, isVideo);

            return res.status(StatusCodes.CREATED)
                .json(apiResponse("File uploaded successfully", fileData));
                                
        } catch (err) {                    
            next(err);
        }
    }

}

export default new FileController();