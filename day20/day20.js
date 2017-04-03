var input = require('fs').readFileSync(__dirname+'/day20-input.txt').toString().split('\n');
console.log( `day 20 part 1 - result is: ${require('./20.js').init(input)}` );
console.log( `day 20 part 1 - result is: ${require('./20.js').init(input, true)}` );