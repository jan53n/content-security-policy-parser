
/**
 * convert parser result into csp string
 * @param {import("./types").CSPParserResult} csp
 * @return {string} 
 */
export function serialize(csp) {
    return Object.entries(csp)
        .map(([directive, rules]) => `${directive} ${encodeRules(rules)}`)
        .join("; ");
}

/**
 * 
 * @param {import("./types").Source[]} rules 
 */
function encodeRules(rules) {
    return rules
        .map((rule) => {
            switch (rule.type) {
                case "keyword":
                    return `'${rule.value}'`;
                case "nonce":
                    return `nonce-${rule.value}`;
                case "hash":
                    return `'${rule.algorithm}-${rule.value}'`;
                case "host":
                    return rule.value;
                case "scheme":
                    return `${rule.value}:`;
                default:
                    throw new Error("Unknown rule type found!");
            }
        })
        .join(" ");
}