/**
 * @param {number} num
 * @return {number}
 */
const a = 14 //output 6
const b = 8 //output 4
const c = 123 //output 12
var numberOfSteps  = function(num) {
    //create counter var
    let steps = 0
    //while num >0
    while(num>0){
        //if/else - if even divide by 2, else -1
        if(num%2===0){
            num = num/2
            steps++
        } else {
            num -=1
            steps++
        }
    }
    console.log(steps)
    return steps

};
numberOfSteps(c)
