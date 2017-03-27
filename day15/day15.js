var input = require('fs').readFileSync(__dirname+'/day15-input.txt').toString();
// console.log( `day 15 part 1 - result is: ${require('./15.js').execPart1(31, 39, input)}` );
// console.log( `day 15 part 2 - result is: ${require('./13.js').execPart2(50, input)}` );
require('./15.js').init(input);