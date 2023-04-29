import { Class } from '../types/common';
import { TransactionManager } from './TransactionManager';
import { FindCommand } from './FindCommand';
export interface IQueryService<M extends object, FO extends object = {}, R = M> {
    find(options: FO): Promise<R[]>;
}
export declare abstract class QueryService<M extends object, FO extends object = {}, R = M> extends TransactionManager implements IQueryService<M, FO, R> {
    protected abstract modelClass: Class<M>;
    protected abstract findCommand: Class<FindCommand<M, FO>>;
    find(options: FO): Promise<R[]>;
    protected abstract create(model: M, ...params: any): R;
    protected findModels(options: FO): Promise<M[]>;
}
