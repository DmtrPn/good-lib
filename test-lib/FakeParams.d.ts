interface IntegerOptions {
    min: number;
    max: number;
}
export declare class FakeParams {
    private static change;
    static getUuid(): string;
    static getUuidArray(count?: number): string[];
    static getName(): string;
    static getText(): string;
    static getEmail(): string;
    static getUrl(): string;
    static getInteger(params?: IntegerOptions): number;
    static getBoolean(): boolean;
    static getDate(): Date;
}
export {};
