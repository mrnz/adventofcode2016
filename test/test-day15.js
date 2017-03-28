var assert = require('assert'),
    day15 = require('../day15/15.js');

describe('Day 15', function() {

  describe('Part One and Two', function() {

    it('parseInput function should return 1 as "disk_nr" when input is "A 1 B 20 C 300 D 4000"', function () {
        assert.equal( 1, day15.parseInput( 'A 1 B 20 C 300 D 4000' )[0].disk_nr );
    });

    it('parseInput function should return 20 as "disk_nr" when input is "A 1 B 20 C 300 D 4000"', function () {
        assert.equal( 20, day15.parseInput( 'A 1 B 20 C 300 D 4000' )[0].positions );
    });

    it('parseInput function should return 4000 as "disk_nr" when input is "A 1 B 20 C 300 D 4000"', function () {
        assert.equal( 4000, day15.parseInput( 'A 1 B 20 C 300 D 4000' )[0].actual_position );
    });

    it('parseInput function should return 15 when input is "{ disk_nr: 1, positions: 17, actual_position: 15 }" at time 0', function () {
        assert.equal( 15, day15.calcAvailable( { disk_nr: 1, positions: 17, actual_position: 15 }, 0 ) );
    });

    it('parseInput function should return 145 when input is "{ disk_nr: 148, positions: 170, actual_position: 81 }" at time 40037', function () {
        assert.equal( 145, day15.calcAvailable( { disk_nr: 148, positions: 170, actual_position: 81 }, 40037 ) );
    });

    it('init function should return 3 when input is "Disc #6 has 5 positions; at time=0, it is at position 1"', function () {
        assert.equal( 3, day15.init( "Disc #1 has 5 positions; at time=0, it is at position 1" ) );
    });

  });

});