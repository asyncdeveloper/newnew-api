import { StatusCodes } from "http-status-codes";

export class GeneralError extends Error {
    
    constructor(message, errors) {
        super();

        this.message = message;
        this.errors = errors;
    }

    getCode() {
        if (this instanceof BadRequest) {
            return StatusCodes.BAD_REQUEST;
        }

        if (this instanceof NotFound) {
            return StatusCodes.NOT_FOUND;
        }       

        return StatusCodes.INTERNAL_SERVER_ERROR;
    }
}

export class BadRequest extends GeneralError { }

export class NotFound extends GeneralError { }