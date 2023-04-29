"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
const castArray_1 = __importDefault(require("lodash/castArray"));
const TransactionManager_1 = require("./TransactionManager");
class CrudService extends TransactionManager_1.TransactionManager {
    find(options) {
        const command = new this.findCommand(options);
        return command.execute();
    }
    async create(params) {
        const theParams = (0, castArray_1.default)(params).map(createParams => this.enrichCreationParams(createParams));
        await this.executeInTransaction(entityManager => entityManager.createQueryBuilder().insert().into(this.modelClass).values(theParams).execute());
    }
    async update(id, params) {
        await this.executeInTransaction(entityManager => entityManager
            .createQueryBuilder()
            .update(this.modelClass)
            .set(params) //  as UpdateQueryBuilder<M>)
            .where({ id })
            .execute());
    }
}
exports.CrudService = CrudService;
//# sourceMappingURL=CrudService.js.map