import { HttpError, ErrorData } from './HttpError';
import { ErrorCode } from './types';
type ValidationErrorItems = {
    [property: string]: string[];
};
interface ValidationErrorData extends ErrorData {
    validationErrors: ValidationErrorItems;
}
declare class ValidationError extends HttpError {
    protected validationErrors_: ValidationErrorItems;
    constructor(validationErrors: ValidationErrorItems);
    get code(): ErrorCode;
    protected get errorCode(): string;
}
export { ValidationError, ValidationErrorData, ValidationErrorItems };
