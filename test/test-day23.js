var assert = require('assert'),
    day23 = require('../day23/23.js'),
    testInput = 'cpy 41 a\ninc a\ninc a\ndec a\njnz a 2\ndec a';

describe('Day 23', function() {

  describe('Part One', function() {

    it('should return array length 2 when input is "aaa\\naaa"', function () {
        assert.equal( 2, day23.prepareDate('aaa\naaa').length );
    });

    it('should return {a:0,b:0,c:0,d:0} when getMemo is called', function () {
        var toTest = day23.getMemo( 'abc', 1 );
        assert.equal( 0, toTest.a);
        assert.equal( 0, toTest.b);
        assert.equal( 0, toTest.c);
        assert.equal( 0, toTest.d);
    });

    it('should increases index after cpy instruction', function () {
        assert.equal(1 , day23.interpretInstruction('cpy 1 a', {a:0},0 )[1] );
    });

    it('should increases index after inc instruction', function () {
        assert.equal(1 , day23.interpretInstruction('inc a', {a:0},0 )[1] );
    });

    it('should increases index after dec instruction', function () {
        assert.equal(1 , day23.interpretInstruction('dec a', {a:0},0 )[1] );
    });

    it('should increases index after jnz instruction when second arg is 0', function () {
        assert.equal(1 , day23.interpretInstruction('jnz a a', {a:0},0 )[1] );
    });

    it('should increases index after jnz instruction when second arg is a which is set to 0', function () {
        assert.equal(1 , day23.interpretInstruction('jnz 0 a', {a:0},0 )[1] );
    });

    it('should a equals 2 when instruction cpy and initial a equals 0 and value to cpy is 2', function () {
        assert.equal( 2 , day23.interpretInstruction('cpy 2 a', {a:0},0 )[0].a );
    });

    it('should a equals 3 when instruction cpy and initial a equals 0 and value to cpy is b set to 3', function () {
        assert.equal( 3 , day23.interpretInstruction('cpy b a', {a:0, b:3},0 )[0].a );
    });

    it('should a equals 1 when instruction inc and initial a equals 0', function () {
        assert.equal( 1 , day23.interpretInstruction('inc a', {a:0},0 )[0].a );
    });

    it('should a equals -1 when instruction dec and initial a equals 0', function () {
        assert.equal( -1 , day23.interpretInstruction('dec a', {a:0},0 )[0].a );
    });

    it('should increases by 2 index after jnz instruction when second arg is not 0', function () {
        assert.equal(2 , day23.interpretInstruction('jnz a 2', {a:1},0 )[1] );
    });

    it('should increases by 42 when input is test input', function () {
        assert.equal(42 , day23.exec(testInput,{},'a') );
    });

    it('should throw error when command is unrecognized', function () {
        assert.throws(()=>{ throw day23.interpretInstruction('xxx a', {a:0},0 )},  /command not found/);
    });


  });

  describe('Part Two', function() {

    it('should increases by 42 when input is test input and initial value for a is 1', function () {
        assert.equal(42 , day23.exec(testInput,{a:1},'a') );
    });

  });

});
