# CSP3 Parser

A CSP3 Parser based on W3 specification
([https://www.w3.org/TR/CSP3/#directive-value](https://www.w3.org/TR/CSP3/#directive-value))

## Usage
```javascript
it("should parse a complex CSP with multiple directives and sources", () => {
    const csp =
        "default-src 'self' https://example.com; script-src 'unsafe-inline' 'self' https://cdn.example.com; img-src https://images.example.com data: 'self'; object-src 'none'";
    const result = $parse(csp);

    assert.deepEqual(result, {
        "default-src": [
            { type: "keyword", value: "self" },
            { type: "host", value: "https://example.com" },
        ],
        "script-src": [
            { type: "keyword", value: "unsafe-inline" },
            { type: "keyword", value: "self" },
            { type: "host", value: "https://cdn.example.com" },
        ],
        "img-src": [
            { type: "host", value: "https://images.example.com" },
            { type: "scheme", value: "data" },
            { type: "keyword", value: "self" },
        ],
        "object-src": [
            { type: "keyword", value: "none" },
        ],
    });
});
```
