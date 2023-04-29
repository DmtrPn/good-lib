"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["InternalServerError"] = 500] = "InternalServerError";
    ErrorCode[ErrorCode["BadRequest"] = 400] = "BadRequest";
    ErrorCode[ErrorCode["Unauthorized"] = 401] = "Unauthorized";
    ErrorCode[ErrorCode["Forbidden"] = 403] = "Forbidden";
    ErrorCode[ErrorCode["NotFound"] = 404] = "NotFound";
    ErrorCode[ErrorCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    ErrorCode[ErrorCode["Conflict"] = 409] = "Conflict";
    ErrorCode[ErrorCode["EntityTooLarge"] = 413] = "EntityTooLarge";
    ErrorCode[ErrorCode["FailedDependency"] = 424] = "FailedDependency";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
//# sourceMappingURL=types.js.map