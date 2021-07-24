'use strict';


// === Node Constructor === //
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// === LinkedList Constructor === //
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    // traverse to the tail and add to the end.
    let current = this.head;
    let previous = null;
    while (current) {
      previous = current;
      current = current.next;
    }
    // current is null, how do we add to the list.
    previous.next = new Node(value);
  }
}


// === HashTable Constructor === //
class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let arrayOfCharacters = key.split(''); //['J', 'a', 'c','o', 'b']
    let sumOfAsciiValues = arrayOfCharacters.reduce((acc, char) => {
      return acc + char.charCodeAt(0); // 0 + 74 + 99 + 98 .. 478
    }, 0);

    return (sumOfAsciiValues * 599) % this.size; // 201
  }

  add(key, value) {
    let hash = this.hash(key);

    if (!this.buckets[hash]) this.buckets[hash] = new LinkedList();

    let entry = { [key]: value };
    this.buckets[hash].insert(entry);

    // return entry; // returning breaks 'Successfully handle a collision within the hashtable' test
  }

  contains(key) {
    let hash = this.hash(key);
    return this.buckets[hash] ? true : false;
  }


  get(key) {
    let hash = this.hash(key);
    return this.buckets[hash].head.value[key];
  }
}


// === Export === //
module.exports = HashTable;
