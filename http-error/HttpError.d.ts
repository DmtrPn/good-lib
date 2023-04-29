interface ErrorData {
    code: string;
    message?: string;
}
declare abstract class HttpError extends Error {
    abstract get code(): number;
    get data(): ErrorData;
    protected get errorCode(): string;
}
export { HttpError, ErrorData };
