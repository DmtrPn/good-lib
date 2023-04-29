"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNilKeys = void 0;
const lodash_1 = __importDefault(require("lodash"));
const removeNilKeys = (o) => {
    return (0, lodash_1.default)(o).omitBy(lodash_1.default.isNil).value();
};
exports.removeNilKeys = removeNilKeys;
//# sourceMappingURL=removeNiKeys.js.map