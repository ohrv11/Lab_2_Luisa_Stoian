function capitalize(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Text must be a string');
  }

  return text.length === 0
    ? ''
    : text[0].toUpperCase() + text.slice(1).toLowerCase();
}

export default capitalize;
