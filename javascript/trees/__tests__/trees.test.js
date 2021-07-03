'use strict';


const binaryTree = require('../trees.js');


describe('Tests binary tree and binary tree search', () => {

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
});
