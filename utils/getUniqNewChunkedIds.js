"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqNewChunkedIds = void 0;
const getUniqChunkedIds_1 = require("./getUniqChunkedIds");
const getUniqNewIds_1 = require("./getUniqNewIds");
function getUniqNewChunkedIds(currentIds, newIds) {
    const ids = (0, getUniqNewIds_1.getUniqNewIds)(currentIds, newIds);
    return (0, getUniqChunkedIds_1.getUniqChunkedIds)(ids);
}
exports.getUniqNewChunkedIds = getUniqNewChunkedIds;
//# sourceMappingURL=getUniqNewChunkedIds.js.map