type DefinedType<T> = T extends ((infer U) | undefined) ? U : T;
export declare const removeUndefinedKeys: <T extends object>(o: T) => { [key in keyof T]: DefinedType<T[key]>; };
export {};
