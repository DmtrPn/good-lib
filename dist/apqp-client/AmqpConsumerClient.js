"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmqpConsumerClient = void 0;
const autobind_1 = __importDefault(require("autobind"));
const AmqpClient_1 = require("./AmqpClient");
class AmqpConsumerClient extends AmqpClient_1.AmqpClient {
    static getInstance(params) {
        if (!this.instance) {
            this.instance = new AmqpConsumerClient(params);
        }
        return this.instance;
    }
    constructor({ onMessage, routing, ...params }) {
        super(params);
        this.onMessage_ = onMessage;
        this.routing = routing;
    }
    async initOther() {
        await Promise.all([
            ...this.routing.map(([exchange, queue]) => this.setupQueue(exchange, queue)),
            this.channel.prefetch(1),
        ]);
    }
    async onMessage(data) {
        const message = this.parseEvent(data.content);
        this.logger.info('receiver: got message', { message });
        await this.onMessage_(message);
        this.channel.ack(data);
    }
    async setupQueue(exchange, queue) {
        await Promise.all([
            this.channel.assertQueue(queue),
            this.bindQueue(exchange, queue),
            this.channel.consume(queue, this.onMessage, { noAck: false }),
        ]);
    }
    async bindQueue(exchange, queue) {
        await this.channel.bindQueue(queue, exchange, '#');
    }
}
__decorate([
    autobind_1.default,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AmqpConsumerClient.prototype, "onMessage", null);
exports.AmqpConsumerClient = AmqpConsumerClient;
//# sourceMappingURL=AmqpConsumerClient.js.map