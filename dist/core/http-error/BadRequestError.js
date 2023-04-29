"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const HttpError_1 = require("./HttpError");
const types_1 = require("./types");
class BadRequestError extends HttpError_1.HttpError {
    get code() {
        return types_1.ErrorCode.BadRequest;
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=BadRequestError.js.map