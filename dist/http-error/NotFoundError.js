"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const HttpError_1 = require("./HttpError");
const types_1 = require("./types");
class NotFoundError extends HttpError_1.HttpError {
    get code() {
        return types_1.ErrorCode.NotFound;
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=NotFoundError.js.map