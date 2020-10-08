/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const a = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
//output [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
const b = [0,null,1] //output [1,null,1]
var bstToGst = function(root) {
//DO NOT UNDERSTAND
    //traversal all nodes via DFS
    //use var to save the sum and update val for every node
    let sum = 0;
    root && dfs(root);
    console.log(root)
    return root;

    function dfs(node) {
        node.right && dfs(node.right);
        sum += node.val;
        node.val = sum;
        node.left && dfs(node.left);
    }
};
bstToGst(a)