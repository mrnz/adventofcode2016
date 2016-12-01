'use strict';
module.exports = data => {
  
  if( data === '' )return 0;

  var x = 0,
      y = 0, 
      direction = 0,
      directions,
      commands = data.split(', '),
      visitedPositions = {'0x0':1},
      isResultFound = false,
      getNewDirection;

  getNewDirection = ( leftOrRight, oldDir, allDirectionsArr ) => {
    if( leftOrRight === 'R' ){
      
      return oldDir + 1 === allDirectionsArr.length ? 0 : oldDir + 1; 

    }else if ( leftOrRight === 'L' ){

      return oldDir -1 === -1 ? allDirectionsArr.length - 1 : oldDir -1;

    }
  };

  directions = [
    val=>y+=val,
    val=>x+=val,
    val=>y-=val,
    val=>x-=val,
  ];

  for ( let value of commands ){

    let label = '',
        moveLength = parseInt( value.substring(1) );

    direction = getNewDirection( value[0], direction, directions );

    for( let i = 0; i < moveLength; i++){
      
      directions[direction](1);

      label = ''+x+'x'+y;  
      
      if( visitedPositions[label] === 1 ){
        
        isResultFound = true;
        break; 

      }else{

        visitedPositions[label] = 1;

      }

    }
    
    if( isResultFound )break;

  }

  return Math.abs(x) + Math.abs(y);

};