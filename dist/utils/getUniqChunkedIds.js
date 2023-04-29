"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqChunkedIds = void 0;
const chunk_1 = __importDefault(require("lodash/chunk"));
const getUniqIds_1 = require("./getUniqIds");
function getUniqChunkedIds(ids, chunkSize = 50) {
    return (0, chunk_1.default)((0, getUniqIds_1.getUniqIds)(ids), chunkSize);
}
exports.getUniqChunkedIds = getUniqChunkedIds;
//# sourceMappingURL=getUniqChunkedIds.js.map