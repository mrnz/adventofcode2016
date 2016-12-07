'use strict';
module.exports = ( data, part2 ) => {
  
  var memo, 
      res = '',
      sortFunc = (a,b) => {
        if( b.length > a.length || b.length < a.length ){
          return b.length - a.length;
        }else{
          return a.charCodeAt() - b.charCodeAt();
        }
      };
  
  data = data.split('\n');

  memo = Array( data[0].trim().length ).fill('');

  data.forEach( line => { 
    
    line = line.trim();

    for( let idx in line ){
      memo[idx] += line[idx];
    }

  });

  memo = memo.map( str => str.split('').sort().join('') )
    .map( x => x.match(/([a-z])\1*/g).sort( sortFunc ) );

  
  memo.forEach( x=> res += part2 ? x[x.length-1][0] : x[0][0] );
  return res;


};