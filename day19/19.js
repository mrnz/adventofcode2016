'use strict';

module.exports = {

    init(i) {
        // return i - ( ( 2 << Math.log2( i ) ) - i ) + 1;
        // even faster solution:
        // move first "1" to the end of the number in binary notation
        return parseInt( (i.toString(2) + '1').substring(1),2 )
    },

    init2(input) {

        function largest3n2() {

            var s = 2;
            while (s < input) s = s * 3 - 2;
            return (s + 2) / 3;
        }

        var winner = input - largest3n2() + 1;

        if (winner >= largest3n2()) {
          winner = winner * 2 - 9
        }

        return winner;
    }

};
