'use strict';

module.exports = {

    init(input) {

        var i = 0,
            skipped = [],
            stateArray = Array(input).fill(true);

        while (skipped.length < input-1) {

            let next = stateArray[i+1] ? i+1 : 1;

            if(stateArray[i]) {

                if(stateArray[next]){

                    stateArray[next] = false;
                    skipped.push(next);

                } else {

                    let j = i+2;
                    while(!stateArray[j]) {
                        j = stateArray[j+1]===undefined?0:j+1;
                    }

                    stateArray[j] = false;
                    skipped.push(j);

                }

            }

            i = stateArray[i+1]===undefined?0:i+1;

        }

        return stateArray.indexOf(true) + 1;

    },

    init2(input) {

        var i = 0,
            skipped = [],
            stateArray = Array(input).fill(true).map((x,idx)=>[idx,idx]);




        function oposit(point, l) {

            var half = l%2 ? Math.floor(l/2) : l / 2,
                t = point + half;

            // if(l%2){
            //     half = Math.floor(l / 2 );
            // }else{
            //     half = l / 2 ;
            // }

            if(t>l-1){
                t = t - l;
            }

            return t;

        }

        while (stateArray.length > 1) {

            let next = oposit(i, stateArray.length);
            if(!(i%1)){
                    console.log(i + ' ==> ' + next + ' ' + stateArray.length);
            }

            // console.log(stateArray.length);
            if(stateArray.length === 2) {
                // stateArray.splice(i-2,1);
                // console.log(stateArray[0] + 1);
                console.log(stateArray);
                stateArray = [];
            } else {
                // stateArray.splice(next,1);
                stateArray = stateArray.filter((x,idx) => idx !== i);

            }

            // i = (i > stateArray.length - 2) ? 0 : i+1;
            i++


        }

        return stateArray.indexOf(true) + 1;

    }

};
