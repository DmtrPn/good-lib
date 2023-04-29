import { Optional } from '@project-types/common';
export declare abstract class ICrudService<M, CP, UP, FO> {
    abstract find(options: FO): Promise<M[]>;
    abstract getById(id: string): Promise<Optional<M>>;
    abstract create(params: CP | CP[]): void;
    abstract update(id: string, params: UP): void;
    abstract remove(id: string): void;
}
