"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterObjectByKey = void 0;
const lodash_1 = require("lodash");
const filterObjectByKey = (obj, filterFunction) => {
    return (0, lodash_1.pick)(obj, (0, lodash_1.keys)(obj).filter(filterFunction));
};
exports.filterObjectByKey = filterObjectByKey;
//# sourceMappingURL=filterObjectByKey.js.map