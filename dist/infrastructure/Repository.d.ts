import { Class } from '@project-types/common';
import { TransactionManager } from './TransactionManager';
import { FindCommand } from './FindCommand';
/**
 * E - domain entity
 * M - ORM entity
 * FO - search options
 */
export declare abstract class Repository<E, M, FO> extends TransactionManager {
    protected ormEntity: Class<M>;
    protected constructor(modelClass: Class<M>);
    find(findOption?: FO): Promise<E[]>;
    save(entity: E): Promise<void>;
    save(entity: E[]): Promise<void>;
    delete(entity: E): Promise<void>;
    delete(entity: E[]): Promise<void>;
    protected get entityName(): string;
    protected findModels(findOption: FO): Promise<M[]>;
    protected createList(models: M[]): E[];
    protected saveOne(entity: E): Promise<void>;
    protected saveAll(list: E[]): Promise<void>;
    protected abstract create(model: M): E;
    protected abstract createFindCommand(findOption: FO): FindCommand<M, FO>;
    protected abstract modelFrom(e: E): M;
}
