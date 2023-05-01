import { AxiosRequestConfig } from 'axios';
export interface IMockAxios {
    getRequestHistory: AxiosRequestConfig[];
    putRequestHistory: AxiosRequestConfig[];
    postRequestHistory: AxiosRequestConfig[];
    setOnGet(url: string | RegExp, response: object, statusCode?: number): void;
    setOnPost(url: string | RegExp, statusCode?: number): void;
    setOnPut(url: string | RegExp, statusCode?: number): void;
    reset(): void;
}
export declare class MockAxios implements IMockAxios {
    private static instance?;
    static getInstance(): MockAxios;
    private mockAdapter;
    private constructor();
    get getRequestHistory(): AxiosRequestConfig[];
    get putRequestHistory(): AxiosRequestConfig[];
    get postRequestHistory(): AxiosRequestConfig[];
    reset(): void;
    setOnGet(url: string, response: object, statusCode?: number): void;
    setOnPost(url: string, statusCode?: number): void;
    setOnPut(url: string, statusCode?: number): void;
}
