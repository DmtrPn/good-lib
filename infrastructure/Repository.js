"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const lodash_1 = require("lodash");
const TransactionManager_1 = require("./TransactionManager");
/**
 * E - domain entity
 * M - ORM entity
 * FO - search options
 */
class Repository extends TransactionManager_1.TransactionManager {
    constructor(modelClass) {
        super();
        this.ormEntity = modelClass;
    }
    async find(findOption = {}) {
        const models = await this.findModels(findOption);
        return this.createList(models);
    }
    async save(entity) {
        return Array.isArray(entity) ? this.saveAll(entity) : this.saveOne(entity);
    }
    async delete(entity_) {
        throw Error(`Delete methode for ${this.constructor.name} not implement`);
    }
    get entityName() {
        return `${this.constructor.name.replace('Repository', '')}`;
    }
    async findModels(findOption) {
        const searchRequest = this.createFindCommand(findOption);
        return searchRequest.execute();
    }
    createList(models) {
        return (0, lodash_1.compact)(models.map(model => this.create(model)));
    }
    async saveOne(entity) {
        await this.executeInTransaction(entityManager => entityManager.save(this.modelFrom(entity)));
    }
    async saveAll(list) {
        const models = list.map(it => this.modelFrom(it));
        await this.executeInTransaction(entityManager => entityManager.save(models));
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map