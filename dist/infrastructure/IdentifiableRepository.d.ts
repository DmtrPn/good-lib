import { Class, Optional } from '../types/common';
import { Entity } from '../domain';
import { Repository } from './Repository';
/**
 * E - domain entity
 * M - ORM entity
 * FO - search options
 */
export declare abstract class IdentifiableRepository<E extends Entity, M extends Object, FO> extends Repository<E, M, FO> {
    protected ormEntity: Class<M>;
    protected constructor(modelClass: Class<M>);
    get(id: E['id']): Promise<Optional<E>>;
    has(id: E['id']): Promise<boolean>;
    getOrFail(id: E['id']): Promise<E>;
    add(entity: E): Promise<void>;
    protected getModel(id: E['id']): Promise<M | null>;
}
