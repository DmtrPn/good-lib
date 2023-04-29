import { HttpError } from './HttpError';
import { ErrorCode } from './types';
declare class InternalServerError extends HttpError {
    get code(): ErrorCode;
}
export { InternalServerError };
