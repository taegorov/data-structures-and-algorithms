'use strict';


const fizzBuzzTree = require('../trees.js');
const binaryTree = require('../trees.js');


describe('Tests binary tree, binary tree search,', () => {

  const bTree = new binaryTree.bt();


  test('Can successfully instantiate an empty tree', () => {

    expect(bTree.root).toEqual(null);
  });


  test('Can successfully instantiate a tree with a single root node', () => {
    bTree.root = new binaryTree.node(123);
    expect(bTree.root.value).toEqual(123);
  });


  test('Can successfully add a left child and right child to a single root node', () => {
    bTree.root = new binaryTree.node(123);
    bTree.root.left = new binaryTree.node(345);
    bTree.root.right = new binaryTree.node(567);

    expect(bTree.root.value).toEqual(123);
    expect(bTree.root.left.value).toEqual(345);
    expect(bTree.root.right.value).toEqual(567);
  });


  test('Can successfully return a collection from a preorder traversal', () => {
    bTree.root = new binaryTree.node(1);
    bTree.root.left = new binaryTree.node(2);
    bTree.root.right = new binaryTree.node(3);

    const preOrder = bTree.preOrder();
    const preOrderTraversal = bTree.preOrderTraversal();

    expect(preOrder).toEqual([1, 2, 3]);
    expect(preOrderTraversal).toEqual([1, 2, 3]);
  });


  test('Can successfully return a collection from an inorder traversal', () => {
    bTree.root = new binaryTree.node(10);
    bTree.root.left = new binaryTree.node(2345234);
    bTree.root.right = new binaryTree.node(44);

    const inOrder = bTree.inOrder();

    expect(inOrder).toEqual([2345234, 10, 44]);
  });


  test('Can successfully return a collection from a postorder traversal', () => {

    bTree.root = new binaryTree.node(9);
    bTree.root.left = new binaryTree.node(5);
    bTree.root.right = new binaryTree.node(2);

    const postOrder = bTree.postOrder();

    expect(postOrder).toEqual([5, 2, 9]);
  });


  test('Finds the largest number in the tree', () => {

    bTree.root = new binaryTree.node(9);
    bTree.root.left = new binaryTree.node(5);
    bTree.root.right = new binaryTree.node(2);

    const max = bTree.findMaxValue();

    expect(max).toEqual(9);
  });


  test('Finds the largest number in the tree again', () => {

    bTree.root = new binaryTree.node(2);

    bTree.root.left = new binaryTree.node(1);
    bTree.root.left.left = new binaryTree.node(3);

    bTree.root.right = new binaryTree.node(5);
    bTree.root.right.right = new binaryTree.node(2342);

    const max = bTree.findMaxValue();

    expect(max).toEqual(2342);
  });


  test('Traverses breadth-first', () => {

    bTree.root = new binaryTree.node(15);

    bTree.root.left = new binaryTree.node(5);
    bTree.root.left.left = new binaryTree.node(4);
    bTree.root.left.right = new binaryTree.node(8);
    bTree.root.left.right.left = new binaryTree.node(3);
    bTree.root.left.right.right = new binaryTree.node(14);

    bTree.root.right = new binaryTree.node(20);
    bTree.root.right.left = new binaryTree.node(28);
    bTree.root.right.right = new binaryTree.node(30);
    bTree.root.right.right.left = new binaryTree.node(12);
    bTree.root.right.right.right = new binaryTree.node(133);

    const breadthTest = bTree.breadthFirst();

    expect(breadthTest).toEqual([15, 5, 20, 4, 8, 28, 30, 3, 14, 12, 133]);
  });

});

// === === K-Ary Tests start here === === //
describe('K-Ary tree tests,', () => {

  const tree = new fizzBuzzTree.tree(2);

  tree.root = new fizzBuzzTree.node(15, tree.k);

  tree.root.children[0] = new fizzBuzzTree.node(2, tree.k);
  tree.root.children[1] = new fizzBuzzTree.node(4, tree.k);
  tree.root.children[2] = new fizzBuzzTree.node(6, tree.k);

  tree.root.children[0].children[0] = new fizzBuzzTree.node(8, tree.k);
  tree.root.children[0].children[1] = new fizzBuzzTree.node(10, tree.k);
  tree.root.children[1].children[0] = new fizzBuzzTree.node(12, tree.k);

  const fbTree = fizzBuzzTree.fizzBuzzTree(tree);

  // === === k-ary tests start here === === //
  test('If the value is divisible by 3, replace the value with “Fizz”', () => {

    expect(fbTree.root.children[2].value).toEqual('Fizz');
  });


  test('If the value is divisible by 5, replace the value with “Buzz”', () => {

    expect(fbTree.root.children[0].children[1].value).toEqual('Buzz');
  });


  test('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”', () => {
    // console.log(fbTree.root.value);
    expect(fbTree.root.value).toEqual('FizzBuzz');
  });


  test('If the value is not divisible by 3 or 5, simply turn the number into a String.', () => {
    // console.log(fbTree.root.children[1].value);
    expect(fbTree.root.children[1].value).toEqual('4');
  });

});
