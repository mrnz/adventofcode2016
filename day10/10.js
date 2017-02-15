'use strict';
module.exports = (data,part2 = false) => {

  const lines = data.split("\n"),
        bots = [],
        values = [],
        output = [];

var bot_pattern = /^bot (\d+) gives low to ([a-z]+) (\d+) and high to ([a-z]+) (\d+)/,
    initial_patern = /^value (\d+) goes to bot (\d+)/;

for (let line of lines) {

  let match = line.match( bot_pattern );

  if ( match !== null ) {
    bots[+match[1]] = {low: [match[2], +match[3]], high: [match[4], +match[5]]};
  } else {
    match = line.match( initial_patern );
    if (values[ parseInt( match[2] ) ] === undefined ){
      values[ parseInt( match[2] ) ] = [];
    }
    values[+match[2]].push(+match[1]);
  }
}

let special_bin = -1;
let stop = false;

while (!stop) {

  stop = true;


  for (let i = 0; i < values.length; i++) {

    if (!values[i] || values[i].length < 2) continue;

    stop = false;

    values[i].sort((x, y) => {
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    });

    if (values[i].indexOf(17) !== -1 && values[i].indexOf(61) !== -1) {
      special_bin = i;
    }

    if (bots[i].low[0] !== "output") {
      if (!values[bots[i].low[1]]) values[bots[i].low[1]] = [];
      values[bots[i].low[1]].push(values[i][0]);
    } else {
      if (!output[bots[i].low[1]]) output[bots[i].low[1]] = [];
      output[bots[i].low[1]].push(values[i][0]);
    }

    if (bots[i].high[0] !== "output") {
      if (!values[bots[i].high[1]]) values[bots[i].high[1]] = [];
      values[bots[i].high[1]].push(values[i][1]);
    } else {
      if (!output[bots[i].high[1]]) output[bots[i].high[1]] = [];
      output[bots[i].high[1]].push(values[i][1]);
    }

    values[i] = [];
  }
}
var result;

if(part2===false){
  result = special_bin;
}else{
  result =  output[0][0] * output[1][0] * output[2][0];
}

return result;

};
