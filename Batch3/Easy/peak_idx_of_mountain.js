/**
 * @param {number[]} arr
 * @return {number}
 */
const a=[0,1,0], b=[0,10,5,2], c=[24,69,100,99,79,78,67,36,26,19]
var peakIndexInMountainArray = function(arr) {
    // for(let i=1; i<arr.length; i++){
    //     if(arr[i]<arr[i-1]){
    //         return (i-1)
    //     }
    // }
//got it down to one line of code!!!!!
    console.log(arr.indexOf(Math.max(...arr)))
    return arr.indexOf(Math.max(...arr))
};
peakIndexInMountainArray(c)