import { AmqpClient } from './AmqpClient';
import { AmqpMetadata, AmqpPublisherClientParams } from './types';
export declare class AmqpPublisherClient extends AmqpClient {
    private static instance;
    static getInstance(params: AmqpPublisherClientParams): AmqpPublisherClient;
    private readonly exchanges;
    private readonly routing;
    private constructor();
    send<T extends AmqpMetadata>(event: T): Promise<void>;
    protected initOther(): Promise<void>;
    private assertExchanges;
}
