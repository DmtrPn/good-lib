interface Params<B> {
    body: B;
}
export declare abstract class DomainEvent<B> {
    body: B;
    constructor({ body }: Params<B>);
}
export {};
