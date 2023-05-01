"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSuit = void 0;
require("@jest-decorated/core/globals");
require("@testing-library/jest-dom");
const react_1 = require("@testing-library/react");
const MockAxios_1 = require("./MockAxios");
class TestSuit {
    constructor() {
        this.mockAxios = MockAxios_1.MockAxios.getInstance();
    }
    beforeEach() { }
    afterEach() {
        this.mockAxios.reset();
    }
    async waitAsyncUseEffectFinished() {
        await (0, react_1.act)(async () => { });
    }
    checkIsGetSent(url) {
        expect(this.mockAxios.getRequestHistory[0].url).toEqual(url);
        expect(this.mockAxios.getRequestHistory.length).toEqual(1);
    }
    checkIsPostSent(url) {
        expect(this.mockAxios.postRequestHistory[0].url).toEqual(url);
        expect(this.mockAxios.postRequestHistory.length).toEqual(1);
    }
    checkIsPutSent(url) {
        expect(this.mockAxios.putRequestHistory[0].url).toEqual(url);
        expect(this.mockAxios.putRequestHistory.length).toEqual(1);
    }
}
__decorate([
    BeforeEach(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestSuit.prototype, "beforeEach", null);
__decorate([
    AfterEach(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestSuit.prototype, "afterEach", null);
exports.TestSuit = TestSuit;
//# sourceMappingURL=TestSuit.js.map