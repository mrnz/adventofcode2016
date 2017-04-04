var input = require('fs').readFileSync(__dirname+'/day21-input.txt').toString().split('\n');
var input2 = require('fs').readFileSync(__dirname+'/day21-input.txt').toString().split('\n');
console.log( `day 21 part 1 - result is: ${require('./21.js').init(input, 'abcdefgh')}` );
console.log( `day 21 part 2 - result is: ${require('./21.js').init2(input2, 'fbgdceah')}` );
