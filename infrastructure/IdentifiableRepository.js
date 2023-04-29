"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifiableRepository = void 0;
const http_error_1 = require("../http-error");
const isDefined_1 = require("../utils/isDefined");
const Repository_1 = require("./Repository");
/**
 * E - domain entity
 * M - ORM entity
 * FO - search options
 */
class IdentifiableRepository extends Repository_1.Repository {
    constructor(modelClass) {
        super(modelClass);
    }
    async get(id) {
        const model = await this.getModel(id);
        return model ? this.create(model) : undefined;
    }
    async has(id) {
        const entity = await this.getModel(id);
        return (0, isDefined_1.isDefined)(entity);
    }
    async getOrFail(id) {
        const entity = await this.get(id);
        if (!entity) {
            throw new http_error_1.NotFoundError(`${this.entityName} with id ${id} not found`);
        }
        return entity;
    }
    async add(entity) {
        const id = entity.id;
        const isExists = await this.get(id);
        if (isExists) {
            throw new http_error_1.ConflictError(`${this.entityName} with id ${id} already exist`);
        }
        await this.save(entity);
    }
    async getModel(id) {
        return this.manager.findOneBy(this.ormEntity, { id });
    }
}
exports.IdentifiableRepository = IdentifiableRepository;
//# sourceMappingURL=IdentifiableRepository.js.map