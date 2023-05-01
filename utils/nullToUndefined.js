"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullToUndefined = void 0;
const lodash_1 = require("lodash");
const nullToUndefined = (obj) => {
    const transformed = (0, lodash_1.cloneDeep)(obj);
    (0, lodash_1.keys)(transformed)
        .forEach(key => {
        // @ts-ignore
        if ((0, lodash_1.isNull)(transformed[key])) {
            // @ts-ignore
            transformed[key] = undefined;
        }
    });
    return transformed;
};
exports.nullToUndefined = nullToUndefined;
//# sourceMappingURL=nullToUndefined.js.map