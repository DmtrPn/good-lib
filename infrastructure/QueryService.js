"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryService = void 0;
const TransactionManager_1 = require("./TransactionManager");
class QueryService extends TransactionManager_1.TransactionManager {
    async find(options) {
        const models = await this.findModels(options);
        return models.map(model => this.create(model));
    }
    findModels(options) {
        const command = new this.findCommand(options);
        return command.execute();
    }
}
exports.QueryService = QueryService;
//# sourceMappingURL=QueryService.js.map