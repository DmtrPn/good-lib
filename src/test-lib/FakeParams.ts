import { v4 as uuid } from 'uuid';
import times from 'lodash/times';
import { Chance } from 'chance';

interface IntegerOptions {
    min: number;
    max: number;
}

export class FakeParams {
    private static change = new Chance();

    public static getUuid(): string {
        return uuid();
    }

    public static getUuidArray(count = 1): string[] {
        return times(count, () => this.getUuid());
    }

    public static getName(): string {
        return this.change.word();
    }

    public static getText(): string {
        return this.change.sentence();
    }

    public static getEmail(): string {
        return this.change.email();
    }

    public static getUrl(): string {
        return this.change.url();
    }

    public static getInteger(params: IntegerOptions = { min: 0, max: 100 }): number {
        return this.change.integer(params);
    }

    public static getBoolean(): boolean {
        return this.change.bool();
    }

    public static getDate(): Date {
        return this.change.birthday();
    }
}
