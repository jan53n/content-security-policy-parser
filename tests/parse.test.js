import { $parse } from "./parser.js";
import { describe, it } from "node:test";
import assert from "assert";
import { serialize } from "../serializer.js";

describe("parse", () => {
  it("should parse a simple CSP with default-src", () => {
    const csp = "default-src 'self'";
    const result = $parse(csp);

    const expected = {
      "default-src": [{ type: "keyword", value: "self" }]
    };

    assert.deepEqual(result, expected);
    assert.deepEqual(serialize(result), csp);
  });

  it("should parse CSP with multiple directives", () => {
    const csp = "default-src 'self'; img-src https:; script-src 'none'";
    const result = $parse(csp);

    const expected = {
      "default-src": [{ type: "keyword", value: "self" }],
      "img-src": [{ type: "scheme", value: "https" }],
      "script-src": [{ type: "keyword", value: "none" }]
    };

    assert.deepEqual(result, expected);
    assert.deepEqual(serialize(result), csp);
  });

  it("should parse CSP with multiple sources for a directive", () => {
    const csp = "default-src 'self' https://example.com";
    const result = $parse(csp);

    assert.deepEqual(result, {
      "default-src": [{ type: "keyword", value: "self" }, { type: "host", value: "https://example.com" }]
    });
  });

  it("should handle empty CSP", () => {
    const csp = "";
    const result = $parse(csp);

    assert.deepEqual(result, {});
    assert.deepEqual(serialize(result), csp);
  });

  it("should handle CSP with unusual formatting and spaces", () => {
    const csp = "  default-src   'self'   ;   img-src   *;  ";
    const result = $parse(csp);

    const expected = {
      "default-src": [{ type: "keyword", value: "self" }],
      "img-src": [{ type: "host", value: "*" }]
    };

    assert.deepEqual(result, expected);
  });

  it("should parse hashes with valid hash sources", () => {
    const csp = "script-src 'unsafe-inline' 'sha256-bsL+mi3oZzLLaqQfYT1VG97MlXdJVMfWdxL4zJZWWso=' 'sha256-DMxzebz+UDMxY8vhyVtJqs3f8nV/unUlxokxCC596BM=';";
    const result = $parse(csp);

    const expected = {
      "script-src": [
        {
          type: "keyword",
          value: "unsafe-inline"
        },
        {
          type: "hash",
          algorithm: "sha256",
          value: "bsL+mi3oZzLLaqQfYT1VG97MlXdJVMfWdxL4zJZWWso="
        },
        {
          type: "hash",
          algorithm: "sha256",
          value: "DMxzebz+UDMxY8vhyVtJqs3f8nV/unUlxokxCC596BM="
        }
      ]
    }

    assert.deepEqual(result, expected);
    assert.deepEqual(serialize(result) + ";", csp);
  });

  it("should parse valid nonce sources", () => {
    const csp = "script-src nonce-bsL+mi3oZzLLaqQfYT1VG97MlXdJVMfWdxL4zJZWWso= nonce-DMxzebz+UDMxY8vhyVtJqs3f8nV/unUlxokxCC596BM=;";
    const result = $parse(csp);

    const expected = {
      "script-src": [
        {
          type: "nonce",
          value: "bsL+mi3oZzLLaqQfYT1VG97MlXdJVMfWdxL4zJZWWso="
        },
        {
          type: "nonce",
          value: "DMxzebz+UDMxY8vhyVtJqs3f8nV/unUlxokxCC596BM="
        }
      ]
    }

    assert.deepEqual(result, expected);
    assert.deepEqual(serialize(result) + ";", csp);
  });
});
