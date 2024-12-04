import { $parse } from "./parser.js";
import { describe, it } from "node:test";
import assert from "assert";

describe("parse", () => {
  it("should parse a simple CSP with default-src", () => {
    const csp = "default-src 'self'";
    const result = $parse(csp);

    assert.deepEqual(result, {
      "default-src": [{ type: "keyword", value: "self" }]
    });
  });

  it("should parse CSP with multiple directives", () => {
    const csp = "default-src 'self'; img-src https:; script-src 'none'";
    const result = $parse(csp);

    assert.deepEqual(result, {
      "default-src": [{ type: "keyword", value: "self" }],
      "img-src": [{ type: "scheme", value: "https" }],
      "script-src": [{ type: "keyword", value: "none" }]
    });
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
  });

  it("should handle CSP with unusual formatting and spaces", () => {
    const csp = "  default-src   'self'   ;   img-src   *;  ";
    const result = $parse(csp);

    assert.deepEqual(result, {
      "default-src": [{ type: "keyword", value: "self" }],
      "img-src": [{ type: "host", value: "*" }]
    });
  });
});
