"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbConnector_1 = require("@core/db-connector/DbConnector");
require("@core/di/testIoC");
const dbConnector = DbConnector_1.DbConnector.getInstance();
beforeAll(async () => {
    await dbConnector.initialize();
    // const entities = dbConnector.getDataSource().entityMetadatas;
    // const manager = dbConnector.getDataSource().manager;
    // await Promise.all(entities.map(entity =>
    //     manager.query(`TRUNCATE TABLE ${entity.tableName}  RESTART IDENTITY CASCADE`),
    // ));
});
afterAll(async () => {
    await dbConnector.closeConnection();
});
//# sourceMappingURL=testRunner.js.map