var input = require('fs').readFileSync(__dirname+'/day12-input.txt').toString();

console.log( `day 12 part 1 - result is: ${require('./12.js').exec(input, {})}` );
console.log( `day 12 part 2 - result is: ${require('./12.js').exec(input, {c:1})}` );
