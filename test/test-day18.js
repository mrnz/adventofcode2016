var assert = require('assert'),
    day18 = require('../day18/18.js');

describe('Day 18', function() {

  describe('Part One', function() {

    it('getTitleState function should return ^ when input is .^^', function () {
        assert.equal( '^', day18.getTitleState( '.^^' ) );
    });

    it('getTitleState function should return ^ when input is ^^.', function () {
        assert.equal( '^', day18.getTitleState( "^^." ) );
    });

    it('getTitleState function should return ^ when input is ..^', function () {
        assert.equal( '^', day18.getTitleState( '..^' ) );
    });

    it('getTitleState function should return ^ when input is ^..', function () {
        assert.equal( '^', day18.getTitleState( '^..' ) );
    });

    it('getTitleState function should return . when input is .^.', function () {
        assert.equal( '.', day18.getTitleState( '.^.' ) );
    });

    it('getTitleState function should return . when input is ^^^', function () {
        assert.equal( '.', day18.getTitleState( '^^^' ) );
    });

    it('getTitleState function should return . when input is ...', function () {
        assert.equal( '.', day18.getTitleState( '...' ) );
    });

    it('getTitleState function should return null when input is string length shorter then 3', function () {
        assert.equal( null, day18.getTitleState( '..' ) );
    });

    it('getTitleState function should return null when input is string length longer then 3', function () {
        assert.equal( null, day18.getTitleState( '..' ) );
    });

    it('getTitleState function should return null when input is undefined', function () {
        assert.equal( null, day18.getTitleState( ) );
    });

    it('getAncestors function should return 1 when input is .^. and position is 0', function () {
        assert.equal( '..^', day18.getAncestors(0, '.^.') );
    });

    it('getAncestors function should return ..^ when input is .^. and position is 2', function () {
        assert.equal( '^..', day18.getAncestors(2, '.^.') );
    });

    it('getAncestors function should return .^. when input is .^. and position is 1', function () {
        assert.equal( '.^.', day18.getAncestors(1, '.^.') );
    });

    it('getNextRow function should return ^...^ when input is ^^^^^', function () {
        assert.equal( '^...^', day18.getNextRow('^^^^^') );
    });

    it('getNextRow function should return .^.^. when input is ^...^', function () {
        assert.equal( '.^.^.', day18.getNextRow('^...^') );
    });

    it('getTrapNumber function should return 2 when input is ^^^^^..^^^^^', function () {
        assert.equal( 2, day18.getTrapNumber('^^^^^..^^^^^') );
    });

    it('getTrapNumber function should return 0 when input is .............', function () {
        assert.equal( 10, day18.getTrapNumber('..........') );
    });

    it('init function should return 38 when input is .^^.^.^^^^ and number of rows 10', function () {
        assert.equal( 38, day18.init('.^^.^.^^^^', 10) );
    });

  });

  describe('Part Two', function() {

    // it('init function should return 370 when input is ihgpwlah and part 2 param is true', function () {
    //     assert.equal( 370, day18.init( 'ihgpwlah', true ) );
    // });

  });

});
