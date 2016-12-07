'use strict';
module.exports = ( data, phrase ) => {
  
  var result = null,
      cyph = '',
      alph = 'abcdefghijklmnopqrstuvwxyz';

  data = data.split('\n');

  data.forEach( line => {

    var tail, 
        sum, 
        val, 
        shifts, 
        res = '';
    
    line = line.split('-');

    tail = line[line.length-1].split('[');
    
    val = parseInt(tail[0]);
    sum = tail[1].substring(0,tail[1].length-2); 
    
    line.pop();
    
    line = line.join('-');
    
    shifts = alph.length - val % alph.length;  
    cyph = alph.substring(shifts,alph.length) + alph.substring(0,shifts);
    
    for( var l of line ){
      if( l === '-' ){
        res += ' ';
      }else{
        res += alph[ cyph.indexOf(l) ];
      }
    }

    if( res.includes(phrase) ) result = val;

  });

  return result;
};