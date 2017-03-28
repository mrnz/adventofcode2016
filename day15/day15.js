var input = require('fs').readFileSync(__dirname+'/day15-input.txt').toString();
var input2 = require('fs').readFileSync(__dirname+'/day15-input2.txt').toString();
console.log( `day 15 part 1 - result is: ${require('./15.js').init(input)}` );
console.log( `day 15 part 2 - result is: ${require('./15.js').init(input2)}` );