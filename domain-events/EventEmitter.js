"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = exports.IEventEmitter = void 0;
const event_emitter_1 = require("@nestjs/event-emitter");
class IEventEmitter {
}
exports.IEventEmitter = IEventEmitter;
class EventEmitter {
    static getInstance() {
        if (!this.instance) {
            this.instance = new EventEmitter();
        }
        return this.instance;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        this.eventEmitter = new event_emitter_1.EventEmitter2();
    }
    emit(name, payload) {
        this.eventEmitter.emit(name, payload);
    }
    addListener(name, listenerFn) {
        this.eventEmitter.addListener(name, listenerFn);
    }
}
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map