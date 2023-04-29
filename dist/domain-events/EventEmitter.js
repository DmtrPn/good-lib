"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = exports.IEventEmitter = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const event_emitter_1 = require("@nestjs/event-emitter");
class IEventEmitter {
}
exports.IEventEmitter = IEventEmitter;
let EventEmitter = class EventEmitter {
    constructor() {
        this.eventEmitter = new event_emitter_1.EventEmitter2();
    }
    emit(name, payload) {
        this.eventEmitter.emit(name, payload);
    }
    addListener(name, listenerFn) {
        this.eventEmitter.addListener(name, listenerFn);
    }
};
EventEmitter = __decorate([
    typescript_ioc_1.Singleton
], EventEmitter);
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map