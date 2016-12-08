'use strict';
module.exports = ( commands, sizeX, sizeY ) => {
  
  var matrix = Array(sizeX).fill( Array(sizeY).fill(0) );
  
  

  commands.split('\n').forEach( line => {
    
    line = line.trim().split(' ');

    if( line[0] === 'rect' ) {

      line = line[1].split('x');
      let X = parseInt( line[0] );
      let Y = parseInt( line[1] );
      for( let i = 0; i < Y; i++ ){
        matrix[i] = matrix[ i ].map( ( x, idx ) => idx < X ? 1 : x );
      };

    }else if (line[0] === 'rotate'){
        
      if( line[1] === 'column'){
        
        let column = parseInt( line[2].split('=')[1] );
        let shift = parseInt( line[4] );
        let temp = [];
        
        matrix.forEach( (row,idx) => temp.push( row[column] ) );
        
        temp = temp.join('');

        temp = temp.substring( temp.length-shift ) + temp.substring( 0, temp.length-shift );
        
        matrix = matrix.map( (row,idx) => {
          row[column] = parseInt(temp[idx]);
          return row;
        });

      }else if(line[1] === 'row' ){

        let row = parseInt( line[2].split('=')[1] );
        let shift = parseInt( line[4] );
        let temp = matrix[row].join('');

        temp = temp.substring( temp.length-shift ) + temp.substring( 0, temp.length-shift );
           
        matrix[row] = temp.split('').map(x=>parseInt(x));
   
      }

    }

  });
 
  return matrix.reduce((prev,curr)=>prev+curr.reduce((prev2,curr2)=>prev2+curr2,0),0);

};