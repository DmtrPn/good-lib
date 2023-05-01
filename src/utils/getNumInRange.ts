interface RangeParams {
    min: number;
    max: number;
}

export function getNumInRange(value: string | number, { min, max }: RangeParams): number {
    const num = Number(`${value}`.replace(/(?!^-)\D/gm, ''));

    return num > max
        ? max
        : num < min || isNaN(num)
            ? min
            : num;
}
