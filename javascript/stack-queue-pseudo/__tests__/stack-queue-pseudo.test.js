'use strict';


const pseudoQ = require('../stack-queue-pseudo.js');


describe('tests for the functionality of PseudoQueue Function', () => {

  test('Can successfully push onto a stack', () => {
    let stack = new pseudoQ.stack();
    let nodeA = new pseudoQ.node('number one');
    let nodeB = new pseudoQ.node('number two');

    stack.push(nodeA);
    stack.push(nodeB);

    let test = stack.pop();

    expect(test).toEqual('number two');
  });


  test('Can successfully push multiple values onto a stack', () => {
    let stack = new pseudoQ.stack();
    let nodeA = new pseudoQ.node('numero uno');
    let nodeB = new pseudoQ.node('numero dos');
    let nodeC = new pseudoQ.node('numero tres');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    expect(stack.top.value).toEqual('numero tres');
    expect(stack.top.next.value).toEqual('numero dos');
  });


  test('Can successfully pop off the stack', () => {
    let stack = new pseudoQ.stack();
    let nodeA = new pseudoQ.node('adeen');
    let nodeB = new pseudoQ.node('dva');
    let nodeC = new pseudoQ.node('tree');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.pop();

    expect(test).toEqual('tree');
  });


  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new pseudoQ.stack();
    let nodeA = new pseudoQ.node('1');
    let nodeB = new pseudoQ.node('2');
    let nodeC = new pseudoQ.node('3');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.pop();
    let test1 = stack.pop();
    let test2 = stack.pop();

    expect(test).toEqual('3');
    expect(test1).toEqual('2');
    expect(test2).toEqual('1');
    expect(stack.top).toEqual(null);
  });


  test('Can successfully peek the next item on the stack', () => {
    let stack = new pseudoQ.stack();
    let nodeA = new pseudoQ.node('first');
    let nodeB = new pseudoQ.node('second');
    let nodeC = new pseudoQ.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.peek(nodeA);

    expect(test).toEqual('third');
  });


  test('Can successfully instantiate an empty stack', () => {
    let stack = new pseudoQ.stack();

    expect(stack.top).toEqual(null);
  });


  test('Calling pop or peek on empty stack raises exception', () => {
    let stack = new pseudoQ.stack();
    let test = stack.peek();

    expect(test).toEqual('no node in the stack!');
  });


  // test('Can successfully enqueue into a queue', () => {
  //   let queue = new pseudoQ.queue();
  //   let nodeA = new pseudoQ.node('1');
  //   let nodeB = new pseudoQ.node('2');
  //   let nodeC = new pseudoQ.node('3');

  //   queue.enqueue(nodeA);
  //   queue.enqueue(nodeB);
  //   queue.enqueue(nodeC);

  //   expect(queue.front.value).toEqual('1');

  //   expect(queue).toBeTruthy();
  // });


  // test('Can successfully enqueue multiple values into a queue', () => {
  //   let queue = new pseudoQ.queue();
  //   let nodeA = new pseudoQ.node('1');
  //   let nodeB = new pseudoQ.node('2');
  //   let nodeC = new pseudoQ.node('3');

  //   queue.enqueue(nodeA);
  //   queue.enqueue(nodeB);
  //   queue.enqueue(nodeC);

  //   expect(queue.front.value).toEqual('1');
  //   expect(queue.front.next.value).toEqual('2');
  // });


  // test('Can successfully dequeue out of a queue the expected value', () => {
  //   let queue = new pseudoQ.queue();
  //   let nodeA = new pseudoQ.node('1');
  //   let nodeB = new pseudoQ.node('2');
  //   let nodeC = new pseudoQ.node('3');

  //   queue.enqueue(nodeA);
  //   queue.enqueue(nodeB);
  //   queue.enqueue(nodeC);

  //   let test = queue.dequeue();

  //   expect(test).toEqual('1');
  // });


  // test('Can successfully peek into a queue, seeing the expected value', () => {
  //   let queue = new pseudoQ.queue();
  //   let nodeA = new pseudoQ.node('1');
  //   let nodeB = new pseudoQ.node('2');
  //   let nodeC = new pseudoQ.node('3');

  //   queue.enqueue(nodeA);
  //   queue.enqueue(nodeB);
  //   queue.enqueue(nodeC);

  //   let test = queue.peek();

  //   expect(test).toEqual('1');
  // });


  // test('Can successfully empty a queue after multiple dequeues', () => {
  //   let queue = new pseudoQ.queue();
  //   let nodeA = new pseudoQ.node('1');
  //   let nodeB = new pseudoQ.node('2');
  //   let nodeC = new pseudoQ.node('3');

  //   queue.enqueue(nodeA);
  //   queue.enqueue(nodeB);
  //   queue.enqueue(nodeC);
  //   queue.dequeue();
  //   queue.dequeue();
  //   queue.dequeue();

  //   expect(queue.front).toEqual(null);
  // });


  // test('Can successfully instantiate an empty queue', () => {
  //   let queue = new pseudoQ.queue();
  //   let nodeA = new pseudoQ.node('1');
  //   let nodeB = new pseudoQ.node('2');
  //   let nodeC = new pseudoQ.node('3');

  //   queue.enqueue(nodeA);
  //   queue.enqueue(nodeB);
  //   queue.enqueue(nodeC);
  //   queue.dequeue();
  //   queue.dequeue();
  //   queue.dequeue();

  //   expect(queue.front).toEqual(null);
  // });


  // test('Can successfully enqueue into a queue', () => {
  //   let queue = new pseudoQ.queue();

  //   expect(queue.front).toEqual(null);
  // });


  // test('Calling dequeue or peek on empty queue raises exception', () => {
  //   let queue = new pseudoQ.queue();
  //   let test = queue.peek();

  //   expect(test).toEqual('no node in the queue!');
  // });


  test('Can insert value to the beginning of the queue', () => {
    let pseudo = new pseudoQ.queue();
    let nodeA = new pseudoQ.node('1');
    let nodeB = new pseudoQ.node('2');
    let nodeC = new pseudoQ.node('3');

    pseudo.enqueue(nodeA);
    pseudo.enqueue(nodeB);
    pseudo.enqueue(nodeC);

    expect(pseudo.rear.top.value).toEqual('3');
  });


  test('Can insert into empty queue', () => {
    let pseudo = new pseudoQ.queue();
    let node = new pseudoQ.node('1');

    pseudo.enqueue(node);

    expect(pseudo.rear.top.value).toEqual('1');
  });


  test('Can insert value to the back of the queue', () => {
    let pseudo = new pseudoQ.queue();
    let nodeA = new pseudoQ.node('1');
    let nodeB = new pseudoQ.node('2');
    let nodeC = new pseudoQ.node('3');

    pseudo.enqueue(nodeA);
    pseudo.enqueue(nodeB);
    pseudo.enqueue(nodeC);

    expect(pseudo.front.top).toEqual(null);
  });


});
