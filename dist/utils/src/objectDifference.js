"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectDifference = void 0;
const lodash_1 = require("lodash");
const objectDifference = (obj, other) => {
    return (0, lodash_1.omit)(obj, (0, lodash_1.keys)(obj).filter(key => (0, lodash_1.isEqual)(obj[key], other[key])));
};
exports.objectDifference = objectDifference;
//# sourceMappingURL=objectDifference.js.map