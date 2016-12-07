var input = require('fs').readFileSync(__dirname+'/day5-input.txt').toString();

console.log( `day 5 part 1 - result is: ${require('./5-1.js')(input,2)}` );
console.log( `day 5 part 2 - result is: ${require('./5-2.js')(input,2)}` );
