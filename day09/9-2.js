'use strict';
var decompress = data => {

    var result = 0;

    for (let i = 0; i < data.length; i++) {

        let marker = /^\((\d+)x(\d+)\)/.exec(data.substr(i));

        if (marker === null) {
            result++;
            continue;
        }

        let elementToRepeat,
            markerLength = marker[0].length,
            matchLength = parseInt(marker[1]),
            repetition = parseInt(marker[2]);

        elementToRepeat = data.substr(i + markerLength, matchLength);

        result += decompress(elementToRepeat) * repetition;

        i += matchLength + markerLength - 1;

    }

    return result;

};

module.exports = dataIn => decompress(dataIn);