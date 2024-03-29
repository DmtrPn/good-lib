import '@jest-decorated/core/globals';
import '@testing-library/jest-dom';
import { AxiosInstance } from 'axios';
import { IMockAxios } from './MockAxios';
export declare abstract class TestSuit {
    protected mockAxios: IMockAxios;
    constructor(axios?: AxiosInstance);
    beforeEach(): void;
    afterEach(): void;
    protected waitAsyncUseEffectFinished(): Promise<void>;
    protected checkIsGetSent(url: string): void;
    protected checkIsPostSent(url: string): void;
    protected checkIsPutSent(url: string): void;
}
