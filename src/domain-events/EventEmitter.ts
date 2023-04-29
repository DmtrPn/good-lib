import { EventEmitter2 } from '@nestjs/event-emitter';

export abstract class IEventEmitter {
    public abstract emit(name: string, payload: object): void;
    public abstract addListener(name: string, listenerFn: Function): void;
}

export class EventEmitter implements IEventEmitter {
    private static instance: EventEmitter;
    public static getInstance(): EventEmitter {
        if (!this.instance) {
            this.instance = new EventEmitter();
        }

        return this.instance;
    }

    private eventEmitter = new EventEmitter2();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public emit(name: string, payload: object): void {
        this.eventEmitter.emit(name, payload);
    }

    public addListener(name: string, listenerFn: Function): void {
        this.eventEmitter.addListener(name, listenerFn as any);
    }
}
