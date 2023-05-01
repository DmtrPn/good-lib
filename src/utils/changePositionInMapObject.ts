export const changePositionInMapObject = <K, V>(objMap: Map<K, V>, oldPosition: number, newPosition: number): Map<K, V>  => {
    const itemArray: [K, V][] = [];

    let newIndex = newPosition - 1;
    const oldIndex = oldPosition - 1;

    if (newPosition >= objMap.size) {
        newIndex = objMap.size - 1;
    } else if (newIndex < 1) {
        newIndex = 0;
    }

    for (const item of objMap) {
        itemArray.push(item);

    }

    const item = itemArray[newIndex];
    itemArray[newIndex] = itemArray[oldIndex];
    itemArray[oldIndex] = item;

    const newMap = new Map<any, any>();

    itemArray.forEach(item => {
        newMap.set(item[0], item[1]);
    });

    return newMap;
};
