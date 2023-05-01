"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveItemInArray = void 0;
const moveItemInArray = (originArray, oldPosition, newPosition) => {
    const item = originArray[oldPosition];
    const length = originArray.length;
    const diff = oldPosition - newPosition;
    let result = originArray;
    if (diff > 0) {
        // move left
        result = [
            ...originArray.slice(0, newPosition),
            item,
            ...originArray.slice(newPosition, oldPosition),
            ...originArray.slice(oldPosition + 1, length),
        ];
    }
    else if (diff < 0) {
        // move right
        const targetIndex = newPosition + 1;
        result = [
            ...originArray.slice(0, oldPosition),
            ...originArray.slice(oldPosition + 1, targetIndex),
            item,
            ...originArray.slice(targetIndex, length),
        ];
    }
    return result;
};
exports.moveItemInArray = moveItemInArray;
//# sourceMappingURL=moveItemInArray.js.map