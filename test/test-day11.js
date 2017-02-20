var assert = require('assert'),
    day11part1 = require('../day11/11-1.js'),
    day11part2 = require('../day11/11-2.js'),
    testInput =  require('fs').readFileSync(__dirname+'/../day11/day11-testinput.txt').toString();


console.log(testInput)

describe('Day 11', function() {

  describe('Part One', function() {

    it('should return 6 when input is ADVENT', function () {
      assert.equal( 6, day9part1( 'ADVENT' ) );
    });

  });

  describe('Part Two', function() {



  });

});
