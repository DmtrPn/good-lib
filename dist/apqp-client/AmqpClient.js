"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmqpClient = void 0;
const amqplib_1 = require("amqplib");
const utils_1 = require("@aa/utils");
class AmqpClient {
    constructor({ config, logger }) {
        this.isConnectionCancelled = false;
        this.config = config;
        this.logger = logger;
    }
    get url() {
        const { protocol, username, password, hostname, vhost } = this.config;
        return `${protocol}://${username}:${password}@${hostname}${vhost}`;
    }
    async init() {
        await this.connect();
        await this.initChannel();
        await this.initOther();
    }
    async dispose() {
        this.isConnectionCancelled = true;
        if ((0, utils_1.isDefined)(this.channel)) {
            await this.channel.close();
        }
        await this.connection.close();
    }
    async initOther() { }
    serializeEvent(data) {
        return Buffer.from(JSON.stringify(data));
    }
    parseEvent(data) {
        return JSON.parse(data.toString());
    }
    async connect() {
        try {
            this.connection = await (0, amqplib_1.connect)(this.url);
            this.logger.info('rabbitmq connection created');
        }
        catch (err) {
            this.logger.error('rabbitmq connection creation failed: ', err);
        }
    }
    async initChannel() {
        if (!(0, utils_1.isDefined)(this.channel) && !this.isConnectionCancelled) {
            try {
                this.channel = await this.connection.createConfirmChannel();
                this.channel.on('error', error => {
                    this.logger.error('rabbitmq channel error: ', error);
                });
                this.channel.on('connect', () => {
                    this.logger.info('rabbitmq channel created');
                });
            }
            catch (err) {
                this.logger.error('rabbitmq channel creation failed: ', err);
            }
        }
    }
}
exports.AmqpClient = AmqpClient;
//# sourceMappingURL=AmqpClient.js.map