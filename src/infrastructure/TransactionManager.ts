import { EntityManager, EntityMetadata, getConnection } from 'typeorm';
import { getEntityManagerOrTransactionManager } from 'typeorm-transactional-cls-hooked';
import { Class } from '../types/common';

export abstract class TransactionManager {
    protected get manager(): EntityManager {
        return getEntityManagerOrTransactionManager('default', undefined) ?? getConnection().manager;
    }

    protected getColumnName<T extends Class<any>>(propertyName: keyof InstanceType<T> & string, modelClass: T): string {
        return this.getMetadata(modelClass).columns.find(it => it.propertyName === propertyName)!
            .databaseNameWithoutPrefixes;
    }

    protected getTableName(modelClass: Function): string {
        return this.manager.connection.getMetadata(modelClass).tableName;
    }

    protected getMetadata(modelClass: Function): EntityMetadata {
        return this.manager.connection.getMetadata(modelClass);
    }

    protected async executeInTransaction(
        runInTransaction: (entityManager: EntityManager) => Promise<unknown>,
    ): Promise<void> {
        await this.manager.transaction(runInTransaction);
    }
}
