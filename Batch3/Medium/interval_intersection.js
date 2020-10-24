/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
const A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
var intervalIntersection = function(A, B) {
    // base case
    if (A.length === 0 || B.length === 0) return [];
    // result
    const res = [];
    // pointers for list A and B
    let a = 0,
        b = 0;

    // go while there are still intervals to compare
    while (a < A.length && b < B.length) {
        // get maximum of start times, minimum of end times
        const startMax = Math.max(A[a][0], B[b][0]);
        const endMin = Math.min(A[a][1], B[b][1]);

        // check if they intersected
        if (startMax <= endMin) {
            // create a new interval which is the intersection
            res.push([startMax, endMin]);
        }

        // increase the pointer which had the lowest end time
        if (endMin === A[a][1]) {
            a++;
        } else {
            b++;
        }
    }
    console.log(res)
    return res;

};
intervalIntersection(A, B)