function assign(target, ...source) {
  if (typeof target != 'object') {
    throw new TypeError('target must be an object')
  }
  let to = Object(target);
  if (source.length > 0) {
    source.forEach((nextSource) => {
      let from = Object(nextSource);
      let keys = Object.getOwnPropertyNames(from)
      keys.forEach((nextKey) => {
        let desc = Object.getOwnPropertyDescriptor(from, nextKey);
        if (desc !== undefined && desc.enumerable) {
          to[nextKey] = from[nextKey];
        }
      })
    })
  }
  
  return to;
}

module.exports = { assign };