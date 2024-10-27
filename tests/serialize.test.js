import assert from 'node:assert';
import test from 'node:test';
import { serialize } from '../index.js';

test('serialize function should handle a basic CSP object', () => {
    const input = {
        'default-src': ["'self'", 'https://example.com'],
        'script-src': ["'unsafe-inline'", 'https://scripts.example.com']
    };

    const expected = "default-src 'self' https://example.com;script-src 'unsafe-inline' https://scripts.example.com;";
    assert.strictEqual(serialize(input), expected);
});

test('serialize function should handle CSP with null values correctly', () => {
    const input = {
        'default-src': ["'self'"],
        'block-all-mixed-content': null,
        'upgrade-insecure-requests': null
    };

    const expected = "default-src 'self';block-all-mixed-content;upgrade-insecure-requests;";
    assert.strictEqual(serialize(input), expected);
});

test('serialize function should handle an empty CSP object', () => {
    const input = {};
    const expected = "";
    // @ts-ignore
    assert.strictEqual(serialize(input), expected);
});

test('serialize function should handle CSP with empty arrays', () => {
    const input = {
        'default-src': [],
        'script-src': ["'self'"]
    };

    const expected = "default-src;script-src 'self';";
    assert.strictEqual(serialize(input), expected);
});

test('serialize function should handle CSP with mixed empty arrays and values', () => {
    const input = {
        'default-src': [],
        'script-src': ["'self'", 'https://example.com'],
        'style-src': null
    };

    const expected = "default-src;script-src 'self' https://example.com;style-src;";
    assert.strictEqual(serialize(input), expected);
});

test('serialize function should handle CSP with complex sources and multiple entries', () => {
    const input = {
        'default-src': ["'self'", 'https://example.com', 'data:'],
        'img-src': ["https://images.example.com", 'blob:', 'data:'],
        'connect-src': ["https://api.example.com", 'wss://example.com'],
    };

    const expected = "default-src 'self' https://example.com data:;img-src https://images.example.com blob: data:;connect-src https://api.example.com wss://example.com;";
    assert.strictEqual(serialize(input), expected);
});
