var input = require('fs').readFileSync(__dirname+'/day18-input.txt').toString();
console.log( `day 18 part 1 - result is: ${require('./18.js').init(input, 40)}` );
console.log( `day 18 part 1 - result is: ${require('./18.js').init(input, 400000)}` );
