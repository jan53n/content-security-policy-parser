import { parse } from "../index.js";
import * as parser from "../generated/debug/parser.js";

export function $parse(payload) {
    return parse(payload, parser.parse);
}