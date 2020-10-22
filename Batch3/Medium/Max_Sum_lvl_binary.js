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
var maxLevelSum = function(root) {
    // Array to keep track of sums per level
    let sums = [];

    // Level Order Traversal
    const recursive = (node, sum, level) => {
        if(!node) return;

        // Calculate sums for each level and store in array
        sums[level] = sums[level] ? sums[level] + node.val : node.val;

        recursive(node.left, sum + node.val, level + 1);
        recursive(node.right, sum + node.val, level + 1);
    }