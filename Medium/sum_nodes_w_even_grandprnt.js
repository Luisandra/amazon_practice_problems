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
 * @return {number}
 */
const a = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5] //output 18
var sumEvenGrandparent = function(root) {
//DO NOT UNDERSTAND HOW THIS WORKS
    return dfs(root, []);
};

function dfs (root, sequence) {
    if (!root) {
        return 0;
    }
    let result = 0;
    if (sequence.length > 1 && sequence[sequence.length - 2] % 2 === 0) {
        result += root.val;
    }
    sequence.push(root.val);
    result += dfs(root.left, sequence);
    result += dfs(root.right, sequence);
    sequence.pop();
    return result;
};
sumEvenGrandparent(a)