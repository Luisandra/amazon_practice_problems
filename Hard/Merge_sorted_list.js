/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const a = [[1,4,5],[1,3,4],[2,6]], b=[[]], c=[]
var mergeKLists = function(lists) {
    //var to hold output
    let newList=[]
    //iterate through array to push smaller array
    for(item of lists){
        //spread operator to push array into output var
        newList.push(...item)
    }
    //sort ascending order
    newList.sort(function (a, b){return a-b})
    console.log(newList)
    return newList
};
mergeKLists(c)