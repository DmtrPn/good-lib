"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntityAlreadyExistsError = exports.AlreadyExistsError = void 0;
const ExistenceError_1 = require("./ExistenceError");
class AlreadyExistsError extends ExistenceError_1.ExistenceError {
    get defaultEndOfMessage() {
        return 'already exists';
    }
}
exports.AlreadyExistsError = AlreadyExistsError;
const createEntityAlreadyExistsError = (entityName) => (id) => new AlreadyExistsError({ entityName, id });
exports.createEntityAlreadyExistsError = createEntityAlreadyExistsError;
//# sourceMappingURL=AlreadyExistsError.js.map