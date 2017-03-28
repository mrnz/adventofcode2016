'use strict';
module.exports = {

    parseInput(input) {
        return input.split('\n').map((row, idx) => {
            var numbers = row.match(/\d{1,}/g);
            return {
                disk_nr: parseInt(numbers[0]),
                positions: parseInt(numbers[1]),
                actual_position: parseInt(numbers[3]),
            };
        });
    },

    calcAvailable(row, time) {
        return (row.actual_position + time + row.disk_nr -1) % row.positions;
    },

    init(input) {
        var sume = true,
            time = 0,
            inputParsed = this.parseInput(input);

        while(sume) {
            sume = inputParsed.reduce((prev,curr)=>prev + this.calcAvailable(curr, time),0);
            time++;
        }

        return time-2;
    }

};