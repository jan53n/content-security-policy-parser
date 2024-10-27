import { describe, it } from "node:test";
import facebook from "./facebook.js";
import github from "./github.js";

describe("CSP in the wild", () => {
    it(facebook.name, facebook);
    it(github.name, github);
});