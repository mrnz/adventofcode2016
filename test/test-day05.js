var assert = require('assert'),
    day5part1 = require('../day05/5-1.js'),
    day5part2 = require('../day05/5-2.js');

describe('Day 5', function() {

  describe('Part One', function() {

    it('should return 35675755 when input is abc and number of zeros is 2', function () {
      assert.equal( 35675755, day5part1( 'abc', 2 ) );
    });

    it('should return 890cbc53 when input is abc and number of zeros is 1', function () {
      assert.equal( '890cbc53', day5part1( 'abc', 1 ) );
    });    


  });

  describe('Part Two', function() {

    it('should return d7342f64 when input is abc and number of zeros is 2', function () {
      assert.equal( 'd7342f64', day5part2( 'abc', 2 ) );
    });

    it('should return 3010070f when input is abc and number of zeros is 2', function () {
      assert.equal( '3010070f', day5part2( 'abc', 1 ) );
    });

  });

});