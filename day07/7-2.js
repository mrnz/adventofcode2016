'use strict';

module.exports = data => {
  
  var all = 0, checkIfABA, prepareLine; 
  
  prepareLine = line => {

    var inBrackets = [],
      outsideBrackets = [];

    line = line.trim().split('[');
    line.forEach( part => {
      
      if( part.includes( ']' ) ){
      part = part.split(']');
      inBrackets.push( part[0] );
      outsideBrackets.push( part[1] );
      }else{
      outsideBrackets.push( part );
      }
      
    });

    return [ inBrackets, outsideBrackets ];

  };

  checkIfABA = ( outsideBracketData, insideBracketData ) => {

    var result = false;        
    
    outsideBracketData.forEach( str => {
      
      var patt = /(.).\1/y, 
        patterFound,
        reversedPattern, 
        i = 0,
        checkPattern = (x)=>{
          if( reversedPattern.test(x) ){
            result = true;
          }
        };
      
      while( i !== str.length ){


        patt.lastIndex = i;
        i++;
        patterFound = str.match( patt );  
        
        if( patterFound === null ) continue;

        reversedPattern = patterFound[0][1] + patterFound[0][2] + patterFound[0][1];
        
        reversedPattern = patterFound !== null ? new RegExp(reversedPattern,'g') : null;
        
        insideBracketData.forEach( checkPattern );
        
      }

    });
    
    return result;

  };  

  data.split('\n')
    .map( prepareLine )
    .forEach( x =>  checkIfABA(x[1], x[0]) && all++ );
  
  return all;  

};