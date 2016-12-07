var assert = require('assert'),
    day7part1 = require('../day07/7-1.js'),
    day7part2 = require('../day07/7-2.js');

describe('Day 7', function() {

  describe('Part One', function() {

    it('should return 1 when input is abba[mnop]qrst', function () {
      assert.equal( 1, day7part1( 'abba[mnop]qrst' ) );
    });
  
    it('should return 0 when input is abcd[bddb]xyyx', function () {
      assert.equal( 0, day7part1( 'abcd[bddb]xyyx' ) );
    });
  
    it('should return 0 when input is aaaa[qwer]tyui', function () {
      assert.equal( 0, day7part1( 'aaaa[qwer]tyui' ) );
    });        
  
   it('should return 1 when input is ioxxoj[asdfgh]zxcvbn', function () {
      assert.equal( 1, day7part1( 'ioxxoj[asdfgh]zxcvbn' ) );
    });            

  });

  describe('Part Two', function() {

    it('should return 1 when input is aba[bab]xyz', function () {
      assert.equal( 1, day7part2( 'aba[bab]xyz' ) );
    });
  
    it('should return 0 when input is xyx[xyx]xyx', function () {
      assert.equal( 0, day7part2( 'xyx[xyx]xyx' ) );
    });
  
    it('should return 0 when input is aaa[kek]eke', function () {
      assert.equal( 1, day7part2( 'aaa[kek]eke' ) );
    });        
  
    it('should return 1 when input is zazbz[bzb]cdb', function () {
      assert.equal( 1, day7part2( 'zazbz[bzb]cdb' ) );
    });   

    it('should return 1 when input is very long', function () {
      assert.equal( 1, day7part2( 'xdabasqxnovprgovwzkus[fmadbfsbqwbabzzrzrgdg]aeqornszgvbizdm' ) );
    });   

  });

});