export const changePositionInArray = <V>(originArray: V[], oldPosition: number, newPosition: number): V[]  => {
    const firstItem = originArray[oldPosition];
    const secondItem = originArray[newPosition];

    return originArray.map((item, index) => (
        index === oldPosition
            ? secondItem
            : index === newPosition
                ? firstItem
                : item
    ));
};
