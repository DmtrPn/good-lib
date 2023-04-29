"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeParams = void 0;
const uuid_1 = require("uuid");
const chance_1 = require("chance");
class FakeParams {
    static getId() {
        return (0, uuid_1.v4)();
    }
    static getName() {
        return this.change.word();
    }
    static getText() {
        return this.change.sentence();
    }
    static getEmail() {
        return this.change.email();
    }
    static getUrl() {
        return this.change.url();
    }
    static getInteger(params = { min: 0, max: 100 }) {
        return this.change.integer(params);
    }
    static getBoolean() {
        return this.change.bool();
    }
    static getDate() {
        return this.change.birthday();
    }
}
exports.FakeParams = FakeParams;
FakeParams.change = new chance_1.Chance();
//# sourceMappingURL=FakeParams.js.map