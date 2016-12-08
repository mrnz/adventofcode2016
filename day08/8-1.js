'use strict';
module.exports = ( commands, sizeX, sizeY ) => {
  
  var rect,
      matrix,
      rotateCol,
      rotateRow;

  matrix = Array(sizeX).fill( Array(sizeY).fill(0) );
  
  rect = ( X, Y ) => {
    var calcFunc = ( x, idx ) => idx < parseInt(X) ? 1 : x;
    for( let i = 0; i < parseInt(Y); i++ ){
      matrix[i] = matrix[ i ].map( calcFunc );
    }
  };

  rotateCol = ( column, shift ) => {
    
    var temp = [];
    
    matrix.forEach( ( row,idx ) => temp.push( row[ column ] ) );
    
    temp = temp.join('');
    temp = temp.substring( temp.length-shift ) + temp.substring( 0, temp.length-shift );
    
    matrix = matrix.map( (row,idx) => {
      row[column] = parseInt(temp[idx]);
      return row;
    });

  };

  rotateRow = ( row, shift ) => {
    
    var temp = matrix[ row ].join( '' );

    temp = temp.substring( temp.length-shift ) + temp.substring( 0, temp.length-shift );
       
    matrix[ row ] = temp.split('').map( x => parseInt( x ) );

  };  

  commands.split('\n').forEach( line => {
    
    line = line.trim().split(' ');

    if( line[0] === 'rect' ) {

      line = line[1].split('x');
      rect( line[0], line[1] );

    }else if (line[0] === 'rotate'){
        
      if( line[1] === 'column'){
        
        let column = parseInt( line[2].split('=')[1] );
        let shift = parseInt( line[4] );
        rotateCol( column, shift );

      }else if(line[1] === 'row' ){

        let row = parseInt( line[2].split('=')[1] );
        let shift = parseInt( line[4] );
        rotateRow( row, shift );
   
      }

    }

  });
 
  return matrix.reduce((prev,curr)=>prev+curr.reduce((prev2,curr2)=>prev2+curr2,0),0);

};