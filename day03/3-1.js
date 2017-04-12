'use strict';
module.exports = data => {

  var result = 0;

  data.forEach( line => {

    line = line.match(/[0-9]+/g).map( val => parseInt(val) ).sort((a,b) => a - b);

    if( line[0] + line[1] > line[2] ){
      result++;
    }

  });

  return result;

};
