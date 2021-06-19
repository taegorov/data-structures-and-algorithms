'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;

    while (current) {
      current = current.next;
      console.log(current);
    }
  }

  add(value) {
    let current = this.head;

    while (current) {

      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
      current = current.next;
    }
  }

  // takes any value as an argument and adds a new node with that value to the head of the list 
  insert(value) {
    let current = this.head;
    let newNode = new Node(value);

    if (!current) {
      this.head = newNode;

    } else {
      newNode.next = current;
      this.head = newNode;
    }
  }

  // takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  includes(value) {
    let current = this.head;

    while (current) {
      if (value === current.value) {
        return true;

      } else if (current.next === null) {
        return false;

      } else {
        current = current.next;
      }
    }
  }

  //  takes in no arguments and returns a string representing all the values in the Linked List
  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      let linkedListValue = current.value;
      current = current.next;
      string += `{${linkedListValue}} -> `;
    }

    string += '{null}';
    console.log(string);
    return string;
  }
}


const linkedList = new LinkedList();

linkedList.head = new Node(0);
linkedList.add(1);
linkedList.add(2);
linkedList.toString();


module.exports = {
  'linkedList': LinkedList,
  'node': Node,
};
