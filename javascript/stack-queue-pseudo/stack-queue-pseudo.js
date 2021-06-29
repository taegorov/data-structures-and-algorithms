'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// === === // Stack starts here // === === //
class Stack {
  constructor() {
    this.top = null;
  }

  push(node) {
    if (this.isEmpty()) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.top;
  }

  pop() {
    let placeHolder = this.top;
    this.top = placeHolder.next;
    placeHolder.next = null;
    return placeHolder.value;
  }


  isEmpty() {
    return this.top === null;
  }

  peek() {
    if (this.isEmpty()) {
      return 'no node in the stack!';
    } else {
      return this.top.value;
    }
  }
}


// === === // Queue starts here // === === //
// class Queue {
//   constructor() {
//     this.front = null;
//     this.rear = null;
//   }

//   enqueue(node) {
//     if (this.isEmpty()) {
//       this.front = node;
//       this.rear = node;
//     } else {
//       this.rear.next = node;
//       this.rear = node;
//     }
//   }

//   dequeue() {
//     let placeHolder = this.front;

//     this.front = placeHolder.next;
//     placeHolder.next = null;

//     return placeHolder.value;
//   }

//   isEmpty() {
//     return this.front === null;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return 'no node in the queue!';
//     } else {
//       return this.front.value;
//     }
//   }
// }

// === === // PseudoQueue starts here // === === //
class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }

  enqueue(value) {
    this.rear.push(value);
  }

  dequeue() {
    if (this.front.isEmpty()) {
      while (!this.rear.isEmpty()) {
        this.front.push(this.rear.pop());
      }
    }

    return this.front.pop();
  }
}


// === === // Exports // === === //
module.exports = {
  'stack': Stack,
  'queue': PseudoQueue,
  'node': Node,
};

