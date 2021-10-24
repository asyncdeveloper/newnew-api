import { StatusCodes } from "http-status-codes";
import { apiResponse } from "../utils/response";

class FileController {

    async create (req, res, next) {
        try {  
            return res.status(StatusCodes.CREATED)
                .json(apiResponse("File uploaded successfully", req.file));
                                
        } catch (err) {                    
            next(err);
        }
    }

}

export default new FileController();