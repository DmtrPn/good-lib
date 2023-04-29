"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmqpPublisherClient = void 0;
const AmqpClient_1 = require("./AmqpClient");
function makeRoutingPrams(exchange, queue) {
    return [exchange, `${exchange}.${queue}.#`];
}
class AmqpPublisherClient extends AmqpClient_1.AmqpClient {
    static getInstance(params) {
        if (!this.instance) {
            this.instance = new AmqpPublisherClient(params);
        }
        return this.instance;
    }
    constructor({ exchanges, routing, ...params }) {
        super(params);
        this.routing = {};
        this.exchanges = exchanges;
        routing.forEach(([event, exchange, queue]) => {
            this.routing[event] = makeRoutingPrams(exchange, queue);
        });
    }
    async send(event) {
        const [exchange, routingKey] = this.routing[event.eventName];
        try {
            this.channel.publish(exchange, routingKey, this.serializeEvent(event), { persistent: true });
            this.logger.info('event has been sent', { routingKey });
        }
        catch (error) {
            this.logger.error('event sending error', { error, routingKey });
        }
    }
    async initOther() {
        await this.assertExchanges();
    }
    async assertExchanges() {
        await Promise.all(this.exchanges.map(it => this.channel.assertExchange(it, 'topic')));
    }
}
exports.AmqpPublisherClient = AmqpPublisherClient;
//# sourceMappingURL=AmqpPublisherClient.js.map