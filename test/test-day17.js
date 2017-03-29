var assert = require('assert'),
    day17 = require('../day17/17.js');

describe('Day 17', function() {

  describe('Part One', function() {

    it('init function should return DDRRRD when input is ihgpwlah', function () {
        assert.equal( 'DDRRRD', day17.init( 'ihgpwlah' ) );
    });

    it('init function should return DDUDRLRRUDRD when input is kglvqrro', function () {
        assert.equal( 'DDUDRLRRUDRD', day17.init( 'kglvqrro' ) );
    });

    it('init function should return DDRRRD when input is ulqzkmiv', function () {
        assert.equal( 'DRURDRUDDLLDLUURRDULRLDUUDDDRR', day17.init( 'ulqzkmiv' ) );
    });

  });

  describe('Part Two', function() {

    it('init function should return 370 when input is ihgpwlah and part 2 param is true', function () {
        assert.equal( 370, day17.init( 'ihgpwlah', true ) );
    });
    // 
    // it('init function should return DDUDRLRRUDRD when input is kglvqrro and part 2 param is true', function () {
    //     assert.equal( 492, day17.init( 'kglvqrro', true ) );
    // });
    //
    // it('init function should return 830 when input is ulqzkmiv and part 2 param is true', function () {
    //     assert.equal( 830, day17.init( 'ulqzkmiv', true ) );
    // });

  });

});