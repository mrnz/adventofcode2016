'use strict';
module.exports = {

    reverseString(input) {
        return input
            .split('')
            .map( numb => numb === '1' ? '0' : '1' )
            .join('');
    },

    generateMoreData(input) {
        return input + '0' + this.reverseString( input.split("").reverse().join("") );
    },

    extendStringToLength(input, length) {
        while(input.length < length){
            input = this.generateMoreData(input);
        }
        return input.substr(0,length);
    },

    createCheckSum(input) {
        var result = '';

        while(result.length%2 === 0){
            let i = 0;
            result = '';

            while(input[i]){
                result += input[i] === input[i+1] ? '1' : 0;
                i += 2;
            }

            input = result;
        }
        return result;
    },

    init(input, diskLength) {
        return this.createCheckSum(this.extendStringToLength(input, diskLength) );
    }

};