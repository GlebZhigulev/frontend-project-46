import parseData from './parser.js';
import { readData, generateDiff, getExtention } from './utils.js';
import makeFormat from './formatters/index.js';

const genDiff = (filepath1, filepath2, option = 'stylish') => {
  const data1 = readData(filepath1);
  const data2 = readData(filepath2);
  const ext1 = getExtention(filepath1);
  const ext2 = getExtention(filepath2);
  const firstData = parseData(data1, ext1);
  const secondData = parseData(data2, ext2);
  const objectDiff = generateDiff(firstData, secondData);
  const result = makeFormat(objectDiff, option);
  return result;
};

export default genDiff;
