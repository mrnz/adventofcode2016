var input = require('fs').readFileSync(__dirname+'/day7-input.txt').toString();

console.log( `day 7 part 1 - result is: ${require('./7-1.js')(input)}` );
console.log( `day 7 part 2 - result is: ${require('./7-2.js')(input)}` );
