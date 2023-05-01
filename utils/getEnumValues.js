"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnumValues = void 0;
function getEnumValues(sourceEnum) {
    return Object.values(sourceEnum).filter(item => {
        const isEnumKey = item[0] === item[0].toUpperCase();
        return !isEnumKey;
    });
}
exports.getEnumValues = getEnumValues;
//# sourceMappingURL=getEnumValues.js.map