"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignParams = void 0;
function assignParams(it, params) {
    Object.keys(params).forEach(key => {
        // @ts-ignore
        it[key] = params[key];
    });
}
exports.assignParams = assignParams;
//# sourceMappingURL=assignParams.js.map