export class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const createCustomError = (statusCode, message) => {
    return new CustomError(statusCode, message);
};
