/**
 * @param {number[]} rating
 * @return {number}
 */
const a = [2,5,3,4,1] //output 3
const b = [2,1,3] //output 0
const c = [1,2,3,4] //output 4
var numTeams = function(rating) {
    //create counter var
    let groups=0
    //use loop (stops at length -2)
    for(let i=0; i<rating.length-2; i++){
        //second loop to compare
        for(let j=i+1; j<rating.length-1; j++){
            //third loop to determine groups
            for(let k=j+1; k<rating.length; k++){
                // if stmt to determine if greater or less
                if(rating[i]<rating[j]&&rating[j]<rating[k] || rating[i]>rating[j]&&rating[j]>rating[k]){
                    groups++
                }
            }
        }

    }
    console.log(groups)
    return groups
};
numTeams(c)