"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionManager = void 0;
const typeorm_1 = require("typeorm");
const typeorm_transactional_cls_hooked_1 = require("typeorm-transactional-cls-hooked");
class TransactionManager {
    get manager() {
        var _a;
        return (_a = (0, typeorm_transactional_cls_hooked_1.getEntityManagerOrTransactionManager)('default', undefined)) !== null && _a !== void 0 ? _a : (0, typeorm_1.getConnection)().manager;
    }
    getColumnName(propertyName, modelClass) {
        return this.getMetadata(modelClass).columns.find(it => it.propertyName === propertyName)
            .databaseNameWithoutPrefixes;
    }
    getTableName(modelClass) {
        return this.manager.connection.getMetadata(modelClass).tableName;
    }
    getMetadata(modelClass) {
        return this.manager.connection.getMetadata(modelClass);
    }
    async executeInTransaction(runInTransaction) {
        await this.manager.transaction(runInTransaction);
    }
}
exports.TransactionManager = TransactionManager;
//# sourceMappingURL=TransactionManager.js.map