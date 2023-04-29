export function assignParams<P extends object>(it: P, params: P): void {
    Object.keys(params).forEach(key => {
        // @ts-ignore
        it[key] = params[key];
    });
}
