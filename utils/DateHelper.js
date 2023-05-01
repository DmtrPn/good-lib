"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHelper = exports.DateTypes = exports.DateFormatItem = void 0;
/* tslint:disable max-file-line-count */
const startOfDay_1 = __importDefault(require("date-fns/startOfDay"));
const endOfDay_1 = __importDefault(require("date-fns/endOfDay"));
const getMinutes_1 = __importDefault(require("date-fns/getMinutes"));
const getHours_1 = __importDefault(require("date-fns/getHours"));
const getYear_1 = __importDefault(require("date-fns/getYear"));
const getMonth_1 = __importDefault(require("date-fns/getMonth"));
const format_1 = __importDefault(require("date-fns/format"));
const addWeeks_1 = __importDefault(require("date-fns/addWeeks"));
const subWeeks_1 = __importDefault(require("date-fns/subWeeks"));
const addMonths_1 = __importDefault(require("date-fns/addMonths"));
const addHours_1 = __importDefault(require("date-fns/addHours"));
const addMinutes_1 = __importDefault(require("date-fns/addMinutes"));
const subMinutes_1 = __importDefault(require("date-fns/subMinutes"));
const addDays_1 = __importDefault(require("date-fns/addDays"));
const subDays_1 = __importDefault(require("date-fns/subDays"));
const subMonths_1 = __importDefault(require("date-fns/subMonths"));
const subYears_1 = __importDefault(require("date-fns/subYears"));
const differenceInMinutes_1 = __importDefault(require("date-fns/differenceInMinutes"));
const differenceInYears_1 = __importDefault(require("date-fns/differenceInYears"));
const differenceInWeeks_1 = __importDefault(require("date-fns/differenceInWeeks"));
const differenceInMonths_1 = __importDefault(require("date-fns/differenceInMonths"));
const differenceInCalendarDays_1 = __importDefault(require("date-fns/differenceInCalendarDays"));
const isToday_1 = __importDefault(require("date-fns/isToday"));
const isValid_1 = __importDefault(require("date-fns/isValid"));
const isAfter_1 = __importDefault(require("date-fns/isAfter"));
const isBefore_1 = __importDefault(require("date-fns/isBefore"));
const endOfWeek_1 = __importDefault(require("date-fns/endOfWeek"));
const startOfWeek_1 = __importDefault(require("date-fns/startOfWeek"));
const startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
const endOfMonth_1 = __importDefault(require("date-fns/endOfMonth"));
const isWithinInterval_1 = __importDefault(require("date-fns/isWithinInterval"));
const areIntervalsOverlapping_1 = __importDefault(require("date-fns/areIntervalsOverlapping"));
const isSameDay_1 = __importDefault(require("date-fns/isSameDay"));
const isSameMonth_1 = __importDefault(require("date-fns/isSameMonth"));
const isSameYear_1 = __importDefault(require("date-fns/isSameYear"));
const addYears_1 = __importDefault(require("date-fns/addYears"));
const getDay_1 = __importDefault(require("date-fns/getDay"));
const parseISO_1 = __importDefault(require("date-fns/parseISO"));
const isNil_1 = __importDefault(require("lodash/isNil"));
const mapValues_1 = __importDefault(require("lodash/mapValues"));
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
var DateTypes;
(function (DateTypes) {
    DateTypes["START"] = "startDate";
    DateTypes["END"] = "endDate";
})(DateTypes = exports.DateTypes || (exports.DateTypes = {}));
class DateHelper {
    static now() {
        return new Date();
    }
    // Нужно для Сафари тк там валидные даты инвалидны YYYY-MM-DD DD-MM-YYYY
    // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
    // Даты в таком формате нам прилетают для записей из медиалога
    static createDate(value) {
        return (0, parseISO_1.default)(value);
    }
    static parseDate(date) {
        // const { year, month, day, hours, minutes, seconds, milliseconds } = mapValues(date, it => Number(it));
        const { year, month } = (0, mapValues_1.default)(date, it => Number(it));
        // TODO если в день undefined то получаем инвалидную дату
        return new Date(year, month - 1); // , day, hours, minutes, seconds, milliseconds);
    }
    static toNoon(value) {
        const date = new Date(value);
        return (0, startOfDay_1.default)(date);
    }
    static getTime(date) {
        return new Date(date).toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric' });
    }
    static toLocalStringDate(value, withTime) {
        const date = new Date(value);
        const options = withTime
            ? {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            }
            : {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            };
        return date.toLocaleString('ru-RU', options);
    }
    static format(value, formatParams, defaultValue = '-') {
        let formattedValue = defaultValue;
        if (!(0, isNil_1.default)(value)) {
            const date = new Date(value);
            formattedValue = (0, format_1.default)(date, formatParams);
        }
        return formattedValue;
    }
    static formatIfNotNil(value, formatParams) {
        let formattedValue;
        if (!(0, isNil_1.default)(value)) {
            const date = new Date(value);
            formattedValue = (0, format_1.default)(date, formatParams);
        }
        return formattedValue;
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
    static getISODay(value) {
        return (0, getDay_1.default)(new Date(value));
    }
    static isWeekend(value) {
        return this.getISODay(value) === 6 || this.getISODay(value) === 0;
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
    static subWeeks(value, count) {
        return (0, subWeeks_1.default)(new Date(value), count);
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
    static addOptionalDays(value, days) {
        return !!days ? (0, addDays_1.default)(new Date(value), days) : undefined;
    }
    static addMonths(value, days) {
        return (0, addMonths_1.default)(new Date(value), days);
    }
    static subMonths(value, days) {
        return (0, subMonths_1.default)(new Date(value), days);
    }
    static addHours(value, hours) {
        return (0, addHours_1.default)(new Date(value), hours);
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
    static differenceInMinutes(valueLeft, valueRight) {
        const dateLeft = new Date(valueLeft);
        const dateRight = new Date(valueRight);
        return (0, differenceInMinutes_1.default)(dateLeft, dateRight);
    }
    static differenceInCalendarDays(valueLeft, valueRight) {
        const dateLeft = new Date(valueLeft);
        const dateRight = new Date(valueRight);
        return (0, differenceInCalendarDays_1.default)(dateLeft, dateRight);
    }
    // Get the number of full weeks between two dates.
    static differenceInWeeks(valueLeft, valueRight) {
        const dateLeft = new Date(valueLeft);
        const dateRight = new Date(valueRight);
        return (0, differenceInWeeks_1.default)(dateLeft, dateRight);
    }
    static differenceInMonths(valueLeft, valueRight) {
        const dateLeft = new Date(valueLeft);
        const dateRight = new Date(valueRight);
        return (0, differenceInMonths_1.default)(dateLeft, dateRight);
    }
    static differenceInYears(valueLeft, valueRight) {
        const dateLeft = new Date(valueLeft);
        const dateRight = new Date(valueRight);
        return (0, differenceInYears_1.default)(dateLeft, dateRight);
    }
    static getFullAge(birthDate, actualOn = new Date()) {
        const date = new Date(birthDate);
        return {
            years: DateHelper.differenceInYears(actualOn, date),
            months: DateHelper.differenceInMonths(actualOn, date),
            weeks: DateHelper.differenceInWeeks(actualOn, date),
            days: DateHelper.differenceInCalendarDays(actualOn, date),
        };
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
    static isSameDayOrAfter(value, valueToCompare) {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return (0, isSameDay_1.default)(date, dateToCompare) || (0, isAfter_1.default)(date, dateToCompare);
    }
    static isSameDayOrBefore(value, valueToCompare) {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return (0, isSameDay_1.default)(date, dateToCompare) || (0, isBefore_1.default)(date, dateToCompare);
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
    static isSameYear(valueLeft, valueRight) {
        return (0, isSameYear_1.default)(new Date(valueLeft), new Date(valueRight));
    }
    static endOfWeek(value) {
        const date = new Date(value);
        return (0, endOfWeek_1.default)(date, { weekStartsOn: 1 });
    }
    static startOfWeek(value) {
        const date = new Date(value);
        return (0, startOfWeek_1.default)(date, { weekStartsOn: 1 });
    }
    static endOfMonth(value = new Date()) {
        const date = new Date(value);
        return (0, endOfMonth_1.default)(date);
    }
    static startOfMonth(value) {
        const date = new Date(value);
        return (0, startOfMonth_1.default)(date);
    }
    static isWithinInterval(value, interval) {
        const date = new Date(value);
        return (0, isWithinInterval_1.default)(date, interval);
    }
    static areIntervalsOverlapping(interval, compareInterval) {
        return (0, areIntervalsOverlapping_1.default)(interval, compareInterval);
    }
    static areIntervalOverlappingWithSomeInterval(interval, compareIntervals) {
        return compareIntervals.some(compareInterval => this.areIntervalsOverlapping(interval, compareInterval));
    }
    static isDateIntersectWithIntervals({ start, end }, date) {
        return this.isSameOrAfter(date, start) && this.isSameOrBefore(date, end);
    }
    static makeIntervalParams(start, end) {
        return {
            start: new Date(start),
            end: new Date(end),
        };
    }
    static makeTimeData(value) {
        const date = new Date(value);
        return {
            hour: date.getHours(),
            minutes: date.getMinutes(),
        };
    }
    static setTimeData(value, { hour, minutes }) {
        const date = new Date(value);
        date.setMinutes(minutes);
        date.setHours(hour);
        return date;
    }
    static setTime(value, timeValue) {
        const date = new Date(value);
        const dateTime = new Date(timeValue);
        date.setMinutes(dateTime.getMinutes());
        date.setHours(dateTime.getHours());
        return date;
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
    static toIsoWithTimezone(value) {
        const date = new Date(value);
        return (0, format_1.default)(date, 'y-MM-dd HH:mm:ssXXX').replace(' ', 'T');
    }
}
exports.DateHelper = DateHelper;
//# sourceMappingURL=DateHelper.js.map