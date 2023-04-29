"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqNewIds = void 0;
const getUniqIds_1 = require("@utils/getUniqIds");
function getUniqNewIds(currentIds, newIds) {
    const uniqIds = (0, getUniqIds_1.getUniqIds)(newIds);
    return uniqIds.filter(id => !currentIds.includes(id));
}
exports.getUniqNewIds = getUniqNewIds;
//# sourceMappingURL=getUniqNewIds.js.map