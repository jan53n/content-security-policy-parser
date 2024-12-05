# CSP3 Parser

A robust CSP3 (Content Security Policy 3) parser that complies with the
[W3C CSP3 Specification](https://www.w3.org/TR/CSP3/#directive-value). It parses
complex CSP strings into structured JavaScript objects, making it easier to
analyze and process Content Security Policies programmatically.

---

## Usage

### Parsing

```javascript
import { parse } from "csp3-parser";

const csp =
    "default-src 'self' https://example.com; script-src 'unsafe-inline' 'self' https://cdn.example.com; img-src https://images.example.com data: 'self'; object-src 'none'";
const result = parse(csp);

console.log(result);
// Output:
// {
//   "default-src": [
//     { type: "keyword", value: "self" },
//     { type: "host", value: "https://example.com" }
//   ],
//   "script-src": [
//     { type: "keyword", value: "unsafe-inline" },
//     { type: "keyword", value: "self" },
//     { type: "host", value: "https://cdn.example.com" }
//   ],
//   "img-src": [
//     { type: "host", value: "https://images.example.com" },
//     { type: "scheme", value: "data" },
//     { type: "keyword", value: "self" }
//   ],
//   "object-src": [
//     { type: "keyword", value: "none" }
//   ]
// }
```

### Serialization

```javascript
import { serialize } from "csp3-parser";

/**
 * @type {import("csp3-parser/types").CSPParserResult}
 */
const csp = {
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
};

const result = serialize(csp);

console.log(result);
// Output:
// default-src 'self' https://example.com; script-src 'unsafe-inline' 'self' https://cdn.example.com; img-src https://images.example.com data: 'self'; object-src 'none'
```
