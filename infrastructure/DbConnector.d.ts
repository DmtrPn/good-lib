import { DataSource, EntityManager, Repository, EntityTarget } from 'typeorm';
import { DbConnectorInitParams } from './types';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
export declare class DbConnector {
    private static instance;
    static getInstance(): DbConnector;
    private dataSource;
    private logger;
    get manager(): EntityManager;
    getRepository<Entity extends ObjectLiteral>(entity: EntityTarget<Entity>): Repository<Entity>;
    getDataSource(): DataSource;
    initialize({ config, logger }: DbConnectorInitParams): Promise<void>;
    closeConnection(): Promise<void>;
    protected createConnection(): Promise<DataSource>;
}
