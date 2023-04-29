import { HttpError } from './HttpError';
declare class BadRequestError extends HttpError {
    get code(): number;
}
export { BadRequestError };
