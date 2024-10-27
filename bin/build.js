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

function build() {
  const sourceText = fs.readFileSync(START_GRAMMAR_FILE).toString();

  /** @type {import("peggy").SourceBuildOptions}  */
  const buildConfig = {
    output: "source",
    cache: true,
    format: "es",
  };

  const parserSource = peggy.generate(sourceText, buildConfig);

  fs.mkdirSync(WRITE_PATH, { recursive: true });
  fs.writeFileSync(join(WRITE_PATH, "parser.js"), parserSource);

  console.info("Build complete, files written under", WRITE_PATH);
}

build();

if (argv[2] === "watch") {
  console.info("Watching for grammar file changes...");

  watch(GRAMMAR_PATH, { encoding: 'buffer' }, (eventType, filename) => {
    console.info(`rebuilding, ${filename} changed. (${eventType})`);

    try {
      build();
    } catch (error) {
      console.error(error);
    }
  });
}