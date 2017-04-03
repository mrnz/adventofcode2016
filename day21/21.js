'use strict';
module.exports = {

    funcs: {
        move(string, init, target ){
            string = string.split('');
            var letterToMove = string.splice(init,1);

            string.splice(target-1,0,letterToMove[0]);
            return string.join('');

        }
    },

    readOperations(input) {
        var result = false;
        var match = input.match(/\w+\b/g);
        console.log(match);
        switch (match[0]) {
            case 'move':

                break;
            case 'swap':
                break;
            case 'rotate':
                break;
            case 'reverse':
                break;
            default:

        }
    },

    init(input) {
        var string = 'abcdefgh';
        while(input.length){
            this.readOperations(input[0]);

            input.shift();
        }


    }
};