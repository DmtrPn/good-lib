export declare abstract class SerializableEntity<CP, UP, Dto> {
    constructor(params: CP);
    abstract get dto(): Dto;
    protected setParams(params: CP | UP): void;
    protected checkCreateParams(params_: CP): void;
}
