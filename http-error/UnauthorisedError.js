"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorisedError = void 0;
const HttpError_1 = require("./HttpError");
const types_1 = require("./types");
class UnauthorisedError extends HttpError_1.HttpError {
    get code() {
        return types_1.ErrorCode.Unauthorized;
    }
}
exports.UnauthorisedError = UnauthorisedError;
//# sourceMappingURL=UnauthorisedError.js.map