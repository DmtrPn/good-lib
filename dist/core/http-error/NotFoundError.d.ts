import { HttpError } from './HttpError';
declare class NotFoundError extends HttpError {
    get code(): number;
}
export { NotFoundError };
