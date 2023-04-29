import { EntityManager, EntityMetadata } from 'typeorm';
import { Class } from '../types/common';
export declare abstract class TransactionManager {
    protected get manager(): EntityManager;
    protected getColumnName<T extends Class<any>>(propertyName: keyof InstanceType<T> & string, modelClass: T): string;
    protected getTableName(modelClass: Function): string;
    protected getMetadata(modelClass: Function): EntityMetadata;
    protected executeInTransaction(runInTransaction: (entityManager: EntityManager) => Promise<unknown>): Promise<void>;
}
