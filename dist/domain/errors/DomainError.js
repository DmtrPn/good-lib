"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainError = void 0;
class DomainError extends Error {
    constructor(parameters = {}) {
        super();
        this.parameters = parameters;
        this.message = this.createMessage(parameters);
    }
    createMessage(_) {
        throw new Error(`${this.constructor.name}.createMessage is undefined`);
    }
}
exports.DomainError = DomainError;
//# sourceMappingURL=DomainError.js.map