import { Logger } from 'log4js';
import { Observable } from 'rxjs';
import { ExecutionContext, CallHandler } from '@nestjs/common';
export declare class BotLoggingInterceptor {
    private logger;
    constructor(logger: Logger);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>>;
    protected getLogMessage(context: ExecutionContext): string;
    protected getAdditionalMessage(context: ExecutionContext): string;
}
