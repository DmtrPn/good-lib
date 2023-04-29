"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntityNotFoundError = exports.NotFoundError = void 0;
const ExistenceError_1 = require("./ExistenceError");
class NotFoundError extends ExistenceError_1.ExistenceError {
    get defaultEndOfMessage() {
        return 'not found';
    }
}
exports.NotFoundError = NotFoundError;
const errorDataFromId = (id) => (id instanceof Object ? { ...id } : { id });
const createEntityNotFoundError = (entityName) => (id) => new NotFoundError({ entityName, ...errorDataFromId(id) });
exports.createEntityNotFoundError = createEntityNotFoundError;
//# sourceMappingURL=NotFoundError.js.map