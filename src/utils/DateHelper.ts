/* tslint:disable max-file-line-count */
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import getMinutes from 'date-fns/getMinutes';
import getHours from 'date-fns/getHours';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import format from 'date-fns/format';
import addWeeks from 'date-fns/addWeeks';
import subWeeks from 'date-fns/subWeeks';
import addMonths from 'date-fns/addMonths';
import addHours from 'date-fns/addHours';
import addMinutes from 'date-fns/addMinutes';
import subMinutes from 'date-fns/subMinutes';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import subMonths from 'date-fns/subMonths';
import subYears from 'date-fns/subYears';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInYears from 'date-fns/differenceInYears';
import differenceInWeeks from 'date-fns/differenceInWeeks';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import isToday from 'date-fns/isToday';
import isValid from 'date-fns/isValid';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import isWithinInterval from 'date-fns/isWithinInterval';
import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping';
import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';
import isSameYear from 'date-fns/isSameYear';
import addYears from 'date-fns/addYears';
import getISODay from 'date-fns/getDay';
import parseISO from 'date-fns/parseISO';
import isNil from 'lodash/isNil';
import mapValues from 'lodash/mapValues';

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

// https://date-fns.org/v2.8.1/docs/format
export enum DateFormatItem {
    Year = 'yyyy',
    YearShort = 'yy',
    MonthNumber = 'MM',
    MonthStringShort = 'MMM',
    MonthString = 'MMMM',
    Day = 'dd',
    DayShort = 'd',
    WeekDay = 'EEEEEE',
    Hour = 'H',
    Minute = 'mm',
    Second = 'ss',
}

export enum DateTypes {
    START = 'startDate',
    END = 'endDate',
}

export const enum DateFormat {
    // @ts-ignore H:mm:ss
    Time = `${DateFormatItem.Hour}:${DateFormatItem.Minute}:${DateFormatItem.Second}`,
    // @ts-ignore H:mm
    TimeWithoutSeconds = `${DateFormatItem.Hour}:${DateFormatItem.Minute}`,
    // @ts-ignore dd.MM.yyyy
    DateWithDotSeparator = `${DateFormatItem.Day}.${DateFormatItem.MonthNumber}.${DateFormatItem.Year}`,
    // @ts-ignore dd MMMM yyyy
    DateWithMonthString = `${DateFormatItem.Day} ${DateFormatItem.MonthString} ${DateFormatItem.Year}`,
    // @ts-ignore yyyy-MM-dd
    DateWithDashSeparator = `${DateFormatItem.Year}-${DateFormatItem.MonthNumber}-${DateFormatItem.Day}`,
    // @ts-ignore dd/MM/yy
    DateWithSlashSeparator = `${DateFormatItem.Day}/${DateFormatItem.MonthNumber}/${DateFormatItem.YearShort}`,
    // @ts-ignore dd.MM.yyyy H:mm
    DateWithTime = `${DateFormatItem.Day}.${DateFormatItem.MonthNumber}.${DateFormatItem.Year} ${DateFormatItem.Hour}:${DateFormatItem.Minute}`,
    // @ts-ignore EEEEEE,d
    WeekDayWithDay = `${DateFormatItem.WeekDay},${DateFormatItem.DayShort}`,
    // @ts-ignore dd MMMM
    DayWithMonthString = `${DateFormatItem.Day} ${DateFormatItem.MonthString}`,
    // @ts-ignore dd.MMMM
    DayWithMonth = `${DateFormatItem.Day}.${DateFormatItem.MonthNumber}`,
}

interface FullAgeData {
    years: number;
    months: number;
    weeks: number;
    days: number;
}

export class DateHelper {
    public static now(): Date {
        return new Date();
    }

    // Нужно для Сафари тк там валидные даты инвалидны YYYY-MM-DD DD-MM-YYYY
    // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
    // Даты в таком формате нам прилетают для записей из медиалога
    public static createDate(value: string): Date {
        return parseISO(value);
    }

    public static parseDate(date: DateConstructor): Date {
        // const { year, month, day, hours, minutes, seconds, milliseconds } = mapValues(date, it => Number(it));
        const { year, month } = mapValues(date, it => Number(it));
        // TODO если в день undefined то получаем инвалидную дату
        return new Date(year, month - 1); // , day, hours, minutes, seconds, milliseconds);
    }

    public static toNoon(value: DateType): Date {
        const date = new Date(value);
        return startOfDay(date);
    }

    public static getTime(date: DateType): string {
        return new Date(date).toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric' });
    }

