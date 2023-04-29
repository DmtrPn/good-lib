import { Class, Attributes } from '../types';
import { TransactionManager } from './TransactionManager';
import { FindCommand } from './FindCommand';
export declare abstract class CrudService<M extends object, CreationParams extends Partial<M>, UpdateParams = Omit<Attributes<M>, 'id'>, FO extends object = {}> extends TransactionManager {
    protected abstract modelClass: Class<M>;
    protected abstract findCommand: Class<FindCommand<M, FO>>;
    find(options: FO): Promise<M[]>;
    create(params: CreationParams | CreationParams[]): Promise<void>;
    update(id: string, params: UpdateParams): Promise<void>;
    protected abstract enrichCreationParams(params: CreationParams): M;
}
