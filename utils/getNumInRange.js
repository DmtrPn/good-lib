"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumInRange = void 0;
function getNumInRange(value, { min, max }) {
    const num = Number(`${value}`.replace(/(?!^-)\D/gm, ''));
    return num > max ? max : num < min || isNaN(num) ? min : num;
}
exports.getNumInRange = getNumInRange;
//# sourceMappingURL=getNumInRange.js.map