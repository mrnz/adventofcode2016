var assert = require('assert'),
    day10part1 = require('../day10/10-1.js'),
    day10part2 = require('../day10/10-2.js');

describe('Day 10', function() {

  describe('Part One', function() {

    it('should return 6 when input is ADVENT', function () {
      assert.equal( 6, day10part1( 'ADVENT' ) );
    });
  
  });

  describe('Part Two', function() {
    
    it('should return 9 when input is (3x3)XYZ', function () {
      assert.equal( 9, day10part2( '(3x3)XYZ' ) );
    });    

  });

});