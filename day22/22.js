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
    print(input) {
        var res = [];
        input.forEach(x=>{

            if(this.isValidRow(x)){
                let temp;
                x = this.matchRow(x);

                temp = x[0].split('node-')[1].split('-');
                temp[0] = parseInt( temp[0].substring(1) );
                temp[1] = parseInt( temp[1].substring(1) );
                console.log( temp );
            }
        });
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
    }
};