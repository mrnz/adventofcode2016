var assert = require('assert'),
    day14 = require('../day14/14.js'),
    testInput = 10;

describe('Day 13', function() {

  describe('Part One', function() {

    it('generateHash function should return particular md hash when input 0', function () {
        assert.equal( 'cfcd208495d565ef66e7dff9f98764da', day14.generateHash('0') );
    });

    it('checkIfContains3inRow should return a when input is "aaa" ', function () {
        assert.equal( 'a', day14.checkIfContains3inRow('aaa')[1] );
    });

    it('checkIfContains3inRow should return a when input is "d312sadsa232aaa321ds" ', function () {
        assert.equal( 'a', day14.checkIfContains3inRow('d312sadsa232aaa321ds')[1] );
    });

    it('checkIfContains3inRow should return a when input is "d312sadsa232aaaaaaaa321ds" ', function () {
        assert.equal( 'a', day14.checkIfContains3inRow('d312sadsa232aaaaaaaa321ds')[1] );
    });

    it('checkIfContains3inRow should return null when input is "2dsja98ujau1j;3our31" ', function () {
        assert.equal( null, day14.checkIfContains3inRow('2dsja98ujau1j;3our31') );
    });

    it('checkIfContains5inRow should return true when input is "dsaada77777dsadsad" and key is "77777"', function () {
        assert.equal( true, day14.checkIfContains5inRow('dsaada77777dsadsad', '77777') );
    });

    it('checkIfContains5inRow should return true when input is "dsaadaaaaaadsadsad" and key is "aaaaa"', function () {
        assert.equal( true, day14.checkIfContains5inRow('dsaadaaaaaadsadsad', 'aaaaa') );
    });

    it('checkIfContains5inRow should return true when input is "aaa" and key is "aaaaa"', function () {
        assert.equal( false, day14.checkIfContains5inRow('aaa', 'aaaaa') );
    });

    it('checkIfContains5inRow should return true when input is "2dsjadass8ujau1j" and key is "aaaaa"', function () {
        assert.equal( false, day14.checkIfContains5inRow('aaa', 'aaaaa') );
    });

    it('checkIfKeyIsValid should return true when key is 18 and salt is "abc"', function () {
        assert.equal( false, day14.checkIfKeyIsValid( 18, 'abc' ));
    });

    it('checkIfKeyIsValid should return true when key is 39 and salt is "abc"', function () {
        assert.equal( true, day14.checkIfKeyIsValid( 39, 'abc' ));
    });

    it('checkIfKeyIsValid should return false when key is 39 and salt is "abcd"', function () {
        assert.equal( false, day14.checkIfKeyIsValid( 39, 'abcd' ));
    });

    it('exec should return 39 when salt is "abc" and key is 1', function () {
        assert.equal( 39, day14.exec( 'abc', 1 ));
    });

    it('exec should return 39 when salt is "abc" and key is 2', function () {
        assert.equal( 92, day14.exec( 'abc', 2 ));
    });

  });

  describe('Part Two', function() {

    // it('should return 13 when input is test input from advent of code', function () {
    //     assert.equal( 13, day13.execPart2(7, testInput) );
    // });

  });

});