'use strict';
module.exports = data => {
  
  var prepareData, bots = {}, ready = [], result = null;
  
  prepareData = dataIn => {

    var initial = [], 
        instructions = [];

    dataIn.forEach( line => {

      var match = line.match(/^value (\d+) goes to bot (\d+)/);
      
      if( match === null ){

        match = line.match(/^bot (\d+) gives low to ([a-z]+) (\d+) and high to ([a-z]+) (\d+)/);
        
        instructions[parseInt(match[1])] = {
            hi:{
              type: match[2],
              target: parseInt( match[3] ) 
            },
            lo:{
              type: match[4],
              target:  parseInt( match[5] ) 
            }            
          };
        
        
      }else{
        initial.push( {botID: parseInt(match[2]), chipID: parseInt(match[1])} );
      }

    });
    return { initial, instructions };
  };
  
  data = data.split('\n');
  
  data = prepareData( data );

  data.initial.forEach( initialInstruction => {
    if( bots[initialInstruction.botID] ){
      bots[initialInstruction.botID].push(  initialInstruction.chipID );
      ready.push(initialInstruction.botID);
    }else{
      bots[initialInstruction.botID] = [ initialInstruction.chipID ];
    }
    
  });
  
  var sortFn = (x, y) => {
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  };
 

  var moveChip = ( instruction, chipID ) => {
    
    if(instruction.type === 'bot'){


      if(bots[ instruction.target ] ){
        bots[ instruction.target ].push( chipID );
        bots[ instruction.target ].sort(sortFn)
        return true
      }else{
        bots[ instruction.target ] = [chipID];
        return false;
      }
    }else{
      if(bots[ instruction.target+'out' ] ){
        bots[ instruction.target+'out' ].push( chipID );
        return false;
      }else{
        bots[ instruction.target +'out'] = [chipID];
        return false;
      } 
    }
    


  };
  
  
  while ( ready.length ){
    
    let botID = ready[0];
    let instruction = data.instructions[botID];
    ready.shift();


    


    if( bots[ botID ].indexOf(17) !== -1 && bots[ botID ].indexOf(61) !== -1 ){
      result  = botID;
      break;
    }

    if( moveChip( instruction.lo, Math.min( bots[ botID ][0], bots[ botID ][1]) ) ){
      ready.push( instruction.lo.target );
    };

    if( moveChip( instruction.hi, Math.max( bots[ botID ][0], bots[ botID ][1] ) ) ){
      ready.push( instruction.hi.target );
    };
    
    

    ready.sort( sortFn );

    delete bots[ botID ];

  };    

  
  return result;      



// const lines = data.split("\n");

// const bots = [];
// const values = [];
// const output = [];




// var bot_pattern = /^bot (\d+) gives low to ([a-z]+) (\d+) and high to ([a-z]+) (\d+)/,
//     initial_patern = /^value (\d+) goes to bot (\d+)/;

// for (let line of lines) {

//   let match = line.match( bot_pattern );

//   if ( match !== null ) {

//     bots[+match[1]] = {low: [match[2], +match[3]], high: [match[4], +match[5]]};

//   } else {

//     match = line.match( initial_patern );
    
//     if (values[ parseInt( match[2] ) ] === undefined ){
//       values[ parseInt( match[2] ) ] = [];
//     } 
//     values[+match[2]].push(+match[1]);

//   }
// }














// let special_bin = -1;
// let stop = false;

// while (!stop) {

//   stop = true;
      

//   for (let i = 0; i < values.length; i++) {

//     if (!values[i] || values[i].length < 2) continue;
//     console.log( i )
//     stop = false;

//     values[i].sort((x, y) => {
//       if (x < y) return -1;
//       if (x > y) return 1;
//       return 0;
//     });

//     if (values[i].indexOf(17) !== -1 && values[i].indexOf(61) !== -1) {
//       special_bin = i;
//     }

//     if (bots[i].low[0] !== "output") {
//       if (!values[bots[i].low[1]]) values[bots[i].low[1]] = [];
//       values[bots[i].low[1]].push(values[i][0]);
//     } else {
//       if (!output[bots[i].low[1]]) output[bots[i].low[1]] = [];
//       output[bots[i].low[1]].push(values[i][0]);
//     }

//     if (bots[i].high[0] !== "output") {
//       if (!values[bots[i].high[1]]) values[bots[i].high[1]] = [];
//       values[bots[i].high[1]].push(values[i][1]);
//     } else {
//       if (!output[bots[i].high[1]]) output[bots[i].high[1]] = [];
//       output[bots[i].high[1]].push(values[i][1]);
//     }

//     values[i] = [];
//   }
// }

// console.log("Part One: " + special_bin);
//  console.log("Part Two: " + output[0][0] * output[1][0] * output[2][0]);     



};

