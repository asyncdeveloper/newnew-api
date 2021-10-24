import { StatusCodes } from "http-status-codes";
import { GeneralError } from "../utils/errors";

export default (err, req, res, _) => {    
    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            message: err.message,
            errors: err.errors,
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 
        "Something went wrong. It's not your fault and we apologize for this",
        errors: null,
    });
};