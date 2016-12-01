const { resolve } = require('path')

module.exports.root = (base) => (...args) =>
  resolve.apply(null, [base, ...args])

module.exports.removeEmpty = arr => arr.filter(it => !!it)
