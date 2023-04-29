import { DataSource, EntityManager, Repository, EntityTarget } from 'typeorm';
export declare class DbConnector {
    private static instance;
    static getInstance(): DbConnector;
    private dataSource;
    private logger;
    private dbConfig;
    private constructor();
    get manager(): EntityManager;
    getRepository<Entity>(entity: EntityTarget<Entity>): Repository<Entity>;
    getDataSource(): DataSource;
    initialize(): Promise<void>;
    closeConnection(): Promise<void>;
    protected createConnection(): Promise<DataSource>;
}
