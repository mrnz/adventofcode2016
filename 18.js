'use strict';
module.exports = {

    getTitleState(input) {
        if(!!!input || (input.length > 3 || input.length < 3) )return null;
        return input === '..^' || input === '^..' || input === '.^^' || input === '^^.' ? '^' : '.';

    },

    getAncestors(position, prevRow) {
        var ancestors = "";
        for(let i = -1; i < 2; i++){
            ancestors += prevRow[position+i] || '.';
        }
        return ancestors;
    },

    getNextRow(prevRow) {
        return prevRow.split('').map( (title, idx)=>{
            return this.getTitleState(this.getAncestors(idx,prevRow));
        }).join('');
    },

    getTrapNumber(input) {
        return input.split('').reduce((prev,curr)=>prev+(curr === '^' ? 0 : 1),0)
    },

    init(input, rows) {
        var result = this.getTrapNumber(input);

        for(let i = 0; i<rows-1; i++){

            let temp = this.getNextRow(input);
            result += this.getTrapNumber(temp);
            input = temp;

        }
        return result;
    }
};
