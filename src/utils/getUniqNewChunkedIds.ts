import { getUniqChunkedIds } from './getUniqChunkedIds';
import { getUniqNewIds } from './getUniqNewIds';

export function getUniqNewChunkedIds(currentIds: string[], newIds: string[]): string[][] {
    const ids = getUniqNewIds(currentIds, newIds);

    return getUniqChunkedIds(ids);
}
