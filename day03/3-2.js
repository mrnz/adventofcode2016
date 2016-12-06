'use strict';
module.exports = data => {
  
  var result = 0,
      sortNumber = (a,b) => {
        return a - b;
      },
      memo = [[],[],[]];

  data.forEach( (line,idx) => {

    line = line.match(/[0-9]+/g).map( val => parseInt(val) );
    
    for( let i = 0; i<3; i++ ){
      memo[i].push(line[i]);
    }
    
    if( memo[0].length === 3 ){

      memo.forEach( arr => {

        arr.sort(sortNumber);

        if( arr[0] + arr[1] > arr[2] ){
          result++;
        }
        
      });
      
      memo = [[],[],[]];

    }

  });

  return result;

};