#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const program = require("commander");

program
  .version("0.0.1", "-v, --version")
  .option("-c, --config  [path]", "Path to configuration file.")
  .option("-s, --srcDir  [path]", "Specify directory where components is defined.")
  .option(
    "-d, --distDir [path]",
    "Specify output directory of type definition."
  )
  .parse(process.argv);

let config;
try {
  const configFileName = program.config || "nextjs-typesafe-link.config.js";
  const configFilePath = path.resolve(configFileName);
  config = require(configFilePath);
} catch {
  config = require("../dist/config").config;
} finally {
  require("../dist").run(config);
}
