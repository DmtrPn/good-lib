"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = void 0;
const HttpError_1 = require("./HttpError");
const types_1 = require("./types");
class ConflictError extends HttpError_1.HttpError {
    get code() {
        return types_1.ErrorCode.Conflict;
    }
}
exports.ConflictError = ConflictError;
//# sourceMappingURL=ConflictError.js.map