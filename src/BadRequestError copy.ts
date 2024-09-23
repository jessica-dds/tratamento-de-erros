import { ApiError } from "./ApiError";

export class NotFoundtError extends ApiError {
    constructor(message: string) {
        super(message, 404)
    }
}