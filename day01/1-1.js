'use strict';
module.exports = data => {
  
  if( data === '' )return 0;

  var x = 0,
      y = 0, 
      direction = 0,
      directions,
      commands = data.split(', ');

  directions = [
    val=>y+=val,
    val=>x+=val,
    val=>y-=val,
    val=>x-=val,
  ];

  commands.forEach( value => {

    var turnDirection = value[0],
        moveLength = parseInt( value.substring(1) );

    if( turnDirection === 'R' ){
      
      direction++;
      direction = direction === directions.length ? 0 : direction; 

    }else if ( turnDirection === 'L' ){
      direction--;
      direction = direction === -1 ? directions.length - 1 : direction;
    }

    directions[direction](moveLength)
    
  });

  return Math.abs(x) + Math.abs(y);

};