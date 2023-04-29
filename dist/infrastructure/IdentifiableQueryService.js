"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifiableQueryService = void 0;
const QueryService_1 = require("./QueryService");
class IdentifiableQueryService extends QueryService_1.QueryService {
    async getById(id) {
        const model = await this.findOneById(id);
        return this.create(model);
    }
    findOneById(id) {
        return this.manager.findOneBy(this.modelClass, { id });
    }
}
exports.IdentifiableQueryService = IdentifiableQueryService;
//# sourceMappingURL=IdentifiableQueryService.js.map