'use strict';
const crypto = require('crypto');
const app = module.exports = {

    generateHash(input) {
        return crypto.createHash('md5').update(input).digest("hex");
    },

    checkIfContains3inRow(input) {
        return input.match(/(\w)\1{2,}/);
    },

    checkIfContains5inRow(input, key) {
        var patern = new RegExp(key);
        return input.match(patern) ? true : false;
    },

    checkIfKeyIsValid(key, salt) {

        var result = false,
            firstKey = this.generateHash(salt+key),
            firstStageResult = this.checkIfContains3inRow(firstKey);

        if( firstStageResult ){
            let keyToFind = firstStageResult[1].repeat(5);

            for(var i = 1; i<1001 ;i++ ){
                ++key;
                let nextHash = this.generateHash(salt+key);
                let isOK = this.checkIfContains5inRow(nextHash, keyToFind );
                if(isOK){
                    result = true;
                    break;
                }
            }
        }
        return result;
    },

    exec(salt, nth){
        var idx = 0,
            resultArr = [];

        while(resultArr.length<nth){
            if(app.checkIfKeyIsValid(idx, salt)){
              resultArr.push(idx);
            }
            idx++;
        }

        return resultArr[resultArr.length-1];
    }

};
