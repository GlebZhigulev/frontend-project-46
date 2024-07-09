const indentSize = 4;
const formatValue = (value, depth) => {
  if (typeof value === 'object' && value !== null) {
    const indent = ' '.repeat(depth * indentSize);
    const lines = Object.entries(value).map(([key, val]) => `${indent}    ${key}: ${formatValue(val, depth + 1)}`);
    return `{\n${lines.join('\n')}\n${indent}}`;
  }
  return value;
};

const formatStylish = (diff, depth = 0) => {
  const indent = ' '.repeat(depth * indentSize);

  const lines = diff.map((node) => {
    const {
      key, type, value, oldValue, newValue, children,
    } = node;
    const spaceBetween = '    ';
    switch (type) {
      case 'added':
        return `${indent}  + ${key}: ${formatValue(value, depth + 1)}`;
      case 'removed':
        return `${indent}  - ${key}: ${formatValue(value, depth + 1)}`;
      case 'changed':
        return [
          `${indent}  - ${key}: ${formatValue(oldValue, depth + 1)}`,
          `${indent}  + ${key}: ${formatValue(newValue, depth + 1)}`,
        ].join('\n');
      case 'nested':
        return `${indent}${spaceBetween}${key}: ${formatStylish(children, depth + 1)}`;
      case 'unchanged':
        return `${indent}${spaceBetween}${key}: ${formatValue(value, depth + 1)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return `{\n${lines.join('\n')}\n${indent}}`;
};

export default formatStylish;
