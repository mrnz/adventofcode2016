var assert = require('assert'),
    day21 = require('../day21/21.js');

describe('Day 21', function() {

    describe('Part One', function() {
        it('move function should return bca when input is abc x is 0 and y is 2', function () {
            assert.equal( 'bca', day21.funcs.move('abc',0,2) );
        });

        it('move function should return acdbe when input is abcde x is 1 and y is 4', function () {
            assert.equal( 'acdbe', day21.funcs.move('abcde',1,4) );
        });

        it('move function should return bca when input is 12345 x is 4 and y is 1', function () {
            assert.equal( '14235', day21.funcs.move('12345',4,1) );
        });

    });

    describe('Part Two', function() {
        // it('init function should return 0 when input is [1-2, 5-6, 7-9]', function () {
        //     assert.equal( 2, day21.init(['1-2', '5-6', '7-9'],true) );
        // });
    });

});
