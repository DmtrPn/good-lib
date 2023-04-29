import { EntityManager } from 'typeorm';
import { DbConnector } from '@core/db-connector/DbConnector';
export declare abstract class TransactionManager {
    protected readonly dbConnector: DbConnector;
    protected get manager(): EntityManager;
    protected executeInTransaction(runInTransaction: (entityManager: EntityManager) => Promise<unknown>): Promise<void>;
}
