'use strict';

module.exports = {

    init(i) {
        return i - ( ( 2 << Math.log2( i ) ) - i ) + 1;
    },

    init2(input) {

        var i = 0,
            skipped = [],
            stateArray = Array(8).fill(true).map((x,idx)=>[idx,idx]);




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
                console.log(i);
                console.log(stateArray);
                stateArray = [];
            } else {
                stateArray.splice(next,1);
                // stateArray = stateArray.filter((x,idx) => idx !== i);

            }

            i = (i > stateArray.length - 2) ? 0 : i+1;
             //i++


        }

        return stateArray.indexOf(true) + 1;

    }

};
