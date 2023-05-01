import { omit } from 'lodash';

export const excludeObjectFields = <T extends Object>(obj: T, excludedFields: string[]): Partial<T> => {
    return omit(obj, excludedFields);
};
