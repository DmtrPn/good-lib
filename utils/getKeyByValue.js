"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyByValue = void 0;
function getKeyByValue(obj, value) {
    const keys = Object.keys(obj);
    return keys.find(k => obj[k] === value);
}
exports.getKeyByValue = getKeyByValue;
//# sourceMappingURL=getKeyByValue.js.map