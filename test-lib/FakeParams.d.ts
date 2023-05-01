/// <reference types="chance" />
export declare class FakeParams {
    private static change;
    static getUuid(): string;
    static getUuidArray(count?: number): string[];
    static getWord(options?: Chance.WordOptions): string;
    static getText(options: Chance.SentenceOptions): string;
    static getEmail(): string;
    static getUrl(): string;
    static getInteger(params?: Chance.IntegerOptions): number;
    static getBoolean(): boolean;
    static getDate(): Date;
}
