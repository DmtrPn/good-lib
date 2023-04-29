"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const lodash_1 = require("lodash");
class BaseModel {
    constructor(params = {}) {
        (0, lodash_1.assign)(this, params);
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=BaseModel.js.map