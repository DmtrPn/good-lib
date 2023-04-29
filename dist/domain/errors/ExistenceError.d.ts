import { DomainError } from './DomainError';
export interface ExistenceErrorParams {
    entityName?: string;
    endOfMessage?: string;
}
export declare abstract class ExistenceError<T extends ExistenceErrorParams> extends DomainError<T> {
    protected createMessage({ entityName, endOfMessage, ...parameters }: T): string;
    protected abstract defaultEndOfMessage: string;
}
