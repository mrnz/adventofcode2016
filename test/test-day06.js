var assert = require('assert'),
    day6 = require('../day06/6-1.js');


var ex = 'eedadn\ndrvtee\neandsr\nraavrd\natevrs\ntsrnev\nsdttsa\nrasrtv\nnssdts\nntnada\nsvetve\ntesnvt\nvntsnd\nvrdear\ndvrsen\nenarar';


describe('Day 6', function() {

  describe('Part One', function() {

    it('should return easter when input is an example from advent of code', function () {
      assert.equal( 'easter', day6( ex ) );
    });

  });

  describe('Part Two', function() {

    it('should return advent when input is an example from advent of code and part 2 is true', function () {
      assert.equal( 'advent', day6( ex, true ) );
    });

  });

});