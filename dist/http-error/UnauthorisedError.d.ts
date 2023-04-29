import { HttpError } from './HttpError';
import { ErrorCode } from './types';
declare class UnauthorisedError extends HttpError {
    get code(): ErrorCode;
}
export { UnauthorisedError };
