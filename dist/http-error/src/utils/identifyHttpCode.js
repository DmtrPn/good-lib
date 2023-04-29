"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.identifyHttpCode = void 0;
const isUndefined_1 = __importDefault(require("lodash/isUndefined"));
const HttpError_1 = require("../HttpError");
const types_1 = require("./types");
const identifyHttpCode = (error) => {
    let code = types_1.HttpCode.InternalServer;
    if (error instanceof HttpError_1.HttpError) {
        code = error.code;
    }
    else if (!(0, isUndefined_1.default)(error.status)) {
        code = error.status;
    }
    else if (!(0, isUndefined_1.default)(error) && !!error.statusCode) {
        code = error.statusCode;
    }
    return code;
};
exports.identifyHttpCode = identifyHttpCode;
//# sourceMappingURL=identifyHttpCode.js.map