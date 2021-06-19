# Singly Linked List
<!-- Short summary or background information -->

Introduction to Linked List. Adding nodes with values, changing current node, testing functionality.

## Challenge
<!-- Description of the challenge -->


> Can successfully instantiate an empty linked list

> Can properly insert into the linked list

> The head property will properly point to the first node in the linked list

> Can properly insert multiple nodes into the linked list

> Will return true when finding a value within the linked list that exists
 
> Will return false when searching for a value in the linked list that does not exist

> Can properly return a collection of all the values that exist in the linked list


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

#### Approach:
My approach was  following along with lecture. To write tests, I essentially just re-wrote what I had in my linked-list.js, but in a way that would `test` and `expect`.

#### Big O:
`includes()` is O(N) - `insert()` is O(1) - `toString()` is O(N)

## API
<!-- Description of each method publicly available to your Linked List -->

`.insert` inserts a node
`.toEqual`  compares value to expected value


## Reference

I used Jacob Knaack's (of Code Fellows) demo code as a guide to writing my code

