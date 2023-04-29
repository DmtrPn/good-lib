import { DomainError } from './DomainError';
import { Optional } from '../../types';
export interface ExistenceErrorParams {
    entityName?: string;
    endOfMessage?: string;
    [key: string]: Optional<any>;
}
export declare abstract class ExistenceError<T extends ExistenceErrorParams & {}> extends DomainError<T> {
    protected createMessage({ entityName, endOfMessage, ...parameters }: T): string;
    protected abstract defaultEndOfMessage: string;
}
