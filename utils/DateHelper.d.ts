import { Optional, Nullable } from '../types';
export interface TimeData {
    hour: number;
    minutes: number;
}
export type DateType = Date | string | number;
type DateConstructor = {
    year: number | string;
    month: number | string;
    day?: number | string;
    hours?: number | string;
    minutes?: number | string;
    seconds?: number | string;
    milliseconds?: number | string;
};
export interface IntervalParams {
    start: Date;
    end: Date;
}
export declare enum DateFormatItem {
    Year = "yyyy",
    YearShort = "yy",
    MonthNumber = "MM",
    MonthStringShort = "MMM",
    MonthString = "MMMM",
    Day = "dd",
    DayShort = "d",
    WeekDay = "EEEEEE",
    Hour = "H",
    Minute = "mm",
    Second = "ss"
}
export declare enum DateTypes {
    START = "startDate",
    END = "endDate"
}
export declare const enum DateFormat {
    Time = "H:mm:ss",
    TimeWithoutSeconds = "H:mm",
    DateWithDotSeparator = "dd.MM.yyyy",
    DateWithMonthString = "dd MMMM yyyy",
    DateWithDashSeparator = "yyyy-MM-dd",
    DateWithSlashSeparator = "dd/MM/yy",
    DateWithTime = "dd.MM.yyyy H:mm",
    WeekDayWithDay = "EEEEEE,d",
    DayWithMonthString = "dd MMMM",
    DayWithMonth = "dd.MM"
}
interface FullAgeData {
    years: number;
    months: number;
    weeks: number;
    days: number;
}
export declare class DateHelper {
    static now(): Date;
    static createDate(value: string): Date;
    static parseDate(date: DateConstructor): Date;
    static toNoon(value: DateType): Date;
    static getTime(date: DateType): string;
    static toLocalStringDate(value: DateType, withTime?: boolean): string;
    static format(value: Optional<Nullable<DateType>>, formatParams: DateFormat | DateFormatItem, defaultValue?: string): string;
    static formatIfNotNil(value: Optional<Nullable<DateType>>, formatParams: DateFormat | DateFormatItem): Optional<string>;
    static getStartOfDay(value?: DateType): Date;
    static getEndOfDay(value?: DateType): Date;
    static getMinutes(value: DateType): number;
    static getHours(value: DateType): number;
    static getISODay(value: DateType): number;
    static isWeekend(value: DateType): boolean;
    static getYear(value?: DateType): number;
    static getMonth(value?: DateType): number;
    static addWeeks(value: DateType, count: number): Date;
    static subWeeks(value: DateType, count: number): Date;
    static addMinutes(value: DateType, minutes: number): Date;
    static subMinutes(value: DateType, minutes: number): Date;
    static addDays(value: DateType, days: number): Date;
    static addOptionalDays(value: DateType, days?: Nullable<number>): Optional<Date>;
    static addMonths(value: DateType, days: number): Date;
    static subMonths(value: DateType, days: number): Date;
    static addHours(value: DateType, hours: number): Date;
    static subDays(value: DateType, days: number): Date;
    static addYears(value: DateType, years: number): Date;
    static subYears(value: DateType, years: number): Date;
    static differenceInMinutes(valueLeft: DateType, valueRight: DateType): number;
    static differenceInCalendarDays(valueLeft: DateType, valueRight: DateType): number;
    static differenceInWeeks(valueLeft: DateType, valueRight: DateType): number;
    static differenceInMonths(valueLeft: DateType, valueRight: DateType): number;
    static differenceInYears(valueLeft: DateType, valueRight: DateType): number;
    static getFullAge(birthDate: DateType, actualOn?: DateType): FullAgeData;
    static isAfter(value: DateType, valueToCompare: DateType): boolean;
    static isBefore(value: DateType, valueToCompare: DateType): boolean;
    static isSameDayOrAfter(value: DateType, valueToCompare: DateType): boolean;
    static isSameDayOrBefore(value: DateType, valueToCompare: DateType): boolean;
    static isSameOrAfter(value: DateType, valueToCompare: DateType): boolean;
    static isSameOrBefore(value: DateType, valueToCompare: DateType): boolean;
    static isToday(value: DateType): boolean;
    static isValid(value: DateType): boolean;
    static isSameDay(valueLeft: DateType, valueRight: DateType): boolean;
    static isSameMonth(valueLeft: DateType, valueRight: DateType): boolean;
    static isSameYear(valueLeft: DateType, valueRight: DateType): boolean;
    static endOfWeek(value: DateType): Date;
    static startOfWeek(value: DateType): Date;
    static endOfMonth(value?: DateType): Date;
    static startOfMonth(value: DateType): Date;
    static isWithinInterval(value: DateType, interval: IntervalParams): boolean;
    static areIntervalsOverlapping(interval: IntervalParams, compareInterval: IntervalParams): boolean;
    static areIntervalOverlappingWithSomeInterval(interval: IntervalParams, compareIntervals: IntervalParams[]): boolean;
    static isDateIntersectWithIntervals({ start, end }: IntervalParams, date: Date): boolean;
    static makeIntervalParams(start: DateType, end: DateType): IntervalParams;
    static makeTimeData(value: DateType): TimeData;
    static setTimeData(value: DateType, { hour, minutes }: TimeData): Date;
    static setTime(value: DateType, timeValue: DateType): Date;
    static setDate(value: DateType, { year, month, day }: {
        year?: number;
        month?: number;
        day?: number;
    }): Date;
    static toIsoWithTimezone(value: DateType): string;
}
export {};
