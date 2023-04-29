"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedDependencyError = void 0;
const HttpError_1 = require("./HttpError");
const types_1 = require("./types");
class FailedDependencyError extends HttpError_1.HttpError {
    get code() {
        return types_1.ErrorCode.FailedDependency;
    }
}
exports.FailedDependencyError = FailedDependencyError;
//# sourceMappingURL=FailedDependencyError.js.map