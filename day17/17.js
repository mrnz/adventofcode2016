'use strict';
const crypto = require('crypto');

class Path {
    constructor(hash, path = '', position = {x:0,y:0}) {
        this.hash = hash;
        this.path = path;
        this.position = position;
    }

    getPossibleDirection() {
        var res = {},
            newPosSet = [],
            hash = crypto.createHash('md5').update(this.hash).digest("hex").substring(0,4);

        hash.split('').forEach( (char,idx)=>{

            if(/[b,c,d,e,f]/.test(char)){
                switch (idx) {
                    case 0:
                        res.x = this.position.x - 1;
                        res.y = this.position.y;
                        res.lastDirection = "U";
                        break;
                    case 1:
                        res.x = this.position.x + 1;
                        res.y = this.position.y;
                        res.lastDirection = "D";
                        break;
                    case 2:
                        res.x = this.position.x;
                        res.y = this.position.y - 1;
                        res.lastDirection = "L";
                        break;
                    case 3:
                        res.x = this.position.x;
                        res.y = this.position.y + 1;
                        res.lastDirection = "R";
                        break;
                }
                if(res.x > -1 && res.x < 4 && res.y > -1 && res.y < 4){
                    newPosSet.push({x:res.x ,y:res.y ,lastDirection:res.lastDirection});
                }
            }
        });
        return newPosSet;
    }
}

module.exports = {

    step(input) {
        return input.getPossibleDirection().map((posItem)=>{
            return new Path(input.hash+posItem.lastDirection, input.path + posItem.lastDirection, {x:posItem.x, y:posItem.y} );
        });
    },

    init(input, theLongest = false) {

        var result = {solution: '', length: theLongest ? 0 : Infinity},
            objects = [new Path(input)];

        while (objects.length){

            let temp = [];
            objects.forEach( (obj) => {
                this.step(obj).forEach( newObject => temp.push(newObject) );
            });

            objects = [];

            temp.forEach( obj => {
                if(result.length > obj.path.length || theLongest){
                    if(obj.position.x === 3 && obj.position.y === 3){
                        result.path = obj.path;
                        result.length = obj.path.length;
                    }else{
                        objects.push(obj);
                    }
                }
            });

        }

        return theLongest ? result.path.length : result.path;
    }
};