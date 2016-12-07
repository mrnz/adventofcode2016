'use strict';

var md5 = require('md5');

module.exports = ( doorID, numberOfZeros ) => {
  
  var i = 0,
      password = Array(8).fill(),
      control = '';

  while( control.length < 8 ){

    let hash = md5( doorID + i );
    
    if( hash.substring( 0, numberOfZeros) === '0'.repeat( numberOfZeros ) ){
      
      if( hash[ numberOfZeros ] < 8 ){
  
        if( password[  parseInt( hash[ numberOfZeros ] ) ] === undefined){

          control += hash[ numberOfZeros ];
          password[  parseInt( hash[ numberOfZeros ] ) ] = hash[ numberOfZeros + 1 ];

        }

      }
      
    }

    i++;

  }
  
  return password.join('');

};