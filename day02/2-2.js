'use strict';
module.exports = data => {
  
  data = data.split('\n');
  
  var result = '',
      actualPosition = {x:0,y:2},
      instructions,
      positionMatrix,
      calculatePosition;
  
  positionMatrix = [  [undefined,undefined,1,undefined,undefined],
                      [undefined,2,3,4,undefined],
                      [5,6,7,8,9],
                      [undefined,'A','B','C',undefined],
                      [undefined,undefined,'D',undefined,undefined]
                  ];

  instructions = {
    'U': () =>{ 
      if( positionMatrix[actualPosition.y - 1] !== undefined && positionMatrix[actualPosition.y - 1][actualPosition.x] !== undefined ){
        --actualPosition.y;
      }
    },
    'D': () => { 
      if( positionMatrix[actualPosition.y + 1] !== undefined && positionMatrix[actualPosition.y + 1][actualPosition.x] !== undefined ){
        ++actualPosition.y;
      }
    },
    'R': () => { 
      if( positionMatrix[actualPosition.y][actualPosition.x + 1] !== undefined ){
        ++actualPosition.x;
      }
    },
    'L': () => { 
      // actualPosition.x += actualPosition.x < 2 ? 1 : 0,
      if( positionMatrix[actualPosition.y][actualPosition.x - 1] !== undefined ){
        --actualPosition.x;
      }
    }
  };

  calculatePosition = dataIn => {

    var commandArr = dataIn.match(/([A-Z])\1{0,}/g);

    commandArr.forEach(command => {

      var steps = command.length,
          func = instructions[ command[0] ]; 

      for( let i = 0; i < steps; i++ ){
        func();
      }

    });

    result += positionMatrix[actualPosition.y][actualPosition.x];

  };

  data.forEach( calculatePosition );

  return result;

};