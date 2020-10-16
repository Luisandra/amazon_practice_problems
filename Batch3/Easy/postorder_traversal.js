/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const a = [1,null,3,2,4,null,5,6],
      b= [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]

var postorder = function(root) {
    const solArr = [];

    const traverseTree = (node) => {
        if (!node) return;

        node.children.forEach((child) => traverseTree(child));

        solArr.push(node.val);
    }

    traverseTree(root);
    console.log(solArr)
    return solArr;
};
postorder(a)