"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const operators_1 = require("rxjs/operators");
const IS_PROD = ['prod', 'production'].includes(process.env.DOBRO_ENV);
class LoggingInterceptor {
    constructor(logger) {
        this.logger = logger;
    }
    intercept(context, next) {
        const startTime = Date.now();
        const [{ body }] = context.getArgs();
        const message = this.getLogMessage(context);
        const additionalMessage = this.getAdditionalMessage(context);
        let requestBody = '';
        try {
            requestBody = JSON.stringify(body);
        }
        catch (e) {
            console.error('Cant stringify body:', body);
            console.error('Error:', e);
        }
        const complete = (responseData) => {
            const statusCode = context.switchToHttp().getResponse().statusCode;
            if (IS_PROD) {
                this.logger.info(`${message} ${statusCode} ${additionalMessage} ${Date.now() - startTime}`);
            }
            else {
                // tslint:disable-next-line:max-line-length
                this.logger.info(`${message} statusCode: ${statusCode} ${additionalMessage} time: ${Date.now() - startTime} ms`);
            }
            this.logger.debug(`Request-body: ${requestBody}`);
            this.logger.debug(`Response-body: ${JSON.stringify(responseData)}`);
        };
        return next.handle().pipe((0, operators_1.tap)(complete));
    }
    getLogMessage(context) {
        const [{ url, method, connection: { remoteAddress }, },] = context.getArgs();
        return `${remoteAddress} ${method} ${decodeURI(url)}`;
    }
    getAdditionalMessage(context) {
        const [{ headers }] = context.getArgs();
        const request = context.switchToHttp().getRequest();
        const controllerName = context.getClass().name;
        const methodName = context.getHandler().name;
        const action = `${controllerName}.${methodName}`;
        return IS_PROD
            ? `${request.id} ${action}`
            : `userAgent: ${headers['user-agent']} requestId: ${request.id} action: ${action}`;
    }
}
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=LoggingInterceptor.js.map