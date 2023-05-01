export declare const nullToUndefined: <T extends object>(obj: T) => { [key in keyof T]: T[key] extends null ? undefined : T[key]; };
