'use strict';
module.exports = {

    parseInput(input) {
        return input.split('\n').map((row, idx) => {
            var numbers = row.match(/\d{1,}/g);
            return {
                disk_nr: parseInt(numbers[0]),
                positions: parseInt(numbers[1]),
                actual_position: parseInt(numbers[3]),
            }
        });
    },

    calcAvailable(row) {

        console.log( row.actual_position - row.positions);

    },

    init(input) {
        var input = this.parseInput(input);

        this.calcAvailable(input[0]);

    },



}
