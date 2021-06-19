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
});
