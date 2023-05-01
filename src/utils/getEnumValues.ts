export function getEnumValues<E = string>(sourceEnum: Object): E[] {
    return Object.values(sourceEnum).filter((item) => {
        const isEnumKey = item[0] === item[0].toUpperCase();
        return !isEnumKey;
    });
}
