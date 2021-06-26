'use strict';


const stackAndQueue = require('../stack-and-queue.js');


describe('tests for the functionality of Stack Function and Queue Function', () => {

  test('Can successfully push onto a stack', () => {
    let stack = new stackAndQueue.stack();
    let nodeA = new stackAndQueue.node('number one');
    let nodeB = new stackAndQueue.node('number two');

    stack.push(nodeA);
    stack.push(nodeB);

    let test = stack.pop();

    expect(test).toEqual('number two');
  });


  test('Can successfully push multiple values onto a stack', () => {
    let stack = new stackAndQueue.stack();
    let nodeA = new stackAndQueue.node('numero uno');
    let nodeB = new stackAndQueue.node('numero dos');
    let nodeC = new stackAndQueue.node('numero tres');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    expect(stack.top.value).toEqual('numero tres');
    expect(stack.top.next.value).toEqual('numero dos');
  });


  test('Can successfully pop off the stack', () => {
    let stack = new stackAndQueue.stack();
    let nodeA = new stackAndQueue.node('adeen');
    let nodeB = new stackAndQueue.node('dva');
    let nodeC = new stackAndQueue.node('tree');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.pop();

    expect(test).toEqual('tree');
  });


  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new stackAndQueue.stack();
    let nodeA = new stackAndQueue.node('1');
    let nodeB = new stackAndQueue.node('2');
    let nodeC = new stackAndQueue.node('3');

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
    let stack = new stackAndQueue.stack();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.peek(nodeA);

    expect(test).toEqual('third');
  });


  test('Can successfully instantiate an empty stack', () => {
    let stack = new stackAndQueue.stack();

    expect(stack.top).toEqual(null);
  });


  test('Calling pop or peek on empty stack raises exception', () => {
    let stack = new stackAndQueue.stack();
    let test = stack.peek();

    expect(test).toEqual('no node in the stack!');
  });


  test('Can successfully enqueue into a queue', () => {
    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('1');
    let nodeB = new stackAndQueue.node('2');
    let nodeC = new stackAndQueue.node('3');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);

    expect(queue.front.value).toEqual('1');

    expect(queue).toBeTruthy();
  });


  test('Can successfully enqueue multiple values into a queue', () => {
    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('1');
    let nodeB = new stackAndQueue.node('2');
    let nodeC = new stackAndQueue.node('3');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);

    expect(queue.front.value).toEqual('1');
    expect(queue.front.next.value).toEqual('2');
  });


  test('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('1');
    let nodeB = new stackAndQueue.node('2');
    let nodeC = new stackAndQueue.node('3');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);

    let test = queue.dequeue();

    expect(test).toEqual('1');
  });


  test('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('1');
    let nodeB = new stackAndQueue.node('2');
    let nodeC = new stackAndQueue.node('3');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);

    let test = queue.peek();

    expect(test).toEqual('1');
  });


  test('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('1');
    let nodeB = new stackAndQueue.node('2');
    let nodeC = new stackAndQueue.node('3');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toEqual(null);
  });


  test('Can successfully instantiate an empty queue', () => {
    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('1');
    let nodeB = new stackAndQueue.node('2');
    let nodeC = new stackAndQueue.node('3');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toEqual(null);
  });


  test('Can successfully enqueue into a queue', () => {
    let queue = new stackAndQueue.queue();

    expect(queue.front).toEqual(null);
  });


  test('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new stackAndQueue.queue();
    let test = queue.peek();

    expect(test).toEqual('no node in the queue!');
  });
});
