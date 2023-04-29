export function updateAttributes<P extends object>(it: P, params: Partial<P>): void {
    Object.keys(params).forEach(key => {
        // @ts-ignore
        it[key] = params[key] ?? it[key];
    });
}
