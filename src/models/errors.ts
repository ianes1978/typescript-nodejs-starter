export class HttpError extends Error {
    statusCode: any;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode || 500;
    }
}