### Hexlet tests and linter status:
[![Actions Status](https://github.com/GlebZhigulev/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/GlebZhigulev/frontend-project-46/actions)

[![check-project](https://github.com/GlebZhigulev/frontend-project-46/actions/workflows/check.yml/badge.svg)](https://github.com/GlebZhigulev/frontend-project-46/actions/workflows/check.yml)

<a href="https://codeclimate.com/github/GlebZhigulev/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/ad0ccc48ec0423156fc4/maintainability" /></a>

<a href="https://codeclimate.com/github/GlebZhigulev/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/ad0ccc48ec0423156fc4/test_coverage" /></a>

___

### Description:

gendiff is a command-line utility for comparing configuration files in JSON and YAML formats. The program supports three output formats: stylish, plain, and json.

---

### Required:

NodeJS version: any

---

### Installation:

```bash
make install
```
---

### Usage:

To use gendiff via the command line, run the following command:

```bash
gendiff [options] <filepath1> <filepath2>
```

## Arguments 

* `<filepath1>` — path to the first file to compare. 
* `<filepath2>` — path to the second file to compare.

## Options 
* `-V, --version` — output the version number. 
* `-f, --format [type]` — specify the output format (default: 'stylish'). Supported formats: stylish, plain, json. 
* `-h, --help` — output usage information.

---
### Examples:

## Compare .json and .yml files with different formats:

