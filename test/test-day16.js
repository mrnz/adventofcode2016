var assert = require('assert'),
    day16 = require('../day16/16.js');

describe('Day 16', function() {

  describe('Part One and Two', function() {

    it('reverseString function should return 1010 when input is 0101', function () {
        assert.equal( '1010', day16.reverseString( '0101' ) );
    });

    it('generateMoreData function should return 100 when input is 1', function () {
        assert.equal( '100', day16.generateMoreData( '1' ) );
    });

    it('generateMoreData function should return 001 when input is 0', function () {
        assert.equal( '001', day16.generateMoreData( '0' ) );
    });

    it('generateMoreData function should return 11111000000 when input is 11111', function () {
        assert.equal( '11111000000', day16.generateMoreData( '11111' ) );
    });

    it('generateMoreData function should return 1111000010100101011110000 when input is 111100001010', function () {
        assert.equal( '1111000010100101011110000', day16.generateMoreData( '111100001010' ) );
    });

    it('extendStringToLength function should return 10000011110010000111 when input is 10000 and disk length is 20', function () {
        assert.equal( '10000011110010000111', day16.extendStringToLength( '10000', 20 ) );
    });

    it('createCheckSum function should return 110101 when input is 10000011110010000111', function () {
        assert.equal( '01100', day16.createCheckSum( '10000011110010000111' ) );
    });

    it('init function should return 1011001001001011011001001 when input is 00100 and disk length is 50', function () {
        assert.equal( '1011001001001011011001001', day16.init( '00100', 50 ) );
    });

  });

});