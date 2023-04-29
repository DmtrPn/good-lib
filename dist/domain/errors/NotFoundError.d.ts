import { ExistenceErrorParams, ExistenceError } from './ExistenceError';
declare class NotFoundError<T extends ExistenceErrorParams = {}> extends ExistenceError<T> {
    protected get defaultEndOfMessage(): string;
}
declare const createEntityNotFoundError: (entityName: string) => (id: unknown) => NotFoundError<{
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: PropertyKey): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: PropertyKey): boolean;
    id?: undefined;
    entityName: string;
} | {
    id: unknown;
    entityName: string;
}>;
export { NotFoundError, createEntityNotFoundError };
