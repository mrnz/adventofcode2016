var input = require('fs').readFileSync(__dirname+'/day16-input.txt').toString();
console.log( `day 16 part 1 - result is: ${require('./16.js').init(input, 272)}` );
console.log( `day 16 part 2 - result is: ${require('./16.js').init(input, 35651584)}` );