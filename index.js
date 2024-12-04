import { parse as _parse } from "./generated/parser.js";
export * as sources from "./sources.js";

/**
 * parse CSP string into object
 * @param {string} payload
 * @param {function} parser
 * @return {import("./types.js").CSPParserResult}
 */
export function parse(payload, parser = _parse) {
    return parser(payload);
}

/**
 * serialize parse result into a valid CSP string
 * @param {import("./types.js").CSPParserResult} payload
 * @return {string}
 */
export function serialize(payload) {
    let serialized = "";

    for (const name in payload) {
        if (Object.prototype.hasOwnProperty.call(payload, name)) {
            const rules = payload[name]?.join(" ");
            serialized += `${name}${rules ? " " + rules : ""};`;
        }
    }

    return serialized;
}