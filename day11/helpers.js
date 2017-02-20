'use strict';
module.exports = {

    prepareDate: (data)=>{

        var newData = [],
            pattern = /[a-zA-Z0-9._-]+ (?=microchip|generator)/g;

        data = data.split('\n').filter(x=>x!=='');

        newData.length = data.length;
        newData.fill([]);

        data.forEach( (row,idx) => {

          var results = row.match(pattern),
              toInject = [];

          if(results && results.length){
            results.forEach(item=>{
              if(item.includes('-')){
                item = item.split('-')[0][0].toUpperCase()+'M';
              }else{
                item = item[0].toUpperCase()+'G';
              }
              toInject.push(item);
              toInject.sort();
            });
          }
          newData[idx] = newData[idx].concat(toInject);
        });

        return newData;
    },

    deepCopy: obj => JSON.parse(JSON.stringify(obj)),

    combinations: str => {
        var fn = function(active, rest, a) {
            if (!active && !rest)
                return;
            if (!rest) {
                a.push(active);
            } else {
                fn(active + rest[0], rest.slice(1), a);
                fn(active, rest.slice(1), a);
            }
            return a;
        }
        return fn("", str, []);
    }

};