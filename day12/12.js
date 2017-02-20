'use strict';
var helpers = module.exports = {

    prepareDate(dataIn) {
        return dataIn.split('\n');
    },

    interpretInstruction(instruction, memoObject, idx) {
        var split = instruction.split(' ');
        switch (split[0]) {
          case 'cpy':
            memoObject[split[2]] = isNaN(parseInt(split[1])) ? memoObject[split[1]] : parseInt(split[1]);
            idx++;
            break;
          case 'inc':
            memoObject[split[1]] += 1;
            idx++;
            break;
          case 'dec':
            memoObject[split[1]] -= 1;
            idx++;
            break;
          case 'jnz':
            if(parseInt(split[1]) === 0 || memoObject[split[1]] === 0){
                idx++;
            }else{
                idx = idx + parseInt(split[2]);
            }
            break;
          default:
            throw new Error('command not found');
        }

        return [memoObject,idx];
    },

    getMemo() {
        return {a:0,b:0,c:0,d:0};
    },

    exec( data, setup = {}, targetValue = 'a' ) {

        var idx = 0,
            instructions = this.prepareDate(data),
            memo = Object.assign(this.getMemo(),setup);

        while(idx <= instructions.length-1){
            [memo, idx] = this.interpretInstruction(instructions[idx], memo, idx);
        }

        return memo[targetValue];

    }

};