"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotLoggingInterceptor = void 0;
const operators_1 = require("rxjs/operators");
// const IS_PROD = ['prod', 'production'].includes(process.env.DOBRO_ENV);
class BotLoggingInterceptor {
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
            this.logger.info(`${message} ${additionalMessage} time: ${Date.now() - startTime} ms`);
            this.logger.debug(`Request-body: ${requestBody}`);
            this.logger.debug(`Response-body: ${JSON.stringify(responseData)}`);
        };
        return next.handle().pipe((0, operators_1.tap)(complete));
    }
    getLogMessage(context) {
        var _a, _b;
        const [{ update }] = context.getArgs();
        const message = (_a = update === null || update === void 0 ? void 0 : update.message) !== null && _a !== void 0 ? _a : (_b = update === null || update === void 0 ? void 0 : update.callback_query) === null || _b === void 0 ? void 0 : _b.message;
        return !!message ? `From ${message.from.username}` : '-';
    }
    getAdditionalMessage(context) {
        var _a, _b, _c, _d;
        const { update } = context.switchToHttp().getRequest();
        const controllerName = context.getClass().name;
        const methodName = context.getHandler().name;
        const action = `${controllerName}.${methodName}`;
        return `data: ${(_d = (_b = (_a = update.callback_query) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : (_c = update.message) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : '-'} action: ${action}`;
    }
}
exports.BotLoggingInterceptor = BotLoggingInterceptor;
//# sourceMappingURL=BotLoggingInterceptor.js.map