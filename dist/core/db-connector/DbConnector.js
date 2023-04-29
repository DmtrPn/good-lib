"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnector = void 0;
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const Config_1 = require("@core/config/Config");
const types_1 = require("@core/config/types");
const LoggerFactory_1 = require("@components/../../logging/LoggerFactory");
class DbConnector {
    static getInstance() {
        if (!this.instance) {
            this.instance = new DbConnector();
        }
        return this.instance;
    }
    constructor() {
        this.logger = LoggerFactory_1.LoggerFactory.getLogger();
        this.dbConfig = Config_1.Config.getConfig(types_1.ConfigName.Db);
        this.dataSource = new typeorm_1.DataSource(this.dbConfig);
        this.dataSource.namingStrategy = new typeorm_naming_strategies_1.SnakeNamingStrategy();
    }
    get manager() {
        return this.dataSource.manager;
    }
    getRepository(entity) {
        return this.dataSource.getRepository(entity);
    }
    getDataSource() {
        if (!this.dataSource.isInitialized) {
            this.logger.info('DB does not initialized');
        }
        return this.dataSource;
    }
    async initialize() {
        if (!this.dataSource.isInitialized) {
            await this.createConnection()
                .then(connection => {
                if (connection.isInitialized) {
                    this.logger.info(`Connection to the database: ${connection.options.database} is established`);
                }
                else {
                    this.logger.error(`Connection to the database: ${connection.options.database} is not established`);
                }
                this.dataSource = connection;
            })
                .catch(error => this.logger.fatal(error));
        }
    }
    async closeConnection() {
        if (this.dataSource && this.dataSource.isInitialized) {
            await this.dataSource.destroy();
        }
    }
    async createConnection() {
        return this.dataSource.initialize();
    }
}
exports.DbConnector = DbConnector;
//# sourceMappingURL=DbConnector.js.map