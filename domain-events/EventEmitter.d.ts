export declare abstract class IEventEmitter {
    abstract emit(name: string, payload: object): void;
    abstract addListener(name: string, listenerFn: Function): void;
}
export declare class EventEmitter implements IEventEmitter {
    private static instance;
    static getInstance(): EventEmitter;
    private eventEmitter;
    private constructor();
    emit(name: string, payload: object): void;
    addListener(name: string, listenerFn: Function): void;
}
