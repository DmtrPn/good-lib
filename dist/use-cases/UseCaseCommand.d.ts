export declare abstract class UseCaseCommand<T extends object> {
    protected params: T;
    constructor(params: T);
    abstract execute(): void | Promise<void>;
    setData(): void;
}
