var assert = require('assert'),
    day13 = require('../day13/13.js'),
    testInput = 10;

describe('Day 13', function() {

  describe('Part One', function() {

    it('should return 11 when input is test input from advent of code', function () {
        assert.equal( 11, day13.execPart1(7, 4, testInput) );
    });

    it('should return 1 as first coordinat form next steps function ', function () {
        assert.equal( 1, day13.getNeWPosition([], 0, [1,1]).nextSteps()[0][0] );
    });



  });

  describe('Part Two', function() {

    it('should return 13 when input is test input from advent of code', function () {
        assert.equal( 13, day13.execPart2(7, testInput) );
    });

  });

});