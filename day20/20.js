'use strict';
module.exports = {

    sort(input) {
        return input.sort((a,b)=>a[0]-b[0]);
    },

    convert(input) {
        return input.map((item)=>{
            item = item.split('-');
            return [ parseInt(item[0]), parseInt(item[1]) ];
        });
    },

    findSolution(input) {
        var solution = 0;

        for(let i=0; i<input.length; i++){

            if(solution >= input[i][0] && solution <= input[i][1]){
                solution = input[i][1]+1;
            }

        }
        return solution;
    },

    findSolution2(input) {
        var result = 0,
            solution = [],
            temp = input[0];

        for(let i=1; i<input.length; i++){

            let thisRange = input[i];

            if( thisRange[0] <= temp[1] + 1 ){
                temp[1] = temp[1] < thisRange[1] ? thisRange[1] : temp[1];
            }else{
                solution.push( [temp[0],temp[1]] );
                temp = thisRange;
            }
            if(i===input.length-1){
                solution.push( [temp[0],temp[1]] );
                temp = [];
            }
        }

        for(let i=1; i<solution.length; i++){
            result += solution[i][0] - solution[i-1][1]-1;
        }

        return result;
    },

    init(input, part2 = false) {
        var func = part2 ? this.findSolution2 : this.findSolution;
        input = this.convert(input);
        this.sort(input);
        return func(input);
    }

};
