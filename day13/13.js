'use strict';
var helpers = module.exports = {

    maze: [],
    favoriteNumber: 10,
    target: [],
    calc(x,y) {
        var a = x*x + 3*x + 2*x*y + y + y*y + this.favoriteNumber;

        a = a.toString(2)
             .split('')
             .reduce((prev,curr)=>prev+=curr === '0'?0:1, 0);

        a = a%2 ? '#' : '.';
        return a;
    },

    generateInitMaze(x,y){
        var col = [];
        for(var i =0; i<y;i++){
            var row = '';
            for(var j=0; j<x; j++){
                row += helpers.calc(j,i);
            }
            col.push(row);
        }
        this.maze = col;
    },

    display() {
        var temp = this.maze.reduce((prev,curr)=>prev+curr+'\n','');
        console.log(temp);
    },

    exec(x,y) {
        this.target = [x,y];
        this.generateInitMaze(x+1,y+1);
        this.display();
    }

};
helpers.exec(7,4)
