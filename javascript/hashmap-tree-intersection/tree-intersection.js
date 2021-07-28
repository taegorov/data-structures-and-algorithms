'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const values = [];
    const preOrder = (node) => {
      values.push(node.value);
      if (node.left) {
        preOrder(node.left);
      }
      if (node.right) {
        preOrder(node.right);
      }
    };

    let current = this.root;
    preOrder(current);
    return values;
  }
}


function treeIntersection(tree1, tree2) {

  let tree1Arr = tree1.preOrder();
  let tree2Arr = tree2.preOrder();
  let results = [];
  console.log(results);

  for (let i = 0; i < tree1Arr.length; i += 1) {

    if (tree1Arr[i] === tree2Arr[i]) {
      results[results.length] = tree1Arr[i];
    }
  }

  console.log('👽 results are: ', results);
  return results;

}



module.exports = {
  Tree,
  Node,
  treeIntersection,
};
