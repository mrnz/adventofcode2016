'use strict';
module.exports = data => {
  
  var result = 0;
  data = data.split('\n');

  data.forEach( line => {
    
    var tail, sum, val;

    line = line.trim().split('-');
    tail = line[line.length-1].split('[');
    val = parseInt(tail[0]);
    sum = tail[1].substring(0,tail[1].length-1);

    line.pop();

    line = line
      .join('')
      .split('')
      .sort()
      .join('')
      .match(/([a-z])\1*/g)
      .sort( (a,b) => {
        if( b.length > a.length || b.length < a.length ){
          return b.length - a.length;
        }else{
          return a.charCodeAt() - b.charCodeAt();
        }
      })
      .slice(0,5)
      .reduce( (prev,curr) => prev+curr[0], '' );
     
    result += line === sum ? val : 0;
  
  });

  return result;

};