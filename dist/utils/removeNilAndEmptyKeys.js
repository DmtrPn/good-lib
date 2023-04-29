"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNilAndEmptyKeys = void 0;
const lodash_1 = __importDefault(require("lodash"));
const removeNilAndEmptyKeys = (o) => {
    return (0, lodash_1.default)(o)
        .omitBy(value => lodash_1.default.isNil(value) ||
        ((typeof value === 'string' || Array.isArray(value)) && value.length === 0))
        .value();
};
exports.removeNilAndEmptyKeys = removeNilAndEmptyKeys;
//# sourceMappingURL=removeNilAndEmptyKeys.js.map