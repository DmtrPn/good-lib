"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = void 0;
// import { v4 as uuid } from 'uuid';
// @ts-ignore
const v4_1 = __importDefault(require("uuid-browser/v4"));
function getId() {
    return (0, v4_1.default)();
}
exports.getId = getId;
//# sourceMappingURL=getId.js.map