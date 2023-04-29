"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
const HttpError_1 = require("./HttpError");
const types_1 = require("./types");
class ForbiddenError extends HttpError_1.HttpError {
    get code() {
        return types_1.ErrorCode.Forbidden;
    }
}
exports.ForbiddenError = ForbiddenError;
//# sourceMappingURL=ForbiddenError.js.map