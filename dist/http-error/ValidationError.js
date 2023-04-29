"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const HttpError_1 = require("./HttpError");
const types_1 = require("./types");
class ValidationError extends HttpError_1.HttpError {
    constructor(validationErrors) {
        super();
        this.validationErrors_ = validationErrors;
    }
    get code() {
        return types_1.ErrorCode.UnprocessableEntity;
    }
    get errorCode() {
        return 'Validation';
    }
}
exports.ValidationError = ValidationError;
//# sourceMappingURL=ValidationError.js.map