export const apiResponse = (message = null, data = null) => {
    return { message, data };
};

export const errorResponse = (message = null, errors = null) => {
    return { message, errors };
};
