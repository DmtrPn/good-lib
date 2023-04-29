"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExistenceError = void 0;
const DomainError_1 = require("./DomainError");
class ExistenceError extends DomainError_1.DomainError {
    createMessage({ entityName = 'Entity', endOfMessage = this.defaultEndOfMessage, ...parameters }) {
        const parametersString = Object.keys(parameters)
            .map(key => `${key} = ${parameters[key]}`)
            .join(', ');
        return `${entityName} ${endOfMessage}: ${parametersString}`;
    }
}
exports.ExistenceError = ExistenceError;
//# sourceMappingURL=ExistenceError.js.map