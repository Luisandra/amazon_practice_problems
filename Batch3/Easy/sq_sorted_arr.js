/**
 * @param {number[]} A
 * @return {number[]}
 */
const a =[-4,-1,0,3,10], b =[-7,-3,2,3,11]
var sortedSquares = function(A) {
    let squared = []
    for(num of A){
        let sq = Math.pow(num, 2)
        squared.push(sq)
    }

    return (squared.sort(function (a, b){return a-b}))
};
sortedSquares(b)