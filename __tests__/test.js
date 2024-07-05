import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = (filename) => fs.readFileSync(getPath(filename), 'utf-8')

test.each([
  ['json', readFile('fileOutput.txt')],
  ['yml', readFile('fileOutput.txt')]
])('gendiff json and yml formats', (extension, expected) => {
  expect(genDiff(getPath(`file1.${extension}`), getPath(`file2.${extension}`))).toEqual(expected)
})
