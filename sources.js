
/**
 * common keyword sources
 * @enum {string}
 * @readonly
 */
export const Keyword = Object.freeze({
    SELF: "'self'",
    UNSAFE_INLINE: "'unsafe-inline'",
    UNSAFE_EVAL: "'unsafe-eval'",
    STRICT_DYNAMIC: "'strict-dynamic'",
    UNSAFE_HASHES: "'unsafe-hashes'",
    REPORT_SAMPLE: "'report-sample'",
    UNSAFE_ALLOW_REDIRECTS: "'unsafe-allow-redirects'",
    WASM_UNSAFE_EVAL: "'wasm-unsafe-eval'",
    SCRIPT: "'script'",
    NONE: "'none'"
});

/**
 * algorithm names that can be used in combination with hash sources
 * @enum {string}
 * @readonly
 */
export const HashSourceAlgorithm = {
    SHA_256: "sha256",
    SHA_384: "sha384",
    SHA_512: "sha512"
};

/**
 * make csp nonce-{hash} source
 * @param {string} base64value
 * @return {string}
 */
export function nonce(base64value) {
    return "nonce-" + base64value;
}

/**
 * make csp {algorithm}-{hash} hash source
 * @param {HashAlgorithmIdentifier} algorithm
 * @param {string} value
 * @return {string}
 */
export function hash(algorithm, value) {
    return "'" + algorithm + "-" + value + "'";
}