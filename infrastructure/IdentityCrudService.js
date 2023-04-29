"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityCrudService = void 0;
const CrudService_1 = require("./CrudService");
class IdentityCrudService extends CrudService_1.CrudService {
    async getById(id) {
        const model = await this.manager.findOneBy(this.modelClass, { id });
        return model !== null && model !== void 0 ? model : undefined;
    }
    async remove(id) {
        await this.manager.delete(this.modelClass, { id });
    }
}
exports.IdentityCrudService = IdentityCrudService;
//# sourceMappingURL=IdentityCrudService.js.map