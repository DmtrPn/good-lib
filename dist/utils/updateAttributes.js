"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAttributes = void 0;
function updateAttributes(it, params) {
    Object.keys(params).forEach(key => {
        var _a;
        // @ts-ignore
        it[key] = (_a = params[key]) !== null && _a !== void 0 ? _a : it[key];
    });
}
exports.updateAttributes = updateAttributes;
//# sourceMappingURL=updateAttributes.js.map