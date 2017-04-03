var input = require('fs').readFileSync(__dirname+'/day21-input.txt').toString().split('\n');
console.log( `day 21 part 1 - result is: ${require('./21.js').init(input)}` );
// console.log( `day 21 part 1 - result is: ${require('./21.js').init(input, 400000)}` );
