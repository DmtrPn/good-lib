"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeObjectFields = void 0;
const lodash_1 = require("lodash");
const excludeObjectFields = (obj, excludedFields) => {
    return (0, lodash_1.omit)(obj, excludedFields);
};
exports.excludeObjectFields = excludeObjectFields;
//# sourceMappingURL=excludeObjectFields.js.map