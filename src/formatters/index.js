import formatStylish from './stylish.js';
import formatPlain from './plain.js';

export default function makeFormat(object, formatName = 'stylish') {
  switch (formatName) {
    case 'stylish':
      return formatStylish(object);
    case 'plain':
      return formatPlain(object);
    case 'json':
      return JSON.stringify(object);
    default:
      throw new Error('Output format is not correct');
  }
}
