'use strict';
module.exports = {

    funcs: {
        move(arr, from, to ){
            var letterToMove = arr[from];
            arr.splice(from, 1);
            arr.splice(to, 0, letterToMove);
            return arr;
        },

        swapLetter(arr, l1, l2) {
            return arr.map(val=>{
                if(val===l1)return l2;
                if(val===l2)return l1;
                return val;
            });
        },

        swapPosition(arr, init, target) {
            return arr.map((val,idx)=>{
                if(idx===parseInt(init))return arr[parseInt(target)];
                if(idx===parseInt(target))return arr[parseInt(init)];
                return val;
            });
        },

        reverse(string, start, end) {
            return string.slice(0,start).concat( string.slice(start,end+1).reverse() ).concat( string.slice(end+1) );
        },

        rotate(arr, direction, steps) {
            var left  = arr => arr.push(arr.shift()),
                right = arr => arr.unshift(arr.pop());

            while(steps--){
                direction === 'right' ? right(arr) : left(arr);
            }
            return arr;
        },

        rotateBasedOnPosition(arr, letter) {
            var idx = arr.indexOf(letter);
            idx = idx > 3 ? idx + 2 : idx + 1;

            while(idx--){
                arr.unshift(arr.pop());
            }
            return arr;
        },

        rotateBasedOnPositionInvers (string, letter) {
            var idx = string.indexOf(letter),
                inverseIndex = [9, 1, 6, 2, 7, 3, 8, 4][idx];

            while(inverseIndex--){
                string.push(string.shift());
            }
            return string;
        }

    },

    readOperations(match, part2 = false) {

        switch (match[0]) {
            case 'move':
                return part2 ?  [this.funcs.move, parseInt(match[5]), parseInt(match[2])] : [this.funcs.move, parseInt(match[2]), parseInt(match[5])];
            case 'swap':
                let func = match[1] === 'position' ? this.funcs.swapPosition : this.funcs.swapLetter;
                return [func, match[2], match[5]];
            case 'rotate':
                let result = [];
                if( match[1] === 'based' ) {
                    result[0] = part2 ? this.funcs.rotateBasedOnPositionInvers : this.funcs.rotateBasedOnPosition;
                    result[1] = match[6]
                }else{
                    result[0] = this.funcs.rotate;
                    result[1] = match[1];
                    if(part2){
                        result[1] = match[1] === 'right' ? 'left' : 'right';
                    }
                    result[2] = match[2];
                }
                return result;
            case 'reverse':
                return [this.funcs.reverse, parseInt(match[2]), parseInt(match[4])];
        }
    },

    init(input, string) {
        string = string.split('');
        while(input.length ){
            var command = this.readOperations(input[0].match(/\w+\b/g));
            string = command[0](string,command[1],command[2]);
            input.shift();
        }
        return string.join('');
    },

    init2(input, string) {
        string = string.split('');
        while(input.length ){
            var command = this.readOperations(input[input.length-1].match(/\w+\b/g), true);
            string = command[0](string,command[1],command[2]);
            input.pop();
        }
        return string.join('');
    }
};