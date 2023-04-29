"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqIds = void 0;
const uniq_1 = __importDefault(require("lodash/uniq"));
const compact_1 = __importDefault(require("lodash/compact"));
function getUniqIds(ids) {
    return (0, uniq_1.default)((0, compact_1.default)(ids));
}
exports.getUniqIds = getUniqIds;
//# sourceMappingURL=getUniqIds.js.map