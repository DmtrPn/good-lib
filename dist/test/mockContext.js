"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMockContext = void 0;
const telegraf_1 = require("telegraf");
const FakeParams_1 = require("./FakeParams");
function makeMockContext(update = {}, contextExtra = {}) {
    const tg = new telegraf_1.Telegram('', {});
    // @ts-ignore
    tg.callApi = (method, data) => {
        console.log(`mocked tg callApi ${method}`, data);
    };
    const from = {
        id: FakeParams_1.FakeParams.getInteger(),
        first_name: FakeParams_1.FakeParams.getName(),
        last_name: FakeParams_1.FakeParams.getName(),
    };
    // @ts-ignore
    const ctx = new telegraf_1.Context(update, tg, {});
    Object.assign(ctx, {
        update: { chat_member: { from } },
        session: {},
        debug: {
            currentScene: '',
            reply: {},
            // replyMessages: () => ctx.debug.replies.map(({ message }) => message),
        },
    }, contextExtra);
    // prettier-ignore
    //  @ts-ignore
    ctx.reply = (message, extra = undefined) => { ctx.debug.reply = { message, extra }; };
    // @ts-ignore
    ctx.scene = {
        // prettier-ignore
        // @ts-ignore
        enter: sceneName => { ctx.debug.currentScene = sceneName; },
        // prettier-ignore
        // @ts-ignore
        leave: () => { ctx.debug.currentScene = ''; },
    };
    // @ts-ignore
    ctx.getChat = () => from;
    ctx.getChatId = () => from.id;
    return ctx;
}
exports.makeMockContext = makeMockContext;
//# sourceMappingURL=mockContext.js.map