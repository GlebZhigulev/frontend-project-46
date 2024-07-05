import * as fs from 'fs'
import * as path from 'path'
import parseData from './parser.js'
import _ from 'lodash'

const readData = (filepath) => {
  const dirName = process.cwd(filepath)
  const resolvedPath = path.resolve(dirName, filepath)
  return fs.readFileSync(resolvedPath, 'utf-8');
}

const genDiff = (filepath1, filepath2) => {
  const data1 = readData(filepath1)
  const data2 = readData(filepath2)

  const firstData = parseData(data1)
  const secondData = parseData(data2)

  const keys = _.union(Object.keys(firstData), Object.keys(secondData))
  const sortedKeys = _.sortBy(keys)
  const diff = sortedKeys.map((key) => {
    if (_.has(firstData, key) && _.has(secondData, key)) {
      if (_.isEqual(firstData[key], secondData[key])) {
        return `  ${key}: ${firstData[key]}`
      }
      return `- ${key}: ${firstData[key]}\n+ ${key}: ${secondData[key]}`
    }
    if (_.has(firstData, key)) {
      return `- ${key}: ${firstData[key]}`
    }
    return `+ ${key}: ${secondData[key]}`
  })

  return `{\n${diff.join('\n')}\n}`
}

export default genDiff
