import * as log4js from 'log4js';
import { LogConfig, LogCategoryConfig } from './types';
export declare class LoggerFactory {
    private static logger;
    static getLogger(): log4js.Logger;
    protected readonly logConfig: LogConfig;
    protected isLoggerLibInitialized: boolean;
    private constructor();
    create(category?: string): any;
    protected initializeLoggerLib(): void;
    protected getLoggerLibConfig(): {
        appenders: {
            everything: any;
            access: any;
        };
        categories: {
            default: {
                appenders: string[];
                level: string;
            };
            db: {
                appenders: string[];
                level: string;
            };
            access: {
                appenders: string[];
                level: string;
            };
        };
    };
    protected getAppenderFromConfig(categoryConfig: LogCategoryConfig): any;
}
