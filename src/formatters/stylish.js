const formatStylish = (diff, depth = 0) => {
  const indent = ' '.repeat(depth * 4)

  const lines = diff.map((node) => {
    const {
      key, type, value, oldValue, newValue, children
    } = node

    switch (type) {
      case 'added':
        return `${indent}  + ${key}: ${formatValue(value, depth + 1)}`
      case 'removed':
        return `${indent}  - ${key}: ${formatValue(value, depth + 1)}`
      case 'changed':
        return [
            `${indent}  - ${key}: ${formatValue(oldValue, depth + 1)}`,
            `${indent}  + ${key}: ${formatValue(newValue, depth + 1)}`
        ].join('\n')
      case 'nested':
        return `${indent}    ${key}: ${formatStylish(children, depth + 1)}`
      case 'unchanged':
        return `${indent}    ${key}: ${formatValue(value, depth + 1)}`
      default:
        throw new Error(`Unknown type: ${type}`)
    }
  })

  return `{\n${lines.join('\n')}\n${indent}}`
}

const formatValue = (value, depth) => {
  if (typeof value === 'object' && value !== null) {
    const indent = ' '.repeat(depth * 4)
    const lines = Object.entries(value).map(([key, val]) => `${indent}    ${key}: ${formatValue(val, depth + 1)}`)
    return `{\n${lines.join('\n')}\n${indent}}`
  }
  return value
}

export { formatStylish }
