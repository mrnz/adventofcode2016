var assert = require('assert'),
    day9part1 = require('../day09/9-1.js'),
    day9part2 = require('../day09/9-2.js');

describe('Day 9', function() {

  describe('Part One', function() {

    it('should return 6 when input is ADVENT', function () {
      assert.equal( 6, day9part1( 'ADVENT' ) );
    });
    
    it('should return 7 when input is A(1x5)BC', function () {
      assert.equal( 7, day9part1( 'A(1x5)BC' ) );
    });    
    
    it('should return 9 when input is (3x3)XYZ', function () {
      assert.equal( 9, day9part1( '(3x3)XYZ' ) );
    });    
    
    it('should return 11 when input is A(2x2)BCD(2x2)EFG', function () {
      assert.equal( 11, day9part1( 'A(2x2)BCD(2x2)EFG' ) );
    });    
    
    it('should return 6 when input is (6x1)(1x3)A', function () {
      assert.equal( 6, day9part1( '(6x1)(1x3)A' ) );
    });     
  
    it('should return 18 when input is X(8x2)(3x3)ABCY', function () {
      assert.equal( 18, day9part1( 'X(8x2)(3x3)ABCY' ) );
    });         
  
  });

  describe('Part Two', function() {
    
    it('should return 9 when input is (3x3)XYZ', function () {
      assert.equal( 9, day9part2( '(3x3)XYZ' ) );
    });    

    it('should return 20 when input is X(8x2)(3x3)ABCY', function () {
      assert.equal( 20, day9part2( 'X(8x2)(3x3)ABCY' ) );
    });    

    it('should return 241920 when input is (27x12)(20x12)(13x14)(7x10)(1x12)A', function () {
      assert.equal( 241920, day9part2( '(27x12)(20x12)(13x14)(7x10)(1x12)A' ) );
    });    
  
    it('should return 445 when input is (25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN', function () {
      assert.equal( 445, day9part2( '(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN' ) );
    });    

  });

});