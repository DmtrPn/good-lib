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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneTest = exports.MethodName = void 0;
require("./unitTestRanner");
const orderBy_1 = __importDefault(require("lodash/orderBy"));
const mockContext_1 = require("./mockContext");
var MethodName;
(function (MethodName) {
    MethodName["Start"] = "start";
    MethodName["On"] = "on";
    MethodName["Command"] = "command";
    MethodName["Hears"] = "hears";
    MethodName["Help"] = "help";
    MethodName["Action"] = "action";
    MethodName["SceneLeave"] = "leave";
    MethodName["SceneEnter"] = "enter";
})(MethodName = exports.MethodName || (exports.MethodName = {}));
class SceneTest {
    constructor() {
        this.context = (0, mockContext_1.makeMockContext)();
    }
    async beforeEach() {
        this.context = (0, mockContext_1.makeMockContext)({ message: { chat: { id: 1234 } } });
    }
    setMessageToContext(message) {
        this.context = (0, mockContext_1.makeMockContext)({ message: { text: message, chat: { id: 1234 } } });
    }
    checkMethodMetadata(target, metadata) {
        expect((0, orderBy_1.default)(Reflect.getMetadata('LISTENERS_METADATA', target), 'method')).toStrictEqual((0, orderBy_1.default)(metadata, 'method'));
    }
    checkRedirectToScene(scene) {
        expect(this.context.debug.currentScene).toBe(scene);
    }
    checkEmptyReply() {
        expect(this.context.debug.reply).toEqual({});
    }
    checkReplyMessage(message) {
        expect(this.context.debug.reply.message).toBe(message);
    }
    checkReplyInlineKeyboard(params) {
        expect(this.context.debug.reply.extra).toBeDefined();
        const inlineKeyboard = this.context.debug.reply.extra.reply_markup.inline_keyboard;
        expect(params.length).toEqual(inlineKeyboard.length);
        params.forEach((keyboards, index) => {
            expect(keyboards.length).toEqual(inlineKeyboard[index].length);
            expect((0, orderBy_1.default)(keyboards, 'text')).toStrictEqual((0, orderBy_1.default)(inlineKeyboard[index], 'text'));
        });
    }
    checkReplyKeyboard(keyboard, resize) {
        expect(this.context.debug.reply.extra).toBeDefined();
        // eslint-disable-next-line
        const reply_markup = this.context.debug.reply.extra.reply_markup;
        expect(reply_markup).toBeDefined();
        expect(reply_markup.keyboard[0][0]).toBe(keyboard);
        expect(reply_markup.resize_keyboard).toBe(resize);
    }
}
__decorate([
    BeforeEach(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SceneTest.prototype, "beforeEach", null);
exports.SceneTest = SceneTest;
//# sourceMappingURL=SceneTest.js.map