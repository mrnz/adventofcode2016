var assert = require('assert'),
    day8part1 = require('../day08/8-1.js');

describe('Day 8', function() {

  describe('Part One', function() {

    it('should return 6 when input is an example from advent of code', function () {
      assert.equal( 6, day8part1( 'rect 3x2\nrotate column x=1 by 1\nrotate row y=0 by 4\nrotate column x=1 by 1',3,7) );0
    });

  });

});