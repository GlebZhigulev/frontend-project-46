#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    // You can handle the file paths here if needed
    console.log(genDiff(filepath1, filepath2));
  })
  .parse(process.argv);

// Show help if no arguments are provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

