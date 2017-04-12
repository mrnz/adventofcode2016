var assert = require('assert'),
    day19 = require('../day19/19.js');

describe('Day 19', function() {

  describe('Part One and Two', function() {

    it('getTitleState function should return 3 when input is 5', function () {
        assert.equal( 3, day19.init(5) );
    });

    it('getTitleState function should return 5 when input is 6', function () {
        assert.equal( 5, day19.init(6) );
    });

    it('getTitleState function should return 7 when input is 7', function () {
        assert.equal( 7, day19.init(7) );
    });

    it('getTitleState function should return 1 when input is 8', function () {
        assert.equal( 1, day19.init(8) );
    });

    it('getTitleState function should return 3 when input is 9', function () {
        assert.equal( 3, day19.init(9) );
    });

    it('getTitleState function should return 5 when input is 10', function () {
        assert.equal( 5, day19.init(10) );
    });

    it('getTitleState function should return 7 when input is 11', function () {
        assert.equal( 7, day19.init(11) );
    });

    it('getTitleState function should return 9 when input is 12', function () {
        assert.equal( 9, day19.init(12) );
    });

    it('getTitleState function should return 11 when input is 13', function () {
        assert.equal( 11, day19.init(13) );
    });

    it('getTitleState function should return 13 when input is 14', function () {
        assert.equal( 13, day19.init(14) );
    });

    it('getTitleState function should return 15 when input is 15', function () {
        assert.equal( 15, day19.init(15) );
    });

    it('getTitleState function should return 1 when input is 16', function () {
        assert.equal( 1, day19.init(16) );
    });

    it('getTitleState function should return 1 when input is 32', function () {
        assert.equal( 1, day19.init(32) );
    });

    it('getTitleState function should return 1 when input is 64', function () {
        assert.equal( 1, day19.init(64) );
    });

  });
});
