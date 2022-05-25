const path = require('path')
const sum = require('./sum.js')

const total = sum(10, 5);
console.log(path.resolve(__dirname,'build'))
console.log(total)