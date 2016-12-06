var assert = require('assert'),
    day2part1 = require('../day02/2-1.js'),
    day2part2 = require('../day02/2-2.js');

describe('Day 1', function() {

  describe('Part One', function() {

    it('should return 1985 when instructions are ULL RRDDD LURDL UUUUD', function () {
      assert.equal( 1985, day2part1('ULL\nRRDDD\nLURDL\nUUUUD') );
    });

    it('should return 2565 when instructions are U D R L', function () {
      assert.equal( 2565, day2part1('U\nD\nR\nL') );
    });

  });

  describe('Part Two', function() {
    
    it('should return 5DB3 when instructions are ULL RRDDD LURDL UUUUD', function () {
      assert.equal( '5DB3', day2part2('ULL\nRRDDD\nLURDL\nUUUUD') );
    });

    it('should return 9555 when instructions are RRRRRR LLLLLLLLLL UUUUUUUUUU DDDDDDDDDD', function () {
      assert.equal( '9555', day2part2('RRRRRR\nLLLLLLLLLL\nUUUUUUUUUU\nDDDDDDDDDD') );
    });
    
  });

});