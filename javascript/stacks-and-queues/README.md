# Stacks and Queues
<!-- Short summary or background information -->

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Challenge
<!-- Description of the challenge -->



- Can successfully push onto a stack
- Can successfully push multiple values onto a stack
- Can successfully pop off the stack
- Can successfully empty a stack after multiple pops
- Can successfully peek the next item on the stack
- Can successfully instantiate an empty stack
- Calling pop or peek on empty stack raises exception
- Can successfully enqueue into a queue
- Can successfully enqueue multiple values into a queue
- Can successfully dequeue out of a queue the expected value
- Can successfully peek into a queue, seeing the expected value
- Can successfully empty a queue after multiple dequeues
- Can successfully instantiate an empty queue
- Calling dequeue or peek on empty queue raises exception


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

#### Approach:
My approach was  following along with lecture. Jacob Knaack walked us through the process of detailing an algorithm, a whiteboard, and ultimately code. It helped formulate a way to approach the problem.

#### Big O:
`includes()` is O(N) - `insert()` is O(1) - `toString()` is O(N)

## API
<!-- Description of each method publicly available to your Linked List -->

`.insert` inserts a node
`.toEqual`  compares value to expected value
`.insertBefore` inserts a node *before* a specified part of a list
`.insertAfter` inserts a node *after* a specified part of a list


## Reference

I used Jacob Knaack's (of Code Fellows) demo code as a guide to writing my code

