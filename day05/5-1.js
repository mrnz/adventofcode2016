'use strict';

var md5 = require('md5');

module.exports = ( doorID, numberOfZeros ) => {
  
  var i = 0,
      password = '';

  while( password.length < 8 ){

    let hash = md5( doorID + i );
    
    if( hash.substring( 0, numberOfZeros) === '0'.repeat( numberOfZeros ) ){
      password += hash[ numberOfZeros ];
    }

    i++;

  }
  
  return password;
};