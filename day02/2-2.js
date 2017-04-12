'use strict';
module.exports = data => {

  var result = '',
      actualPosition = {x:0,y:2},
      instructions,
      positionMatrix;

  positionMatrix = [  [false,false,1,false,false],
                      [false,2,3,4,false],
                      [5,6,7,8,9],
                      [false,'A','B','C',false],
                      [false,false,'D',false,false]
                  ];

  instructions = {
    'U': () =>{
      if( positionMatrix[actualPosition.y - 1] && positionMatrix[actualPosition.y - 1][actualPosition.x] ){
        --actualPosition.y;
      }
    },
    'D': () => {
      if( positionMatrix[actualPosition.y + 1] && positionMatrix[actualPosition.y + 1][actualPosition.x] ){
        ++actualPosition.y;
      }
    },
    'R': () => {
      if( positionMatrix[actualPosition.y][actualPosition.x + 1] ){
        ++actualPosition.x;
      }
    },
    'L': () => {
      if( positionMatrix[actualPosition.y][actualPosition.x - 1] ){
        --actualPosition.x;
      }
    }
  };

  data.split('\n').forEach( input => {

    input.split('').forEach(command => instructions[ command ]());

    result += positionMatrix[actualPosition.y][actualPosition.x];

  });

  return result;

};
