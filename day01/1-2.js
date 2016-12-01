'use strict';
module.exports = data => {
  
  if( data === '' )return 0;

  var x = 0,
      y = 0, 
      direction = 0,
      directions,
      commands = data.split(', '),
      visitedPositions = {'0x0':1},
      result = false;

  directions = [
    val=>y+=val,
    val=>x+=val,
    val=>y-=val,
    val=>x-=val,
  ];

  for ( let value of commands ){

    let turnDirection = value[0],
        moveLength = parseInt( value.substring(1) ),
        label = '';

    if( turnDirection === 'R' ){
      
      direction++;
      direction = direction === directions.length ? 0 : direction; 

    }else if ( turnDirection === 'L' ){

      direction--;
      direction = direction === -1 ? directions.length - 1 : direction;

    }
    
    for( let i = 0; i<moveLength; i++){
      
      directions[direction](1);
      label = ''+x+'x'+y;  
      
      if( visitedPositions[label] === 1 ){
        
        result = true;
        break; 

      }else{

        visitedPositions[label] = 1;

      }

    }
    
    if( result )break;

  }

  return Math.abs(x) + Math.abs(y);

};