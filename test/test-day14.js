var assert = require('assert'),
    day14 = require('../day14/14.js'),
    testInput = 10;

describe('Day 14', function() {

  describe('Part One', function() {

    it('generateHash function should return particular md hash when input 0', function () {
        assert.equal( 'cfcd208495d565ef66e7dff9f98764da', day14.generateHash('0') );
    });

    it('first result should be 39 when input salt is abc and this is part1', function () {
        assert.equal( 39, day14.exec('abc', 1, false) );
    });

  });

  describe('Part Two', function() {

      it('generateStretchedHash function should return particular md hash when input abc', function () {
          assert.equal( 'beeac7b932b2d5e23b905c5e6aa5614d', day14.generateStretchedHash('abc', 2) );
      });

  });

});


// console.log( `day 14 part 1 - result is: ${require('./14.js').exec(input, 64, false)}` );
// console.log( `day 14 part 2 - result is: ${require('./14.js').exec(input, 64, true)}` );
