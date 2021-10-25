import { StatusCodes } from "http-status-codes";
import { MulterError } from "multer";
import { GeneralError } from "../utils/errors";
import { errorResponse } from "../utils/response";

export default (err, req, res, next) => {          
    if (err instanceof GeneralError) {
        return res.status(err.getCode())
            .json(errorResponse(err.message, err.errors));        
    }

    if (err instanceof MulterError) {
        return res.status(StatusCodes.BAD_REQUEST)
            .json(errorResponse(err.message, err.errors));            
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(errorResponse(
            "Something went wrong. It's not your fault and we apologize"
        ));            
};