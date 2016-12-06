var input = require('fs').readFileSync(__dirname+'/day3-input.txt').toString().split('\n');

console.log( `day 3 part 1 - result is: ${require('./3-1.js')(input)}` );
console.log( `day 3 part 2 - result is: ${require('./3-2.js')(input)}` );
