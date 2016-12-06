'use strict';
module.exports = data => {
  
  var result = 0,
      sortNumber = (a,b) => {
        return a - b;
      };

  data = data.map( line => {

    line = line.match(/[0-9]+/g).map( val => parseInt(val) ).sort(sortNumber);
    
    if( line[0] + line[1] > line[2] ){
      result++;
    }

  });

  return result;

};