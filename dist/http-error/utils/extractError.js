"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractError = void 0;
const extractError = (error) => {
    const anyError = error;
    return anyError.errors && anyError.errors instanceof Error ? anyError.errors : error;
};
exports.extractError = extractError;
//# sourceMappingURL=extractError.js.map