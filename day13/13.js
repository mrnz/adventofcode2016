'use strict';
module.exports = {

    queue: [],
    global: [],
    favoriteNumber: false,

    getNeWPosition(history = [], steps = 0, position = [1,1] ) {
        class Pass{

            constructor(history, steps, position, favoriteNumber){
                this.position = position;
                this.steps = steps;
                this.history = history;
                this.favoriteNumber = favoriteNumber;
            }

            nextSteps(){
                var x = this.position[0],
                    y = this.position[1];

                return [[x,y-1],[x,y+1],[x-1,y],[x+1,y]]
                    .filter(item => item[0] > -1 && item[1] > -1 )
                    .filter(item => this.history.indexOf( item[0]+'x'+item[1]) === -1 )
                    .filter(this.calc.bind(this.favoriteNumber));
            }

            calc(item) {
                var x = item[0],
                    y = item[1];


                return (x*x + 3*x + 2*x*y + y + y*y + this)
                     .toString(2)
                     .split('')
                     .reduce((prev,curr)=>prev+=curr === '0' ? 0 : 1, 0)
                     % 2 ? false : true;
            }

        };
        return new Pass(history, steps, position, this.favoriteNumber);
    },

    execPart1(x,y, favoriteNumber = 10) {

        var result = false,
            initialPosition;

        this.queue = [];
        this.favoriteNumber = favoriteNumber;
        initialPosition = this.getNeWPosition();
        this.queue.push(initialPosition);

        while( !result && this.queue.length ){

            let thisElem = this.queue.shift(),
                nextSteps = thisElem.nextSteps();

            if( x === thisElem.position[0] && y === thisElem.position[1]){
                  result = thisElem.steps;
            }

            thisElem.history.push(thisElem.position[0]+'x'+thisElem.position[1]);

            nextSteps.forEach(step=>{
                this.queue.push(this.getNeWPosition(thisElem.history,thisElem.steps+1,step));

            });

        }
        return result;
    },

    execPart2(limit, favoriteNumber = 10) {
        var initialPosition = this.getNeWPosition();
        this.queue = [];
        this.queue.push(initialPosition);

        this.favoriteNumber = favoriteNumber;

        while( this.queue.length ){

            let thisElem = this.queue.shift(),
                nextSteps = thisElem.nextSteps();

            if(thisElem.history.indexOf(thisElem.position[0]+'x'+thisElem.position[1]) === -1){
                thisElem.history.push(thisElem.position[0]+'x'+thisElem.position[1]);
                this.global.push(thisElem.position[0]+'x'+thisElem.position[1]);
            }

            nextSteps.forEach(x=>{
                if(thisElem.steps+1 <= limit){
                    this.queue.push(this.getNeWPosition(thisElem.history,thisElem.steps+1,x));

                }
            });

        }
        return this.global.length;
    }
};