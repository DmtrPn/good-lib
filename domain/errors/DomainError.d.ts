export declare class DomainError<T = undefined> extends Error {
    protected parameters: T;
    constructor(parameters?: T);
    protected createMessage(_: T): string;
}
