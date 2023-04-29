"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHelper = exports.DateFormatItem = void 0;
const startOfDay_1 = __importDefault(require("date-fns/startOfDay"));
const endOfDay_1 = __importDefault(require("date-fns/endOfDay"));
const getMinutes_1 = __importDefault(require("date-fns/getMinutes"));
const getHours_1 = __importDefault(require("date-fns/getHours"));
const getYear_1 = __importDefault(require("date-fns/getYear"));
const getMonth_1 = __importDefault(require("date-fns/getMonth"));
const format_1 = __importDefault(require("date-fns/format"));
const addWeeks_1 = __importDefault(require("date-fns/addWeeks"));
const addMonths_1 = __importDefault(require("date-fns/addMonths"));
const subMonths_1 = __importDefault(require("date-fns/subMonths"));
const addMinutes_1 = __importDefault(require("date-fns/addMinutes"));
const subMinutes_1 = __importDefault(require("date-fns/subMinutes"));
const addDays_1 = __importDefault(require("date-fns/addDays"));
const subDays_1 = __importDefault(require("date-fns/subDays"));
const isToday_1 = __importDefault(require("date-fns/isToday"));
const isValid_1 = __importDefault(require("date-fns/isValid"));
const isAfter_1 = __importDefault(require("date-fns/isAfter"));
const isBefore_1 = __importDefault(require("date-fns/isBefore"));
const endOfWeek_1 = __importDefault(require("date-fns/endOfWeek"));
const startOfWeek_1 = __importDefault(require("date-fns/startOfWeek"));
const startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
const endOfMonth_1 = __importDefault(require("date-fns/endOfMonth"));
const isSameDay_1 = __importDefault(require("date-fns/isSameDay"));
const isSameMonth_1 = __importDefault(require("date-fns/isSameMonth"));
const addYears_1 = __importDefault(require("date-fns/addYears"));
const subYears_1 = __importDefault(require("date-fns/subYears"));
const parseISO_1 = __importDefault(require("date-fns/parseISO"));
const ru_1 = __importDefault(require("date-fns/locale/ru"));
const isNil_1 = __importDefault(require("lodash/isNil"));
// https://date-fns.org/v2.8.1/docs/format
var DateFormatItem;
(function (DateFormatItem) {
    DateFormatItem["Year"] = "yyyy";
    DateFormatItem["YearShort"] = "yy";
    DateFormatItem["MonthNumber"] = "MM";
    DateFormatItem["MonthStringShort"] = "MMM";
    DateFormatItem["MonthString"] = "MMMM";
    DateFormatItem["Day"] = "dd";
    DateFormatItem["DayShort"] = "d";
    DateFormatItem["WeekDay"] = "EEEEEE";
    DateFormatItem["Hour"] = "H";
    DateFormatItem["Minute"] = "mm";
    DateFormatItem["Second"] = "ss";
})(DateFormatItem = exports.DateFormatItem || (exports.DateFormatItem = {}));
class DateHelper {
    // Нужно для Сафари тк там валидные даты инвалидны YYYY-MM-DD DD-MM-YYYY
    // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
    static createDate(value) {
        return (0, parseISO_1.default)(value);
    }
    static getTime(date) {
        return (new Date(date)).toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric' });
    }
    static format(value, formatParams) {
        const date = new Date(value);
        return (0, format_1.default)(date, formatParams, { locale: ru_1.default });
    }
    static getStartOfDay(value = new Date()) {
        const date = new Date(value);
        return (0, startOfDay_1.default)(date || new Date());
    }
    static getEndOfDay(value) {
        const date = value ? new Date(value) : new Date();
        return (0, endOfDay_1.default)(date);
    }
    static getMinutes(value) {
        return (0, getMinutes_1.default)(new Date(value));
    }
    static getHours(value) {
        return (0, getHours_1.default)(new Date(value));
    }
    static getYear(value) {
        const date = value ? new Date(value) : new Date();
        return (0, getYear_1.default)(date);
    }
    static getMonth(value) {
        const date = value ? new Date(value) : new Date();
        return (0, getMonth_1.default)(date);
    }
    static addWeeks(value, count) {
        return (0, addWeeks_1.default)(new Date(value), count);
    }
    static addMinutes(value, minutes) {
        return (0, addMinutes_1.default)(new Date(value), minutes);
    }
    static subMinutes(value, minutes) {
        return (0, subMinutes_1.default)(new Date(value), minutes);
    }
    static addDays(value, days) {
        return (0, addDays_1.default)(new Date(value), days);
    }
    static addMonths(value, days) {
        return (0, addMonths_1.default)(new Date(value), days);
    }
    static subMonths(value, days) {
        return (0, subMonths_1.default)(new Date(value), days);
    }
    static subDays(value, days) {
        return (0, subDays_1.default)(new Date(value), days);
    }
    static addYears(value, years) {
        return (0, addYears_1.default)(new Date(value), years);
    }
    static subYears(value, years) {
        return (0, subYears_1.default)(new Date(value), years);
    }
    static isAfter(value, valueToCompare) {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return (0, isAfter_1.default)(date, dateToCompare);
    }
    static isBefore(value, valueToCompare) {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return (0, isBefore_1.default)(date, dateToCompare);
    }
    static isSameOrAfter(value, valueToCompare) {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return date.getTime() === dateToCompare.getTime() || (0, isAfter_1.default)(date, dateToCompare);
    }
    static isSameOrBefore(value, valueToCompare) {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return date.getTime() === dateToCompare.getTime() || (0, isBefore_1.default)(date, dateToCompare);
    }
    static isToday(value) {
        const date = new Date(value);
        return (0, isToday_1.default)(date);
    }
    static isValid(value) {
        const date = new Date(value);
        return (0, isValid_1.default)(date);
    }
    static isSameDay(valueLeft, valueRight) {
        return (0, isSameDay_1.default)(new Date(valueLeft), new Date(valueRight));
    }
    static isSameMonth(valueLeft, valueRight) {
        return (0, isSameMonth_1.default)(new Date(valueLeft), new Date(valueRight));
    }
    static endOfWeek(value) {
        const date = new Date(value);
        return (0, endOfWeek_1.default)(date, { weekStartsOn: 1 });
    }
    static startOfWeek(value) {
        const date = new Date(value);
        return (0, startOfWeek_1.default)(date, { weekStartsOn: 1 });
    }
    static endOfMonth(value) {
        const date = new Date(value);
        return (0, endOfMonth_1.default)(date);
    }
    static startOfMonth(value) {
        const date = new Date(value);
        return (0, startOfMonth_1.default)(date);
    }
    static setDate(value, { year, month, day }) {
        const date = new Date(value);
        if (!(0, isNil_1.default)(year)) {
            date.setFullYear(year);
        }
        if (!(0, isNil_1.default)(day)) {
            date.setDate(day);
        }
        if (!(0, isNil_1.default)(month)) {
            date.setMonth(month);
        }
        return date;
    }
}
exports.DateHelper = DateHelper;
//# sourceMappingURL=DateHelper.js.map