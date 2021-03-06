'use strict';

const linkedList = require('../linked-list.js');
const linkedListTest = require('../linked-list.js');



describe('tests linked lists', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const empty = new linkedListTest.linkedList();

    expect(empty).toEqual({ 'head': null });
  });


  test('Can properly insert into the linked list', () => {
    const addNode = new linkedListTest.linkedList();
    addNode.insert('Marisa');
    addNode.insert('Willow');

    expect(addNode.head.value).toEqual('Willow');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const firstNode = new linkedListTest.linkedList();
    firstNode.head = new linkedList.node(0);

    expect(firstNode.head.value === 0).toBeTruthy();
  });


  test('Can properly insert multiple nodes into the linked list', () => {
    const addNode = new linkedListTest.linkedList();

    for (let i = 1; i <= 3; i += 1) {
      addNode.insert(`test${[i]}`);
    }

    expect(addNode.head.next.next.value).toEqual('test1');
    expect(addNode.head.next.value).toEqual('test2');
    expect(addNode.head.value).toEqual('test3');
  });


  test('Will return true when finding a value within the linked list that exists, false when searching for a value in the linked list that does not exist', () => {
    const valueExists = new linkedListTest.linkedList();
    valueExists.head = new linkedListTest.node('squat');
    valueExists.head.next = new linkedListTest.node('bench');
    valueExists.head.next.next = new linkedListTest.node('deadlift');

    const testOne = valueExists.includes('deadlift');
    const testTwo = valueExists.includes('clean');

    expect(testOne).toEqual(true);
    expect(testTwo).toEqual(false);
  });


  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const valueExist = new linkedListTest.linkedList();
    valueExist.head = new linkedListTest.node('squat');
    valueExist.head.next = new linkedListTest.node('bench');
    valueExist.head.next.next = new linkedListTest.node('deadlift');
    valueExist.head.next.next.next = new linkedListTest.node('overhead press');
    valueExist.insert('day off!');

    const test = valueExist.toString();

    expect(test).toEqual('{day off!} -> {squat} -> {bench} -> {deadlift} -> {overhead press} -> {null}');
  });


  test('Can successfully add a node/multiple nodes to the end of the linked list', () => {
    const endTest = new linkedListTest.linkedList();
    endTest.head = new linkedListTest.node('Willow');
    endTest.append('Marisa');
    endTest.append('Timba');

    expect(endTest.head.next.value).toEqual('Marisa');
    expect(endTest.head.next.next.value).toEqual('Timba');
  });


  test('Can successfully insert a node before the FIRST node of a linked list', () => {
    const firstTest = new linkedListTest.linkedList();
    firstTest.head = new linkedListTest.node(0);
    firstTest.head.next = new linkedListTest.node(1);
    firstTest.insertBefore(0, 5);
    console.log(firstTest.head.value);

    expect(firstTest.head.value).toEqual(5);
  });


  test('Can successfully insert BEFORE a node in the MIDDLE of the linked list', () => {
    const middleTest = new linkedListTest.linkedList();
    middleTest.head = new linkedListTest.node(0);
    middleTest.head.next = new linkedListTest.node(1);
    middleTest.head.next.next = new linkedListTest.node(2);
    middleTest.insertBefore(1, 5);

    console.log('before middle test:', middleTest.head.value, middleTest.head.next.value, middleTest.head.next.next.value);

    expect(middleTest.head.next.value).toEqual(5);
  });


  test('Can successfully insert AFTER a node in the MIDDLE of the linked list', () => {
    const middleTest = new linkedListTest.linkedList();
    middleTest.head = new linkedListTest.node(0);
    middleTest.head.next = new linkedListTest.node(1);
    middleTest.head.next.next = new linkedListTest.node(2);
    middleTest.insertAfter(1, 5);

    console.log('after middle test:', middleTest.head.value, middleTest.head.next.value, middleTest.head.next.next.value);

    expect(middleTest.head.next.next.value).toEqual(5);
  });


  test('Can successfully insert a node AFTER the LAST node of the linked list', () => {
    const afterLast = new linkedListTest.linkedList();
    afterLast.head = new linkedListTest.node(0);
    afterLast.head.next = new linkedListTest.node(1);
    afterLast.head.next.next = new linkedListTest.node(2);
    afterLast.insertAfter(2, 5);

    console.log('order of values for AFTER LAST test:', afterLast.head.value, afterLast.head.next.value, afterLast.head.next.next.value, afterLast.head.next.next.next.value);

    expect(afterLast.head.next.next.next.value).toEqual(5);
  });


  test('Where k is greater than the length of the linked list', () => {
    const kTest = new linkedListTest.linkedList();
    kTest.head = new linkedListTest.node('Ras');
    kTest.head.next = new linkedListTest.node('Dva');
    kTest.head.next.next = new linkedListTest.node('Tree');
    kTest.head.next.next.next = new linkedListTest.node('Cheteeree');
    kTest.insert('Pyat');

    const kTrueTest = kTest.kthFromEnd(0);

    expect(kTrueTest).toEqual(null);
  });


  test('Where k and the length of the list are the same', () => {
    const kTest = new linkedListTest.linkedList();
    kTest.head = new linkedListTest.node(1);
    kTest.head.next = new linkedListTest.node(2);
    kTest.head.next.next = new linkedListTest.node(3);
    kTest.head.next.next.next = new linkedListTest.node(4);
    kTest.insert(5);

    const kTrueTest = kTest.kthFromEnd(4);

    expect(kTrueTest).toEqual(1);
  });


  test('Where k is not a positive integer', () => {
    const kTest = new linkedListTest.linkedList();
    kTest.head = new linkedListTest.node(1);
    kTest.head.next = new linkedListTest.node(2);
    kTest.head.next.next = new linkedListTest.node(3);
    kTest.head.next.next.next = new linkedListTest.node(4);
    kTest.insert(5);

    const kTrueTest = kTest.kthFromEnd(0);
    console.log(kTest.kthFromEnd(0));

    expect(kTrueTest).toEqual(null);
  });


  test('Where the linked list is of a size 1', () => {
    const kTest = new linkedListTest.linkedList();
    kTest.head = new linkedListTest.node(0);

    const kTrueTest = kTest.kthFromEnd(1);


    expect(kTrueTest).toEqual(0);
  });


  test('???Happy Path??? where k is not at the end, but somewhere in the middle of the linked list', () => {
    const kTest = new linkedListTest.linkedList();
    kTest.head = new linkedListTest.node(1);
    kTest.head.next = new linkedListTest.node(2);
    kTest.head.next.next = new linkedListTest.node(3);
    kTest.head.next.next.next = new linkedListTest.node(4);
    kTest.insert(5);

    const kTrueTest = kTest.kthFromEnd(4);
    console.log('order of values for happy path test:', kTest.head.value, kTest.head.next.value, kTest.head.next.next.value, kTest.head.next.next.next.value);

    expect(kTrueTest).toEqual(1);
  });


  test('Tests if separate lists \'zip\' together', () => {
    const listOne = new linkedListTest.linkedList();
    listOne.head = new linkedListTest.node(1);
    listOne.append(8);
    listOne.append(4);

    const listTwo = new linkedListTest.linkedList();
    listTwo.head = new linkedListTest.node(22);
    listTwo.append(59);
    listTwo.append(923);

    const zipTest = linkedListTest.zipList(listOne, listTwo);
    console.log('zipTest:', zipTest);

    expect(zipTest).toEqual('{1} -> {22} -> {8} -> {59} -> {4} -> {923} -> {null}');
  });

});
