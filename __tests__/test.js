import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = (filename) => fs.readFileSync(getPath(filename), 'utf-8')

test.each([
  ['json', 'stylish', readFile('fileOutputStylish.txt')],
  ['yml', 'stylish', readFile('fileOutputStylish.txt')],
  ['json', 'plain', readFile('fileOutputPlain.txt')],
  ['yml', 'plain', readFile('fileOutputPlain.txt')],
  ['json', 'json', readFile('fileOutputJson.txt')],
  ['yml', 'json', readFile('fileOutputJson.txt')]
])('all test gendiff', (extension, format, expected) => {
  expect(genDiff(getPath(`file1.${extension}`), getPath(`file2.${extension}`), format)).toEqual(expected)
})
