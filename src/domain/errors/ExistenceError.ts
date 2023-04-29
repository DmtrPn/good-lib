import { DomainError } from './DomainError';
import { Optional } from '../../types';

export interface ExistenceErrorParams {
    entityName?: string;
    endOfMessage?: string;
    [key: string]: Optional<any>;
}

export abstract class ExistenceError<T extends ExistenceErrorParams & {}> extends DomainError<T> {
    protected override createMessage({
        entityName = 'Entity',
        endOfMessage = this.defaultEndOfMessage,
        ...parameters
    }: T): string {
        const parametersString = Object.keys(parameters)
            .map(key => `${key} = ${parameters[key]}`)
            .join(', ');

        return `${entityName} ${endOfMessage}: ${parametersString}`;
    }

    protected abstract defaultEndOfMessage: string;
}
