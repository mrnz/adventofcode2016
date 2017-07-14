var input = require('fs').readFileSync(__dirname+'/day23-input.txt').toString();
console.log( `day 23 part 1 - result is: ${require('./23.js').exec(input, {a:7})}` );
console.log( `day 23 part 2 - result is: ${require('./23.js').exec(input, {a:12})}` );
