/**
 *
 * @param {number[]} candies
* @param {number} extraCandies
* @return {boolean[]}
*/
const c = [2,3,5,1,3] //output [true,true,true,false,true]
const x = 3
const c2= [4,2,1,1,2]
const x2 =1

var kidsWithCandies = function(candies, extraCandies) {
    let output = []
    //determine max num
    let max = 0
    for(element of candies){
        if (element>max) {
            max = element
        }
    }
    //determine diff between c[i] and max #
    for(candy of candies){
        let diff = max - candy
        //if diff > x, push false, else true (ternary
        diff>extraCandies ? output.push(false) : output.push(true)
    }
    console.log(output)
    return output

};
kidsWithCandies(c2, x2)