'use strict';
module.exports = data => {

  data = data.split('\n');

  var result = '',
      positionMatrix = [ [1,2,3],[4,5,6],[7,8,9] ],
      actualPosition = {x:1,y:1},
      instructions,
      calculatePosition;

  instructions = {
    'U': () => actualPosition.y -= actualPosition.y > 0 ? 1 : 0,
    'D': () => actualPosition.y += actualPosition.y < 2 ? 1 : 0,
    'R': () => actualPosition.x += actualPosition.x < 2 ? 1 : 0,
    'L': () => actualPosition.x -= actualPosition.x > 0 ? 1 : 0,
  };

  calculatePosition = input => {

    input.split('').forEach(command => instructions[ command ]());

    result += positionMatrix[actualPosition.y][actualPosition.x];

  };

  data.forEach( calculatePosition );

  return result;

};
