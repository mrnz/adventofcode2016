'use strict';
module.exports = data => {

  var all = 0, checkIfABBA, prepareLine; 
  
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
    
  checkIfABBA = dataIn => {
  
    var result = false;
  
    dataIn.forEach( str => {
   
      var res = str.match(/(.)(.)\2\1/g);  
      
      if( res !== null ){ 
      	res.forEach( x => result = x[0] !== x[1] ? true : result );
      }
      
    });

    return result;

  };

  data = data.split('\n');
  
  data.map( prepareLine ).forEach( x => {
    
    var brackets = checkIfABBA(x[0]),
        outside = checkIfABBA(x[1]);
  
    if( !brackets && outside ){
      all++;
    }

  });
  
  return all;

};