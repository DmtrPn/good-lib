"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const compact_1 = __importDefault(require("lodash/compact"));
const isDefined_1 = require("../../utils/isDefined");
const DateHelper_1 = require("../../utils/DateHelper");
class List {
    constructor(params) {
        this.identifiableFieldName = 'id';
        this.filterParams = {};
        this.orderParams = {};
        this.list = new Map();
        this.isSetted = false;
        if (params) {
            this.set(params);
        }
    }
    get isDataSet() {
        return this.isSetted;
    }
    get ids() {
        return Array.from(this.list.keys());
    }
    get values() {
        return Array.from(this.list.values());
    }
    get orderedValues() {
        return this.getOrderedValues(this.values);
    }
    get filteredValues() {
        const filteredValues = this.values.filter(value => this.filterValue(value, this.filterParams));
        return this.getOrderedValues(filteredValues);
    }
    get filteredValuesIds() {
        return this.filteredValues.map(value => this.getId(value));
    }
    getValuesByIds(ids) {
        return (0, compact_1.default)(ids.map(id => this.get(id)));
    }
    forEach(callbackfn, _) {
        this.list.forEach(callbackfn);
    }
    set(params) {
        this.reset();
        this.isSetted = true;
        this.add(params);
    }
    add(params) {
        params.forEach(createParams => {
            this.list.set(this.getId(createParams), this.create(createParams));
        });
    }
    addIfNotExist(params) {
        params.forEach(createParams => {
            const id = this.getId(createParams);
            if (!this.has(id)) {
                this.list.set(this.getId(createParams), this.create(createParams));
            }
        });
    }
    update(id, value) {
        this.list.set(id, this.create(value));
    }
    remove(id) {
        this.list.delete(id);
    }
    reset() {
        this.list.clear();
    }
    get(id) {
        return this.list.get(id);
    }
    has(id) {
        return this.list.has(id);
    }
    getSize() {
        return this.list.size;
    }
    getFilterParams() {
        return this.filterParams;
    }
    setFilterParams(params = {}) {
        this.filterParams = params;
    }
    updateFilterParams(params) {
        this.filterParams = { ...this.filterParams, ...params };
    }
    getOrderParams() {
        return this.orderParams;
    }
    setOrderParams(params) {
        this.orderParams = params || {};
    }
    hasFilteredValues(filterParams) {
        return this.values.some(value => this.filterValue(value, filterParams));
    }
    getFilteredValues(filterParams) {
        return this.getOrderedValues(this.values.filter(value => this.filterValue(value, filterParams)));
    }
    getFilteredValuesIds(filterParams) {
        return this.getFilteredValues(filterParams).map(value => this.getId(value));
    }
    getOrderedValues(params) {
        return params;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filterValue(value, filterParams) {
        return true;
    }
    getId(value) {
        // @ts-ignore
        return value[this.identifiableFieldName];
    }
    filterFieldValue(value, filterValue, fieldName) {
        return (0, isDefined_1.isDefined)(filterValue) ? value[fieldName] === filterValue : true;
    }
    filterExecuteFieldValue(value, executeValue, fieldName) {
        return (0, isDefined_1.isDefined)(executeValue) ? value[fieldName] !== executeValue : true;
    }
    filterFieldValueByArray(value, filterValue, fieldName) {
        return (0, isDefined_1.isDefined)(filterValue) ? filterValue.includes(value[fieldName]) : true;
    }
    filterArrayFieldValue(value, filterValue, fieldName) {
        return (0, isDefined_1.isDefined)(filterValue) ? value[fieldName].includes(filterValue) : true;
    }
    filterArrayFieldValueByArray(value, filterValue, fieldName) {
        const filterValuesSet = (0, isDefined_1.isDefined)(filterValue) ? new Set(filterValue) : undefined;
        return (0, isDefined_1.isDefined)(filterValuesSet)
            ? value[fieldName].some(item => filterValuesSet.has(item))
            : true;
    }
    filterFieldValueIncludesString(value, filterValue, fieldName) {
        return (0, isDefined_1.isDefined)(filterValue) && filterValue.length > 0
            ? (value[fieldName] || '').toLocaleLowerCase().includes(filterValue.toLowerCase())
            : true;
    }
    filterFieldValueBySameDay(value, filterValue, fieldName) {
        return (0, isDefined_1.isDefined)(filterValue)
            ? DateHelper_1.DateHelper.isSameDay(filterValue, value[fieldName])
            : true;
    }
    filterFieldValueBySameOrAfterDate(value, filterValue, fieldName) {
        return (0, isDefined_1.isDefined)(filterValue)
            ? DateHelper_1.DateHelper.isSameOrAfter(filterValue, value[fieldName])
            : true;
    }
    filterFieldValueByBeforeDate(value, filterValue, fieldName) {
        return (0, isDefined_1.isDefined)(filterValue)
            ? DateHelper_1.DateHelper.isBefore(filterValue, value[fieldName])
            : true;
    }
}
exports.List = List;
//# sourceMappingURL=List.js.map