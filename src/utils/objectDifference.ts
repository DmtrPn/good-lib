import { omit, keys, isEqual } from 'lodash';

export const objectDifference = <T extends Object>(obj: T, other: Object): Partial<T> => {
    return omit(
        obj,
        // @ts-ignore
        keys(obj).filter(key => isEqual(obj[key], other[key])),
    );
};
