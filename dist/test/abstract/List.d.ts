import type { Optional } from '@project-types/common';
export declare const enum SortingOrder {
    ASC = "asc",
    DESC = "desc"
}
import { DateType } from '@utils/DateHelper';
export interface IList<ListParams, CreateParams, FilterParams = null, I = string> {
    ids: I[];
    isDataSet: boolean;
    values: ListParams[];
    filteredValues: ListParams[];
    filteredValuesIds: I[];
    has(id: I): boolean;
    get(id: I): Optional<ListParams>;
    getValuesByIds(ids: I[]): ListParams[];
    getFilteredValues(filterParams: FilterParams): ListParams[];
    getFilteredValuesIds(filterParams: FilterParams): I[];
    getFilterParams(): FilterParams;
    setFilterParams(params: FilterParams): void;
    updateFilterParams(params: Partial<FilterParams>): void;
    getOrderParams(): OrderParams;
    setOrderParams(params: OrderParams): void;
    set(params: CreateParams[]): void;
    add(params: CreateParams[]): void;
    addIfNotExist(params: CreateParams[]): void;
    update(id: I, value: CreateParams): void;
    remove(id: I): void;
    reset(): void;
    serialize?(): CreateParams[];
}
export interface IListItem<P> {
    serialize?(): P;
}
export interface OrderParams {
    fieldName: string;
    order: SortingOrder;
}
export declare abstract class List<ListParams, CreateParams, FilterParams = null, I = string> implements IList<ListParams, CreateParams, FilterParams, I> {
    protected readonly identifiableFieldName: string;
    protected filterParams: FilterParams;
    protected orderParams: OrderParams;
    protected list: Map<I, ListParams>;
    private isSetted;
    constructor(params?: CreateParams[]);
    get isDataSet(): boolean;
    get ids(): I[];
    get values(): ListParams[];
    get orderedValues(): ListParams[];
    get filteredValues(): ListParams[];
    get filteredValuesIds(): I[];
    getValuesByIds(ids: I[]): ListParams[];
    forEach(callbackfn: (value: ListParams, key: I) => void, _?: any): void;
    set(params: CreateParams[]): void;
    add(params: CreateParams[]): void;
    addIfNotExist(params: CreateParams[]): void;
    update(id: I, value: CreateParams): void;
    remove(id: I): void;
    reset(): void;
    get(id: I): ListParams;
    has(id: I): boolean;
    getSize(): number;
    getFilterParams(): FilterParams;
    setFilterParams(params?: FilterParams): void;
    updateFilterParams(params: Partial<FilterParams>): void;
    getOrderParams(): OrderParams;
    setOrderParams(params: OrderParams): void;
    hasFilteredValues(filterParams: FilterParams): boolean;
    getFilteredValues(filterParams: FilterParams): ListParams[];
    getFilteredValuesIds(filterParams: FilterParams): I[];
    protected getOrderedValues(params: ListParams[]): ListParams[];
    protected filterValue(value: ListParams, filterParams: FilterParams): boolean;
    protected getId(value: ListParams | CreateParams): I;
    protected abstract create(params: CreateParams): ListParams;
    protected filterFieldValue(value: ListParams, filterValue: Optional<any>, fieldName: keyof ListParams): boolean;
    protected filterExecuteFieldValue(value: ListParams, executeValue: Optional<any>, fieldName: keyof ListParams): boolean;
    protected filterFieldValueByArray(value: ListParams, filterValue: Optional<any[]>, fieldName: keyof ListParams): boolean;
    protected filterArrayFieldValue(value: ListParams, filterValue: Optional<any>, fieldName: keyof ListParams): boolean;
    protected filterArrayFieldValueByArray(value: ListParams, filterValue: Optional<any[]>, fieldName: keyof ListParams): boolean;
    protected filterFieldValueIncludesString(value: ListParams, filterValue: Optional<string>, fieldName: keyof ListParams): boolean;
    protected filterFieldValueBySameDay(value: ListParams, filterValue: Optional<DateType>, fieldName: keyof ListParams): boolean;
    protected filterFieldValueBySameOrAfterDate(value: ListParams, filterValue: Optional<DateType>, fieldName: keyof ListParams): boolean;
    protected filterFieldValueByBeforeDate(value: ListParams, filterValue: Optional<DateType>, fieldName: keyof ListParams): boolean;
}
