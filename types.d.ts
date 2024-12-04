export interface CSPParserResult {
    [key: string]: Source[];
}
export type Source = HashSource | HostSource | KeywordSource | NonceSource | SchemeSource;
export interface HashSource extends BaseSource<"hash"> {
    algorithm: string;
}
export type HostSource = BaseSource<"host">;
export type KeywordSource = BaseSource<"keyword">;
export type NonceSource = BaseSource<"nonce">;
export type SchemeSource = BaseSource<"scheme">;
export interface BaseSource<T extends string> {
    type: T;
    value: string;
}
