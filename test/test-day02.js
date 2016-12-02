var assert = require('assert'),
    day2part1 = require('../day02/2-1.js');
    // day1part2 = require('../day01/1-2.js');

describe('Day 1', function() {

  describe('Part One', function() {

    it('should return 1985 when instructions are ULL RRDDD LURDL UUUUD', function () {
      assert.equal( 1985, day2part1('ULL\nRRDDD\nLURDL\nUUUUD') );
    });

    it('should return 2565 when instructions are U D R L', function () {
      assert.equal( 2565, day2part1('U\nD\nR\nL') );
    });

  });

  // describe('Part Two', function() {
    
  //   it('should return 0 when input string is empty', function () {
  //     assert.equal( 0, day1part2('') );
  //   });

  //   it('should return 4 when input is R8, R4, R4, R8', function () {
  //     assert.equal( 4, day1part2('R8, R4, R4, R8') );
  //   });

  //   it('should return 4 when input is L8, L4, L4, L8', function () {
  //     assert.equal( 4, day1part2('L8, L4, L4, L8') );
  //   });

  // });

});