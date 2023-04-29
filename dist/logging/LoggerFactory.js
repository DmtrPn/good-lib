"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFactory = void 0;
const log4js = __importStar(require("log4js"));
const Config_1 = require("@core/config/Config");
const types_1 = require("@core/config/types");
class LoggerFactory {
    static getLogger() {
        if (!this.logger) {
            const loggerFactory = new LoggerFactory(Config_1.Config.getConfig(types_1.ConfigName.Log));
            this.logger = loggerFactory.create();
        }
        return this.logger;
    }
    constructor(config) {
        this.isLoggerLibInitialized = false;
        this.logConfig = config;
    }
    create(category = 'app') {
        if (!this.isLoggerLibInitialized) {
            this.initializeLoggerLib();
        }
        return log4js.getLogger(category);
    }
    initializeLoggerLib() {
        if (this.isLoggerLibInitialized) {
            return;
        }
        log4js.configure(this.getLoggerLibConfig());
        this.isLoggerLibInitialized = true;
    }
    getLoggerLibConfig() {
        return {
            appenders: {
                everything: this.getAppenderFromConfig(this.logConfig.main),
                access: this.getAppenderFromConfig(this.logConfig.access),
            },
            categories: {
                default: { appenders: ['everything'], level: this.logConfig.main.level },
                db: { appenders: ['everything'], level: this.logConfig.main.level },
                access: { appenders: ['access'], level: this.logConfig.access.level },
            },
        };
    }
    getAppenderFromConfig(categoryConfig) {
        const appenderConfigMap = {
            file: {
                type: 'file',
                filename: categoryConfig.filename,
                maxLogSize: 50 * 1024 * 1024,
                backups: 10,
                compress: true,
            },
            dateFile: {
                type: 'dateFile',
                filename: categoryConfig.filename,
                daysToKeep: 10,
                compress: true,
            },
            console: {
                type: 'console',
            },
        };
        const appender = appenderConfigMap[categoryConfig.type];
        if (!appender) {
            throw new Error(`Appender config of type ${categoryConfig.type} is not defined`);
        }
        if (process.env.JEST_WORKER_ID) {
            appender.type = 'stdout';
        }
        if (categoryConfig.pattern) {
            appender.layout = {
                type: 'pattern',
                pattern: categoryConfig.pattern,
            };
        }
        return appender;
    }
}
exports.LoggerFactory = LoggerFactory;
//# sourceMappingURL=LoggerFactory.js.map