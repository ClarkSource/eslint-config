#!/usr/bin/env node

const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const [filePath, jsonPatchString] = process.argv.slice(2);
const resolvedFilePath = resolve(filePath);
const jsonPatch = JSON.parse(jsonPatchString);

const input = JSON.parse(readFileSync(resolvedFilePath));
const output = JSON.stringify({ ...input, ...jsonPatch }, null, 2);
writeFileSync(resolvedFilePath, output);
