"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePositionInArray = void 0;
const changePositionInArray = (originArray, oldPosition, newPosition) => {
    const firstItem = originArray[oldPosition];
    const secondItem = originArray[newPosition];
    return originArray.map((item, index) => (index === oldPosition
        ? secondItem
        : index === newPosition
            ? firstItem
            : item));
};
exports.changePositionInArray = changePositionInArray;
//# sourceMappingURL=changePositionInArray.js.map