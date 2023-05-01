"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = void 0;
const axios_1 = __importDefault(require("axios"));
// Make base url for server and client
/* eslint-disable @typescript-eslint/dot-notation */
// @ts-ignore
const BASE_URL = typeof window !== 'undefined' && window['BASE_URL'] ? window['BASE_URL'] : '';
const instance = axios_1.default.create({
    baseURL: BASE_URL,
});
exports.instance = instance;
// @ts-ignore
instance.defaults.headers = {
    'Cache-Control': 'cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
};
instance.interceptors.response.use(response => response, error => {
    var _a, _b, _c, _d;
    let errorData = (_c = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : error.data) !== null && _c !== void 0 ? _c : error;
    errorData = ((_d = errorData.data) === null || _d === void 0 ? void 0 : _d.code) ? errorData.data : errorData;
    const result = new Error(errorData.message);
    result.name = errorData.code ? errorData.code : error.name;
    return Promise.reject(result);
});
//# sourceMappingURL=axios.js.map