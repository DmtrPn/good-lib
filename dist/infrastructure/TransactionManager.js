"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionManager = void 0;
const DbConnector_1 = require("@core/db-connector/DbConnector");
class TransactionManager {
    constructor() {
        this.dbConnector = DbConnector_1.DbConnector.getInstance();
    }
    get manager() {
        return this.dbConnector.getDataSource().manager;
    }
    async executeInTransaction(runInTransaction) {
        await this.manager.transaction(runInTransaction);
    }
}
exports.TransactionManager = TransactionManager;
//# sourceMappingURL=TransactionManager.js.map