"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializableEntity = void 0;
const assignParams_1 = require("@utils/assignParams");
class SerializableEntity {
    constructor(params) {
        this.checkCreateParams(params);
        this.setParams(params);
    }
    setParams(params) {
        (0, assignParams_1.assignParams)(this, params);
    }
    checkCreateParams(params_) { }
}
exports.SerializableEntity = SerializableEntity;
//# sourceMappingURL=SerializableEntity.js.map