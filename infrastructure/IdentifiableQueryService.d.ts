import { QueryService, IQueryService } from './QueryService';
export interface IIdentifiableQueryService<M extends {
    id: string;
}, FO extends object = {}, R = M> extends IQueryService<M, FO, R> {
    getById(id: string): Promise<R>;
}
export declare abstract class IdentifiableQueryService<M extends {
    id: string;
}, FO extends object, R = M> extends QueryService<M, FO, R> {
    getById(id: string): Promise<R>;
    protected findOneById(id: string): Promise<M | null>;
}
