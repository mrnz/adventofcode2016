var assert = require('assert'),
    day20 = require('../day20/20.js');

describe('Day 20', function() {

    describe('Part One', function() {
        it('init function should return 0 when input is [5-8, 0-2, 4-7]', function () {
            assert.equal( 3, day20.init(['5-8','0-2','4-7']) );
        });
    });

    describe('Part Two', function() {
        it('init function should return 0 when input is [1-2, 5-6]', function () {
            assert.equal( 2, day20.init(['1-2', '5-6'],true) );
        });
    });

});
