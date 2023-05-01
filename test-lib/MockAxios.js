"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAxios = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_mock_adapter_1 = __importDefault(require("axios-mock-adapter"));
class MockAxios {
    static getInstance(axios) {
        if (!this.instance) {
            this.instance = new MockAxios(axios);
        }
        return this.instance;
    }
    constructor(customAxios) {
        this.mockAdapter = new axios_mock_adapter_1.default(customAxios !== null && customAxios !== void 0 ? customAxios : axios_1.default);
    }
    get getRequestHistory() {
        return this.mockAdapter.history.get;
    }
    get putRequestHistory() {
        return this.mockAdapter.history.put;
    }
    get postRequestHistory() {
        return this.mockAdapter.history.post;
    }
    reset() {
        this.mockAdapter.reset();
    }
    setOnGet(url, response, statusCode = 200) {
        this.mockAdapter.onGet(url).reply(statusCode, response);
    }
    setOnPost(url, statusCode = 200) {
        this.mockAdapter.onPost(url).reply(statusCode);
    }
    setOnPut(url, statusCode = 200) {
        this.mockAdapter.onPut(url).reply(statusCode);
    }
}
exports.MockAxios = MockAxios;
//# sourceMappingURL=MockAxios.js.map