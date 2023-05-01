export function keyArrayFromIterable(o: Map<string, any> | Set<any>): string[] {
    return Array.from(o.keys());
}
