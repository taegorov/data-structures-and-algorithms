'use strict';


// === === Node constructor === === //
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

////////////////////////////////////////////////////
// === === Binary Tree Search constructor === === //
///////////////////////////////////////////////////

class BinaryTreeSearch {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;

      return this;
    }

    let current = this.root;
    while (current) {
      if (value === current.value) {

        return undefined;
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;

          return this;
        }
        current = current.left;

      } else {
        if (current.right === null) {
          current.right = newNode;

          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;

    let current = this.root;
    let exists = false;
    while (current && !exists) {
      if (value < current.value) {
        current = current.left;
      }

      else if (value > current.value) {
        current = current.right;

      } else {
        exists = true;
      }
    }

    if (!exists) {

      return undefined;
    }

    return exists;
  }
}


/////////////////////////////////////////////
// === === Binary Tree constructor === === //
/////////////////////////////////////////////

class BinaryTree {
  constructor() {
    this.root = null;
  }


  // === === pre-order === === //
  preOrder() {
    const arr = [];
    const preOrder = (node) => {
      arr.push(node.value);

      if (node.left) {
        preOrder(node.left);
      }

      if (node.right) {
        preOrder(node.right);
      }
    };

    let current = this.root;
    preOrder(current);

    return arr;
  }

  preOrderTraversal() {
    const stack = [];

    if (this.root !== null) {
      stack[stack.length] = this.root;
    }

    const result = [];

    while (stack.length > 0) {
      let node = stack.pop();
      result[result.length] = node.value;

      if (node.right !== null) {

        stack[stack.length] = node.right;
      }

      if (node.left !== null) {
        stack[stack.length] = node.left;

      }
    }

    return result;
  }

  // === === post-order === === //
  postOrder() {
    const arr = [];

    const postOrder = (node) => {
      if (node.left) {
        postOrder(node.left);
      }

      if (node.right) {
        postOrder(node.right);
      }
      arr.push(node.value);
    };

    let current = this.root;
    postOrder(current);

    return arr;
  }

  // === === in-order === === //
  inOrder() {
    const arr = [];

    const inOrder = (node) => {

      if (node.left) {
        inOrder(node.left);
      }

      arr.push(node.value);

      if (node.right) {
        inOrder(node.right);
      }
    };

    let current = this.root;
    inOrder(current);

    return arr;
  }


  stackTraversal() {
    let current = this.root;
    let stack = [];
    stack.push(current);

    while (stack.length) {

      if (current.right) {
        stack.push(current.right);
      }

      if (current.left) {
        stack.push(current.left);
      }

      current = stack.pop();
    }
  }


  breadth() {
    let current = this.root;
    let queue = [];

    queue.unshift(current);

    while (queue.length) {
      current = queue.pop();

      if (current.left) {
        queue.unshift(current.left);
      }

      if (current.right) {
        queue.unshift(current.right);
      }
    }
  }


  // === === Find maximum value - Code Challenge 16 === === //
  findMaxValue() {

    let current = this.root;

    const findMax = (node) => {
      if (node === null) {
        return;
      }

      let actualMax = node.value;
      let leftSideMax = findMax(node.left);
      let rightSideMax = findMax(node.right);

      if (leftSideMax > actualMax) {
        actualMax = leftSideMax;
      }

      if (rightSideMax > actualMax) {
        actualMax = rightSideMax;
      }

      return actualMax;
    };

    return findMax(current);
  }

  // === === Breadth-first traversal - Code Challenge 17 === === //
  breadthFirst() {

    let iteration = [];

    let traversal = (current, num) => {
      if (!current) {
        return null;
      }

      if (!iteration[num]) {
        iteration[num] = [current.value];
      } else {
        iteration[num].push(current.value);
      }

      traversal(current.left, num + 1);
      traversal(current.right, num + 1);
    };

    traversal(this.root, 0);

    let flattenArray = (array, result = []) => {

      for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (Array.isArray(value)) {
          flattenArray(value, result);
        } else {
          result[result.length] = value;
        }
      }

      return result;
    };

    return flattenArray(iteration);
  }
}


// === === Exports === === //
module.exports = {
  'bt': BinaryTree,
  'bts': BinaryTreeSearch,
  'node': Node,
};
