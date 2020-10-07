/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const a = "aA", b="aAAbbbb" //output 3
const a2 = "z", b2 = "ZZ" //output 0
var numJewelsInStones = function(J, S) {
    //create counter var
    let total =0
    //for of to iterate through J
    for (jewels of J){
        //second for of to compare S
        for (stones of S){
            jewels===stones ? total++ : total = total
        }
    }
    console.log(total)
    return total

};
numJewelsInStones(a2, b2)