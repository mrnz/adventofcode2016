'use strict';
module.exports = {
    isValidRow(row) {
         return row !== null && row[0][0] === "/";
    },
    isNotEmpty(node) {
        return parseInt(node[2])>0 ? true : false;
    },
    matchRow(row) {
         return row.match(/[a-zA-Z\/-\d%]+/g);
    },
    isDiff(node1, node2) {
        return node2[0] !== node1[0];
    },
    isEnoughBig(node1, node2) {
        return parseInt(node1[2]) < parseInt(node2[3])
    },

    parse(input) {
        var res = [];

        input.forEach(x=>{
            if(!x)return;

            if(this.isValidRow(x)){
                let temp;
                x = this.matchRow(x);

                temp = x[0].split('node-')[1].split('-');
                temp[0] = parseInt( temp[0].substring(1) );
                temp[1] = parseInt( temp[1].substring(1) );
                temp[2] = parseInt(x[2]);
                temp[3] = parseInt(x[3]);
                temp[4] = parseInt(x[1]);

                if(!temp[2]) {
                    console.log(x);
                }

                let obj = {
                    used: temp[2],
                    size: temp[4]
                };

                if(!res[temp[0]]){
                    res[temp[0]] = [];
                }

                res[temp[0]][temp[1]] = [obj.used, obj.size] ;

            }
        });
        return res;
    },

    init(input) {
        var result = 0;

        input.forEach(node=>{
            var node = this.matchRow(node);
            if(this.isValidRow(node) && this.isNotEmpty(node)){
                input.forEach(node2=>{
                    var node2 = this.matchRow(node2);
                    if(this.isValidRow(node2) && this.isDiff(node, node2)){
                        result += this.isEnoughBig(node,node2) ? 1 : 0;
                    }
                });
            }
        });
        return result;
    },

    print(input) {
        var toPrint = [];

        input.forEach( (col,xIdx)=>{
            col.forEach( (row,yIdx)=>{

                var temp;
                if( !toPrint[yIdx] )toPrint[yIdx] = '';
                if( row[0] === 0 ){
                    temp = ' _ ';
                }else if(row[0]>100){
                    temp = ' # ';
                }else if(row.g){
                    temp = ' G ';
                }else{
                    temp = ' . ';
                }
                toPrint[yIdx] += temp;
            });
        });
        toPrint.map(x=>console.log(x));
    },

    steps: 0,

    move(input, direction, emptyPosition) {
        var param, switchData, getParams;

        switchData = (input, emptyPosition, param) => {
            var emptyElem = input[ emptyPosition[0] ] [ emptyPosition[1] ],
                nextElem = input[ emptyPosition[0]+param[0] ] [ emptyPosition[1]+param[1] ];

            if( nextElem[0] < emptyElem[1] ){

                input[ emptyPosition[0] ] [ emptyPosition[1] ] = [ nextElem[0], emptyElem[1]];
                input[ emptyPosition[0]+param[0] ] [ emptyPosition[1]+param[1] ] = [ 0, nextElem[1] ];

                input[ emptyPosition[0] ] [ emptyPosition[1] ].g = nextElem.g;

                emptyPosition[0] += param[0];
                emptyPosition[1] += param[1];

                this.steps++;

                return true;
            }else{
                return false;
            }
        }
        getParams = dir => {
            switch (dir) {
                case 'up':
                    return [0,-1];
                case 'down':
                    return [0,1];
                case 'left':
                    return [-1,0];
                case 'right':
                    return [1,0];
            }
        }

        return switchData(input, emptyPosition, getParams(direction));;
    },

    init2(input) {
        var map = [],
            emptyPosition = [],
            target = [];

        map = this.parse(input);
        map[map.length -1][0].g = true;


        emptyPosition[0] = map.length -2;
        emptyPosition[1] = map[0].length-1;

        // this.print(map);

        var res = true;
        while(res) {
            res = this.move(map, 'up', emptyPosition);
        }

        this.move(map, 'left', emptyPosition)
        this.move(map, 'left', emptyPosition)
        this.move(map, 'left', emptyPosition)
        this.move(map, 'left', emptyPosition)
        this.move(map, 'left', emptyPosition)


        while( !(emptyPosition[1] === 0) ) {
            this.move(map, 'up', emptyPosition)
        }

        while( !(emptyPosition[0] === map.length-1) ) {
            this.move(map, 'right', emptyPosition)
        }

        while( !map[0][0].g ){
            this.move(map, 'down', emptyPosition)
            this.move(map, 'left', emptyPosition)
            this.move(map, 'left', emptyPosition)
            this.move(map, 'up', emptyPosition)
            this.move(map, 'right', emptyPosition)
        }

        this.print(map);
        return this.steps;
    }

};
// result is 185
