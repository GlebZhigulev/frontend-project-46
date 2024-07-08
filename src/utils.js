import * as fs from 'fs'
import * as path from 'path'
import _ from 'lodash'

const readData = (filepath) => {
  const dirName = process.cwd(filepath)
  const resolvedPath = path.resolve(dirName, filepath)
  return fs.readFileSync(resolvedPath, 'utf-8')
}

const generateDiff = (obj1, obj2) => {
  const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)))
  const diff = keys.map((key) => {
    if (!_.has(obj1, key)) {
      return { key, type: 'added', value: obj2[key] }
    }
    if (!_.has(obj2, key)) {
      return { key, type: 'removed', value: obj1[key] }
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { key, type: 'nested', children: generateDiff(obj1[key], obj2[key]) }
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return { key, type: 'changed', oldValue: obj1[key], newValue: obj2[key] }
    }
    return { key, type: 'unchanged', value: obj1[key] }
  })

  return diff
}

export { readData, generateDiff }
