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
                let obj = {
                    used: temp[2],
                    avai: temp[3],
                    size: temp[4]
                };

                if(!res[temp[1]]){
                    res[temp[1]] = [];
                }
                res[temp[1]][temp[0]] = obj;
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

    init2(input) {
        var map = this.parse(input);
        var dat = map[0][ map[0].length-1 ].size
        console.log(map.length);
        console.log(map[0].length);
        map.forEach((y,idxY)=>{
            var row = y.reduce((prev, x, idxX)=>{
                if(idxX === map[0].length -1 && idxY === 0 ){
                    return  prev + '  G - ' + x.used;
                }else if(x.used == 0){
                    return  prev + '  _  ';
                }else if( idxY === 0 && idxX === 0){
                    return  prev + '  (.) ';
                }else if(x.used > dat){
                    return prev + '  #  ';
                }else{
                    return  prev + (idxX === 0 ? idxY + 1 : '') + '  .  ';
                }

                return prev + ' '+x.used + '/' + x.size +' ';
            },'');
            console.log(row);

            // result is 185
        });



    }

};
