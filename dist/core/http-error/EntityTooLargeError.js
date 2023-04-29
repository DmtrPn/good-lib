"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityTooLargeError = void 0;
const HttpError_1 = require("./HttpError");
const types_1 = require("./types");
class EntityTooLargeError extends HttpError_1.HttpError {
    get code() {
        return types_1.ErrorCode.EntityTooLarge;
    }
}
exports.EntityTooLargeError = EntityTooLargeError;
//# sourceMappingURL=EntityTooLargeError.js.map