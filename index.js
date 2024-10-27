import { parse as _parse } from "./generated/parser.js";

/**
 * @typedef {Record<string, string[]|null>} CSPParserResult
 */

/**
 * parse CSP string into object
 * @param {string} payload
 * @return {CSPParserResult}
 */
export function parse(payload) {
    return _parse(payload);
}

/**
 * serialize parse result into a valid CSP string
 * @param {CSPParserResult} payload
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