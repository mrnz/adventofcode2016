var assert = require('assert'),
    day1part1 = require('../day01/1-1.js'),
    day1part2 = require('../day01/1-2.js');

describe('Day 1', function() {

  describe('Part One', function() {

    it('should return 0 when input string is empty', function () {
      assert.equal( 0, day1part1('') );
    });

    it('should return 5 when input is R2, L3', function () {
      assert.equal( 5,  day1part1('R2, L3') );
    });

    it('should return 2 when input is R2, R2, R2', function () {
      assert.equal( 2, day1part1('R2, R2, R2') );
    });

    it('should return 12 when input is R5, L5, R5, R3', function () {
      assert.equal( 12, day1part1('R5, L5, R5, R3') );
    });            

  });

  describe('Part Two', function() {
    
    it('should return 0 when input string is empty', function () {
      assert.equal( 0, day1part2('') );
    });

    it('should return 4 when input is R8, R4, R4, R8', function () {
      assert.equal( 4, day1part2('R8, R4, R4, R8') );
    });

    it('should return 4 when input is L8, L4, L4, L8', function () {
      assert.equal( 4, day1part2('L8, L4, L4, L8') );
    });

  });

});