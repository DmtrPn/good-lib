"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixOnlyNumbers = void 0;
function fixOnlyNumbers(value) {
    return Number(value.replace(/[^0-9]/g, ''));
}
exports.fixOnlyNumbers = fixOnlyNumbers;
//# sourceMappingURL=fixOnlyNumbers.js.map