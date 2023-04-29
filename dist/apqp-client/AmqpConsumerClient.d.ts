import { AmqpClient } from './AmqpClient';
import { AmqpConsumerClientParams } from './types';
export declare class AmqpConsumerClient extends AmqpClient {
    private static instance;
    static getInstance(params: AmqpConsumerClientParams): AmqpConsumerClient;
    private readonly onMessage_;
    private readonly routing;
    private constructor();
    protected initOther(): Promise<void>;
    private onMessage;
    private setupQueue;
    private bindQueue;
}
