var assert = require('assert'),
    day21 = require('../day21/21.js'),
    input = require('fs').readFileSync(__dirname+'/../day21/day21-input.txt').toString().split('\n'),
    input2 = require('fs').readFileSync(__dirname+'/../day21/day21-input.txt').toString().split('\n');

describe('Day 21', function() {

    describe('Part One', function() {

        it('move function should return bca when input is bdeac x is 3 and y is 0', function () {
            assert.equal( 'abdec', day21.funcs.move( ('bdeac').split(''),3,0).join('') );
        });

        it('move function should return acdbe when input is bcdea x is 1 and y is 4', function () {
            assert.equal( 'bdeac', day21.funcs.move(('bcdea').split(''),1,4).join('') );
        });

        it('move function should return bca when input is 12345 x is 4 and y is 1', function () {
            assert.equal( '15234', day21.funcs.move(('12345').split(''),4,1).join('') );
        });

        it('swap position function should return bca when input is abcde x is 4 and y is 1', function () {
            assert.equal( 'ebcda', day21.funcs.swapPosition(('abcde').split(''),4,0).join('') );
        });

        it('swap letter function should return bca when input is abcde x is 4 and y is 1', function () {
            assert.equal( 'edcba', day21.funcs.swapLetter(('ebcda').split(''),'d','b').join('') );
        });

        it('reverse position function should return abcde when input is edcba start is 0 and end is 4', function () {
            assert.equal( 'abcde', day21.funcs.reverse(('edcba').split(''),0,4).join('') );
        });

        it('reverse position function should return abcde when input is abcde start is 1 and end is 3', function () {
            assert.equal( 'adcbe', day21.funcs.reverse(('abcde').split(''),1,3).join('') );
        });

        it('rotate function should return dabc when input is abcd, drection is right and steps are 1', function () {
            assert.equal( 'dabc', day21.funcs.rotate(('abcd').split(''),'right',1).join('') );
        });

        it('rotate function should return abcde when input is abcd, drection is left and steps are 1', function () {
            assert.equal( 'bcda', day21.funcs.rotate(('abcd').split(''),'left',1).join('') );
        });

        it('rotate function should return abcde when input is cdab, drection is left and steps are 2', function () {
            assert.equal( 'cdab', day21.funcs.rotate(('abcd').split(''),'left',2).join('') );
        });

        it('rotate based on position function should return abcde when input is cdab, drection is left and steps are 2', function () {
            assert.equal( 'decab', day21.funcs.rotateBasedOnPosition(('ecabd').split(''), 'd').join('') );
        });

        it('init function should return dbfgaehc when input is abcdefgh', function () {
            assert.equal( 'dbfgaehc', day21.init(input, 'abcdefgh') );
        });

    });

    describe('Part Two', function() {

        it('rotate based on position inversed function should return bdeca when input is decab and letter is d', function () {
            assert.equal( 'bdeca', day21.funcs.rotateBasedOnPositionInvers(('decab').split(''), 'd').join('') );
        });

        it('init2 function should return aghfcdeb when input is fbgdceah', function () {
            assert.equal( 'aghfcdeb', day21.init2(input2, 'fbgdceah') );
        });

    });

});
