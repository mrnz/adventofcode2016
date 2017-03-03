'use strict';
const crypto = require('crypto');
module.exports = {

    generateHash(input) {
        return crypto.createHash('md5').update(input).digest("hex");
    },

    generateStretchedHash(input, times = 2016) {
        while (times--) {
            console.log(times);
            input = crypto.createHash('md5').update(input).digest("hex");
        }
        return crypto.createHash('md5').update(input).digest("hex");
    },

    checkIfContains3inRow(input) {
        return input.match(/(\w)\1{2,}/);
    },

    checkIfContains5inRow(input, key) {
        var patern = new RegExp(key);
        return input.match(patern) ? true : false;
    },

    checkIfKeyIsValid(key, salt, hasher, cache) {

        var result = false,
            firstStageResult;

        cache[key] = cache[key] ? cache[key] : hasher(salt+key);
        firstStageResult = this.checkIfContains3inRow(cache[key]);

        if( firstStageResult ){
            let keyToFind = firstStageResult[1].repeat(5);
            for(var i = 1; i<1001 ;i++ ){
                ++key;
                cache[key] = cache[key] ? cache[key] : hasher(salt+key);
                if(this.checkIfContains5inRow(cache[key], keyToFind) ){
                    result = true;
                    break;
                }
            }
        }
        return result;
    },

    exec(salt, nth, part2 = false){
        var idx = 0,
            resultArr = [],
            cache = [],
            hasher = part2 ? this.generateStretchedHash : this.generateHash;


        while(resultArr.length<nth){
            if(this.checkIfKeyIsValid(idx, salt, hasher, cache)){
                resultArr.push(idx);
            }
            idx++;
        }

        return resultArr.pop();
    }

};