    public static toLocalStringDate(value: DateType, withTime?: boolean): string {
        const date = new Date(value);

        const options: object = withTime
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

    public static format(
        value: Optional<Nullable<DateType>>,
        formatParams: DateFormat | DateFormatItem,
        defaultValue: string = '-',
    ): string {
        let formattedValue = defaultValue;

        if (!isNil(value)) {
            const date = new Date(value);

            formattedValue = format(date, formatParams as unknown as string);
        }

        return formattedValue;
    }

    public static formatIfNotNil(
        value: Optional<Nullable<DateType>>,
        formatParams: DateFormat | DateFormatItem,
    ): Optional<string> {
        let formattedValue;

        if (!isNil(value)) {
            const date = new Date(value);

            formattedValue = format(date, formatParams as unknown as string);
        }

        return formattedValue;
    }

    public static getStartOfDay(value: DateType = new Date()): Date {
        const date = new Date(value);
        return startOfDay(date || new Date());
    }

    public static getEndOfDay(value?: DateType): Date {
        const date = value ? new Date(value) : new Date();
        return endOfDay(date);
    }
    public static getMinutes(value: DateType): number {
        return getMinutes(new Date(value));
    }

    public static getHours(value: DateType): number {
        return getHours(new Date(value));
    }

    public static getISODay(value: DateType): number {
        return getISODay(new Date(value));
    }

    public static isWeekend(value: DateType): boolean {
        return this.getISODay(value) === 6 || this.getISODay(value) === 0;
    }

    public static getYear(value?: DateType): number {
        const date = value ? new Date(value) : new Date();
        return getYear(date);
    }

    public static getMonth(value?: DateType): number {
        const date = value ? new Date(value) : new Date();
        return getMonth(date);
    }

    public static addWeeks(value: DateType, count: number): Date {
        return addWeeks(new Date(value), count);
    }

    public static subWeeks(value: DateType, count: number): Date {
        return subWeeks(new Date(value), count);
    }

    public static addMinutes(value: DateType, minutes: number): Date {
        return addMinutes(new Date(value), minutes);
    }

    public static subMinutes(value: DateType, minutes: number): Date {
        return subMinutes(new Date(value), minutes);
    }

    public static addDays(value: DateType, days: number): Date {
        return addDays(new Date(value), days);
    }

    public static addOptionalDays(value: DateType, days?: Nullable<number>): Optional<Date> {
        return !!days ? addDays(new Date(value), days) : undefined;
    }

    public static addMonths(value: DateType, days: number): Date {
        return addMonths(new Date(value), days);
    }

    public static subMonths(value: DateType, days: number): Date {
        return subMonths(new Date(value), days);
    }

    public static addHours(value: DateType, hours: number): Date {
        return addHours(new Date(value), hours);
    }

    public static subDays(value: DateType, days: number): Date {
        return subDays(new Date(value), days);
    }

    public static addYears(value: DateType, years: number): Date {
        return addYears(new Date(value), years);
    }

    public static subYears(value: DateType, years: number): Date {
        return subYears(new Date(value), years);
    }

    public static differenceInMinutes(valueLeft: DateType, valueRight: DateType): number {
        const dateLeft = new Date(valueLeft);
        const dateRight = new Date(valueRight);
        return differenceInMinutes(dateLeft, dateRight);
    }

    public static differenceInCalendarDays(valueLeft: DateType, valueRight: DateType): number {
        const dateLeft = new Date(valueLeft);
        const dateRight = new Date(valueRight);
        return differenceInCalendarDays(dateLeft, dateRight);
    }

    // Get the number of full weeks between two dates.
    public static differenceInWeeks(valueLeft: DateType, valueRight: DateType): number {
        const dateLeft = new Date(valueLeft);
        const dateRight = new Date(valueRight);
        return differenceInWeeks(dateLeft, dateRight);
    }

    public static differenceInMonths(valueLeft: DateType, valueRight: DateType): number {
        const dateLeft = new Date(valueLeft);
        const dateRight = new Date(valueRight);
        return differenceInMonths(dateLeft, dateRight);
    }

    public static differenceInYears(valueLeft: DateType, valueRight: DateType): number {
        const dateLeft = new Date(valueLeft);
        const dateRight = new Date(valueRight);
        return differenceInYears(dateLeft, dateRight);
    }

    public static getFullAge(birthDate: DateType, actualOn: DateType = new Date()): FullAgeData {
        const date = new Date(birthDate);
        return {
            years: DateHelper.differenceInYears(actualOn, date),
            months: DateHelper.differenceInMonths(actualOn, date),
            weeks: DateHelper.differenceInWeeks(actualOn, date),
            days: DateHelper.differenceInCalendarDays(actualOn, date),
        };
    }

    public static isAfter(value: DateType, valueToCompare: DateType): boolean {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return isAfter(date, dateToCompare);
    }

    public static isBefore(value: DateType, valueToCompare: DateType): boolean {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return isBefore(date, dateToCompare);
    }

    public static isSameDayOrAfter(value: DateType, valueToCompare: DateType): boolean {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return isSameDay(date, dateToCompare) || isAfter(date, dateToCompare);
    }

    public static isSameDayOrBefore(value: DateType, valueToCompare: DateType): boolean {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return isSameDay(date, dateToCompare) || isBefore(date, dateToCompare);
    }

    public static isSameOrAfter(value: DateType, valueToCompare: DateType): boolean {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return date.getTime() === dateToCompare.getTime() || isAfter(date, dateToCompare);
    }

    public static isSameOrBefore(value: DateType, valueToCompare: DateType): boolean {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return date.getTime() === dateToCompare.getTime() || isBefore(date, dateToCompare);
    }

    public static isToday(value: DateType): boolean {
        const date = new Date(value);
        return isToday(date);
    }

    public static isValid(value: DateType): boolean {
        const date = new Date(value);
        return isValid(date);
    }

    public static isSameDay(valueLeft: DateType, valueRight: DateType): boolean {
        return isSameDay(new Date(valueLeft), new Date(valueRight));
    }

    public static isSameMonth(valueLeft: DateType, valueRight: DateType): boolean {
        return isSameMonth(new Date(valueLeft), new Date(valueRight));
    }

    public static isSameYear(valueLeft: DateType, valueRight: DateType): boolean {
        return isSameYear(new Date(valueLeft), new Date(valueRight));
    }

    public static endOfWeek(value: DateType): Date {
        const date = new Date(value);
        return endOfWeek(date, { weekStartsOn: 1 });
    }

    public static startOfWeek(value: DateType): Date {
        const date = new Date(value);
        return startOfWeek(date, { weekStartsOn: 1 });
    }

    public static endOfMonth(value: DateType = new Date()): Date {
        const date = new Date(value);
        return endOfMonth(date);
    }

    public static startOfMonth(value: DateType): Date {
        const date = new Date(value);
        return startOfMonth(date);
    }

    public static isWithinInterval(value: DateType, interval: IntervalParams): boolean {
        const date = new Date(value);
        return isWithinInterval(date, interval);
    }

    public static areIntervalsOverlapping(interval: IntervalParams, compareInterval: IntervalParams): boolean {
        return areIntervalsOverlapping(interval, compareInterval);
    }

    public static areIntervalOverlappingWithSomeInterval(
        interval: IntervalParams,
        compareIntervals: IntervalParams[],
    ): boolean {
        return compareIntervals.some(compareInterval => this.areIntervalsOverlapping(interval, compareInterval));
    }

    public static isDateIntersectWithIntervals({ start, end }: IntervalParams, date: Date): boolean {
        return this.isSameOrAfter(date, start) && this.isSameOrBefore(date, end);
    }

    public static makeIntervalParams(start: DateType, end: DateType): IntervalParams {
        return {
            start: new Date(start),
            end: new Date(end),
        };
    }

    public static makeTimeData(value: DateType): TimeData {
        const date = new Date(value);

        return {
            hour: date.getHours(),
            minutes: date.getMinutes(),
        };
    }

    public static setTimeData(value: DateType, { hour, minutes }: TimeData): Date {
        const date = new Date(value);
        date.setMinutes(minutes);
        date.setHours(hour);

        return date;
    }

    public static setTime(value: DateType, timeValue: DateType): Date {
        const date = new Date(value);
        const dateTime = new Date(timeValue);

        date.setMinutes(dateTime.getMinutes());
        date.setHours(dateTime.getHours());

        return date;
    }

    public static setDate(
        value: DateType,
        { year, month, day }: { year?: number; month?: number; day?: number },
    ): Date {
        const date = new Date(value);

        if (!isNil(year)) {
            date.setFullYear(year);
        }
        if (!isNil(day)) {
            date.setDate(day);
        }
        if (!isNil(month)) {
            date.setMonth(month);
        }

        return date;
    }

    public static toIsoWithTimezone(value: DateType): string {
        const date = new Date(value);

        return format(date, 'y-MM-dd HH:mm:ssXXX').replace(' ', 'T');
    }
}
