export type DateType = Date | string | number;
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
export declare enum DateFormat {
    Time,
    DateWithDotSeparator,
    DateWithMonthString,
    DateWithDashSeparator,
    DateWithSlashSeparator,
    DateWithTime,
    WeekDayWithDay,
    DayWithMonthString
}
export declare class DateHelper {
    static createDate(value: string, dateFormat: DateFormat): Date;
    static getTime(date: DateType): string;
    static format(value: DateType, formatParams: DateFormat | DateFormatItem): string;
    static getStartOfDay(value?: DateType): Date;
    static getEndOfDay(value?: DateType): Date;
    static getMinutes(value: DateType): number;
    static getHours(value: DateType): number;
    static getYear(value?: DateType): number;
    static getMonth(value?: DateType): number;
    static addWeeks(value: DateType, count: number): Date;
    static addMinutes(value: DateType, minutes: number): Date;
    static subMinutes(value: DateType, minutes: number): Date;
    static addDays(value: DateType, days: number): Date;
    static addMonths(value: DateType, days: number): Date;
    static subMonths(value: DateType, days: number): Date;
    static subDays(value: DateType, days: number): Date;
    static addYears(value: DateType, years: number): Date;
    static subYears(value: DateType, years: number): Date;
    static isAfter(value: DateType, valueToCompare: DateType): boolean;
    static isBefore(value: DateType, valueToCompare: DateType): boolean;
    static isSameOrAfter(value: DateType, valueToCompare: DateType): boolean;
    static isSameOrBefore(value: DateType, valueToCompare: DateType): boolean;
    static isToday(value: DateType): boolean;
    static isValid(value: DateType): boolean;
    static isSameDay(valueLeft: DateType, valueRight: DateType): boolean;
    static isSameMonth(valueLeft: DateType, valueRight: DateType): boolean;
    static endOfWeek(value: DateType): Date;
    static startOfWeek(value: DateType): Date;
    static endOfMonth(value: DateType): Date;
    static startOfMonth(value: DateType): Date;
    static setDate(value: DateType, { year, month, day, hour, minutes, }: {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minutes?: number;
    }): Date;
}
