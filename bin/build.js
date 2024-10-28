import peggy from "peggy";
import fs from "fs";
import { join } from "path";
import { watch } from 'node:fs';
import { argv } from "process";

const GRAMMAR_PATH = "grammar";
const START_GRAMMAR_FILE = join(
  GRAMMAR_PATH,
  "syntax.pegjs",
);
const WRITE_PATH = "generated";
const WATCH_MODE_PREFIX = "watch";
const WATCH_MODE = argv[2] || "";

function build() {
  const sourceText = fs.readFileSync(START_GRAMMAR_FILE).toString();

  /** @type {import("peggy").SourceText[]} */
  const input = [
    {
      source: START_GRAMMAR_FILE,
      text: sourceText,
    }
  ];

  /** @type {import("peggy").SourceBuildOptions}  */
  const buildConfig = {
    output: "source",
    cache: true,
    format: "es",
  };

  let parserSource;

  try {
    parserSource = peggy.generate(input, buildConfig);
  } catch (error) {
    if (WATCH_MODE) {
      return console.error(error);
    } else {
      throw error;
    }
  }

  fs.mkdirSync(WRITE_PATH, { recursive: true });
  fs.writeFileSync(join(WRITE_PATH, "parser.js"), parserSource);

  console.info("Build complete, files written under", WRITE_PATH);
}

build();

if (WATCH_MODE.startsWith(WATCH_MODE_PREFIX)) {
  console.info("Watching for grammar file changes...");

  watch(GRAMMAR_PATH, { encoding: 'buffer' }, (eventType, filename) => {
    console.info(`rebuilding, ${filename} changed. (${eventType})`);
    build();
  });
}