import './unitTestRanner';
import { InlineKeyboardMarkupParams } from './types';
import { SceneName } from '@retreat/application/types';
interface ListenerMetadata {
    method: MethodName;
    args: string[] | string[][];
}
export declare enum MethodName {
    Start = "start",
    On = "on",
    Command = "command",
    Hears = "hears",
    Help = "help",
    Action = "action",
    SceneLeave = "leave",
    SceneEnter = "enter"
}
export declare abstract class SceneTest {
    protected context: import("./types").MockContext;
    beforeEach(): Promise<void>;
    protected setMessageToContext(message: string): void;
    protected checkMethodMetadata(target: object, metadata: ListenerMetadata[]): void;
    protected checkRedirectToScene(scene: SceneName): void;
    protected checkEmptyReply(): void;
    protected checkReplyMessage(message: string): void;
    protected checkReplyInlineKeyboard(params: InlineKeyboardMarkupParams[][]): void;
    protected checkReplyKeyboard(keyboard: string, resize?: boolean): void;
}
export {};
