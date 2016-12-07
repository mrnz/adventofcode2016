var assert = require('assert'),
    day4part1 = require('../day04/4-1.js'),
    day4part2 = require('../day04/4-2.js');

describe('Day 4', function() {

  describe('Part One', function() {

    it('should return 0 when input is jsehsyafy-vqw-ljsafafy-866[nymla]', function () {
      assert.equal( 0, day4part1( 'jsehsyafy-vqw-ljsafafy-866[nymla]' ) );
    });

    it('should return 123 when input is aaaaa-bbb-z-y-x-123[abxyz]', function () {
      assert.equal( 123, day4part1( 'aaaaa-bbb-z-y-x-123[abxyz]' ) );
    });
    
    it('should return 404 when input is not-a-real-room-404[oarel]', function () {
      assert.equal( 404, day4part1( 'not-a-real-room-404[oarel]' ) );
    });
    
    it('should return 0 when input is totally-real-room-200[decoy]', function () {
      assert.equal( 0, day4part1( 'totally-real-room-200[decoy]' ) );
    });        

  });

  describe('Part Two', function() {
    
    it('should return 561 when input is aczupnetwp-dnlgpyrpc-sfye-dstaatyr-561[patyc]', function () {
      assert.equal( 561, day4part2('aczupnetwp-dnlgpyrpc-sfye-dstaatyr-561[patyc]', 'scavenger') );
    });

    it('should return null when input is aczupnetwp-dnlgpyrpc-sfye-dstaatyr-561[patyc]', function () {
      assert.equal( null, day4part2('aczupnetwp-dnlgpyrpc-sfye-dstaatyr-561[patyc]', 'scavenger1') );
    });
    
  });

});