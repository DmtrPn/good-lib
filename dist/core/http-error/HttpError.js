"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
const ERROR = 'Error';
class HttpError extends Error {
    get data() {
        return {
            code: this.errorCode,
            message: this.message,
        };
    }
    get errorCode() {
        let code = this.constructor.name;
        if (code.endsWith(ERROR)) {
            code = code.replace(ERROR, '');
        }
        return code;
    }
}
exports.HttpError = HttpError;
//# sourceMappingURL=HttpError.js.map