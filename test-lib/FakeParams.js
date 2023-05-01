"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeParams = void 0;
const uuid_1 = require("uuid");
const times_1 = __importDefault(require("lodash/times"));
const chance_1 = require("chance");
class FakeParams {
    static getUuid() {
        return (0, uuid_1.v4)();
    }
    static getUuidArray(count = 1) {
        return (0, times_1.default)(count, () => this.getUuid());
    }
    static getWord(options) {
        return this.change.word(options);
    }
    static getText(options) {
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
FakeParams.change = new chance_1.Chance();
exports.FakeParams = FakeParams;
//# sourceMappingURL=FakeParams.js.map