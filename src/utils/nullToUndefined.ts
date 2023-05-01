import { isNull, cloneDeep, keys } from 'lodash';

type Result<T extends object> = { [key in keyof T]: T[key] extends null ? undefined : T[key] };

export const nullToUndefined = <T extends object>(obj: T): { [key in keyof T]: T[key] extends null ? undefined : T[key] } => {
    const transformed = cloneDeep(obj);

    keys(transformed)
        .forEach(key => {
            // @ts-ignore
            if (isNull(transformed[key])) {
                // @ts-ignore
                transformed[key] = undefined;
            }
        });

    return transformed as Result<T>;
};
