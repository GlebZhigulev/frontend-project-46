import url from 'url'
import path, { dirname } from 'node:path'
import fs from 'fs'
import gendiff from '../src/index.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8')

const fileOutput = readFile('fileOutput.txt')
const file1 = './__fixtures__/file1.json'
const file2 = './__fixtures__/file2.json'

describe('comparing files', () => {
  test('JSON files', () => {
    const diff = gendiff(file1, file2).trim()
    // Сравнение построчно
    const diffLines = diff.split('\n')
    const expectedLines = fileOutput.split('\n')
    diffLines.forEach((line, index) => {
      expect(line.trim()).toEqual(expectedLines[index].trim())
    })
  })
})
