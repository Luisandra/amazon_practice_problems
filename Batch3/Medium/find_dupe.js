/**
 * @param {number[]} nums
 * @return {number[]}
 */
const a = [4,3,2,7,8,2,3,1]  //output [2,3]
var findDuplicates = function(nums) {
    //create array to hold duplicate values
    let duplicates = []
    //loop through each element
    for(let i = 0; i<nums.length; i++){
        //create copy of array to manipulate and compare
        let compareArray = [...nums]
        //remove element being searched for
        compareArray.splice(i,1)
        //determine if duplicate
        let includes = compareArray.includes(nums[i])
        if(includes){
            //ensure no duplicate values in results
            let checkResults =  duplicates.includes(nums[i])
            if(!checkResults){
                duplicates.unshift(nums[i])
            }
        }
    }
    console.log(duplicates)


};
findDuplicates(a)