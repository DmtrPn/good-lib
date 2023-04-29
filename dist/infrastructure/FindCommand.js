"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCommand = void 0;
const lodash_1 = require("lodash");
const TransactionManager_1 = require("./TransactionManager");
class FindCommand extends TransactionManager_1.TransactionManager {
    constructor(fo, modelClass) {
        super();
        this.isReturnEmpty = false;
        (0, lodash_1.assign)(this, fo);
        this.modelClass = modelClass;
        this.qb = this.createBuilder(modelClass, this.tableName);
    }
    execute() {
        return this.buildQuery().getResult();
    }
    buildQuery() {
        return this.addRelations().addFilters().orderBy();
    }
    addRelations() {
        return this;
    }
    addFilters() {
        return this;
    }
    orderBy() {
        return this;
    }
    getMany() {
        return this.qb.getMany();
    }
    filterBy(field, values, table = this.tableName) {
        if ((0, lodash_1.isUndefined)(values)) {
            return this;
        }
        const columnName = `${table}.${field}`;
        const isArrayValues = (0, lodash_1.isArray)(values);
        if (isArrayValues) {
            this.checkListOnSetAndEmpty(values);
        }
        if ((0, lodash_1.isNull)(values)) {
            this.qb.andWhere(`${columnName} IS NULL`);
        }
        else {
            this.qb.andWhere(isArrayValues ? `${columnName} = ANY(:${field})` : `${columnName} = :${field}`, {
                [field]: values,
            });
        }
        return this;
    }
    get tableName() {
        return this.getTableName(this.modelClass);
    }
    checkListOnSetAndEmpty(list) {
        if ((0, lodash_1.isEmpty)(list)) {
            this.isReturnEmpty = true;
        }
    }
    createBuilder(modelClass, alias) {
        return this.manager.createQueryBuilder(modelClass, alias);
    }
    getTableName(modelClass) {
        return this.manager.connection.getMetadata(modelClass).tableName;
    }
    async getResult() {
        return this.isReturnEmpty ? [] : this.getMany();
    }
}
exports.FindCommand = FindCommand;
//# sourceMappingURL=FindCommand.js.map