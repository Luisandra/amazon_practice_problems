/**
 * @param {number[]} nums
 * @return {number[]}
 */
const a = [6,5,4,8], b= [7,7,7,7]
var smallerNumbersThanCurrent = function(nums) {
    //create count output arr
    let results = []

    //loop for first var
    for(let i =0; i<nums.length; i++){
        //create count var inside loop to reset with each iteration
        let count =0
        //second loop to compare
        for(let j = 0; j<nums.length; j++){
            if(i===j){
                continue
            }
            nums[i]>nums[j] ? count++ : count = count
        }
        results[i]=count
    }
    console.log(results)
    return results


};
smallerNumbersThanCurrent(b)