import { pick, keys } from 'lodash';

export const filterObjectByKey = <T extends Object>(obj: T, filterFunction: (key: string) => boolean): Partial<T> => {
    return pick(obj, keys(obj).filter(filterFunction));
};
