var input = require('fs').readFileSync(__dirname+'/day10-input.txt').toString();

console.log( `day 10 part 1 - result is: ${require('./10.js')(input)}` );
console.log( `day 10 part 2 - result is: ${require('./10.js')(input, true)}` );
