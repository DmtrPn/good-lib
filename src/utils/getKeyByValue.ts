export function getKeyByValue<T extends object>(obj: T, value: any) {
    const keys = Object.keys(obj) as (keyof T)[];
    return keys.find(k => obj[k] === value);
}
