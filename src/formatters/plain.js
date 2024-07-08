import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const formatPlain = (diff, parent = '') => {
  const lines = diff.flatMap((node) => {
    const {
      key, type, value, oldValue, newValue, children,
    } = node;
    const property = parent ? `${parent}.${key}` : key;

    switch (type) {
      case 'added':
        return `Property '${property}' was added with value: ${formatValue(value)}`;
      case 'removed':
        return `Property '${property}' was removed`;
      case 'changed':
        return `Property '${property}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`;
      case 'nested':
        return formatPlain(children, property);
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return lines.join('\n');
};

export default formatPlain;
