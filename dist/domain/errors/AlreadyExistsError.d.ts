import { ExistenceErrorParams, ExistenceError } from './ExistenceError';
declare class AlreadyExistsError<T extends ExistenceErrorParams = {}> extends ExistenceError<T> {
    protected get defaultEndOfMessage(): string;
}
declare const createEntityAlreadyExistsError: (entityName: string) => (id: string) => AlreadyExistsError<{
    entityName: string;
    id: string;
}>;
export { AlreadyExistsError, createEntityAlreadyExistsError };
