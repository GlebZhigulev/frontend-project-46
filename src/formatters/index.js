import { formatStylish } from './stylish.js'
import { formatPlain } from './plain.js'

export default function makeFormat (object, formatName = 'stylish') {
  console.log(formatName)
  switch (formatName) {
    case 'stylish':
      return formatStylish(object)
    case 'plain':
      return formatPlain(object)
    default:
      throw new Error('Output format is not correct')
  }
}
