import { SelectQueryBuilder } from 'typeorm';
import { Class, Nullable } from '@project-types/common';
import { TransactionManager } from './TransactionManager';
type ValueType<M, P extends keyof M> = Nullable<M[P]> | Nullable<M[P]>[] | undefined;
export declare abstract class FindCommand<M, FO> extends TransactionManager {
    protected modelClass: Class<M>;
    protected qb: SelectQueryBuilder<M>;
    private isReturnEmpty;
    protected constructor(fo: FO, modelClass: Class<M>);
    execute(): Promise<M[]>;
    protected buildQuery(): this;
    protected addRelations(): this;
    protected addFilters(): this;
    protected orderBy(): this;
    protected getMany(): Promise<M[]>;
    protected filterBy<P extends keyof M & string>(field: P, values: ValueType<M, P>, table?: string): this;
    private get tableName();
    private checkListOnSetAndEmpty;
    private createBuilder;
    private getTableName;
    private getResult;
}
export {};
