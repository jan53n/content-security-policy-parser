import { parse as _parse } from "./generated/parser.js";
export { serialize } from "./serializer.js";

/**
 * parse CSP string into object
 * @param {string} payload
 * @param {function} parser
 * @return {import("./types.js").CSPParserResult}
 */
export function parse(payload, parser = _parse) {
    return parser(payload);
}