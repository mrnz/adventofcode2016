var assert = require('assert'),
    day3part1 = require('../day03/3-1.js'),
    day3part2 = require('../day03/3-2.js');

describe('Day 3', function() {

  describe('Part One', function() {

    it('should return 0 when triangle is 5 10 25', function () {
      assert.equal( 0, day3part1( ['5 10 25']) );
    });

    it('should return 1 when triangle is 5 10 10', function () {
      assert.equal( 1, day3part1( ['5 10 10'] ) );
    });

  });

  describe('Part Two', function() {
    
    var arr = ['101 301 501', '102 302 502', '103 303 503', '201 401 601', '202 402 602', '203 403 603'];

    it('should return 6 when input is an example from adventofcode.com', function () {
      assert.equal( 6, day3part2(arr) );
    });
    
  });

});