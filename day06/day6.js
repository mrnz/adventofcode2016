var input = require('fs').readFileSync(__dirname+'/day6-input.txt').toString();

console.log( `day 6 part 1 - result is: ${require('./6-1.js')(input)}` );
console.log( `day 6 part 2 - result is: ${require('./6-1.js')(input, true)}` );
