"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePositionInMapObject = void 0;
const changePositionInMapObject = (objMap, oldPosition, newPosition) => {
    const itemArray = [];
    let newIndex = newPosition - 1;
    const oldIndex = oldPosition - 1;
    if (newPosition >= objMap.size) {
        newIndex = objMap.size - 1;
    }
    else if (newIndex < 1) {
        newIndex = 0;
    }
    for (const item of objMap) {
        itemArray.push(item);
    }
    const item = itemArray[newIndex];
    itemArray[newIndex] = itemArray[oldIndex];
    itemArray[oldIndex] = item;
    const newMap = new Map();
    itemArray.forEach(item => {
        newMap.set(item[0], item[1]);
    });
    return newMap;
};
exports.changePositionInMapObject = changePositionInMapObject;
//# sourceMappingURL=changePositionInMapObject.js.map