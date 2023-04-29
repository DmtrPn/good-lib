import { HttpError } from './HttpError';
import { ErrorCode } from './types';
export declare class FailedDependencyError extends HttpError {
    get code(): ErrorCode;
}
