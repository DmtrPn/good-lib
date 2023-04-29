"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const HttpError_1 = require("./HttpError");
const types_1 = require("./types");
class InternalServerError extends HttpError_1.HttpError {
    get code() {
        return types_1.ErrorCode.InternalServerError;
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=InternalServerError.js.map