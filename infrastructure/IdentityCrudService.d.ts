import { CrudService } from './CrudService';
import { Optional } from '../types';
export declare abstract class IdentityCrudService<M extends object & {
    id: string;
}, CreationParams extends Partial<M>, UpdateParams extends Partial<M>, FO extends object = {}> extends CrudService<M, CreationParams, UpdateParams, FO> {
    getById(id: string): Promise<Optional<M>>;
    remove(id: string): Promise<void>;
}
