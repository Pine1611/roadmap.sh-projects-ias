import { ERROR_STRINGS } from "../configs/errors.config.mjs";
import { CustomError } from "../utils/customError.mjs";

export const handleError = async (error, _req, res, _next) => {
    const statusCode = error.statusCode || 500;
    if (error instanceof CustomError) {
        return res.status(200).json({
            status: error.message,
            code: error.statusCode,
            message: ERROR_STRINGS[error.message],
        });
    }
    return res.status(statusCode).json({
        status: "error",
        code: 500,
        message: ERROR_STRINGS[error.message],
    });
};
