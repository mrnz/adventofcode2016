var input = require('fs').readFileSync(__dirname+'/day9-input.txt').toString();

console.log( `day 9 part 1 - result is: ${require('./9-1.js')(input)}` );
console.log( `day 9 part 2 - result is: ${require('./9-2.js')(input)}` );
