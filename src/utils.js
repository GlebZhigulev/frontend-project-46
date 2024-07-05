import * as fs from 'fs'
import * as path from 'path'
import _ from 'lodash'

const readData = (filepath) => {
  const dirName = process.cwd(filepath)
  const resolvedPath = path.resolve(dirName, filepath)
  return fs.readFileSync(resolvedPath, 'utf-8')
}

const generateDiff = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2))
  keys.sort()

  const result = keys.map((key) => {
    if (!_.has(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`
    }
    if (!_.has(obj1, key)) {
      return `  + ${key}: ${obj2[key]}`
    }
    if (_.isEqual(obj1[key], obj2[key])) {
      return `    ${key}: ${obj1[key]}`
    }
    return [
        `  - ${key}: ${obj1[key]}`,
        `  + ${key}: ${obj2[key]}`
    ]
  })

  return `{\n${_.flatten(result).join('\n')}\n}`
}

export { readData, generateDiff }
