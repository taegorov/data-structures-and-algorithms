'use strict';


function Animal(type) {
  this.type = type;
}


// === === Constructor === === //
class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }


  // === === enqueue here === === //
  enqueue(animal) {

    if (animal.type === 'dog') {

      if (this.isEmpty()) {
        this.front = animal;
        this.rear = animal;

      } else {
        this.rear.next = animal;
        this.rear = animal;
      }
    } else if (animal.type === 'cat') {

      if (this.isEmpty()) {
        this.front = animal;
        this.rear = animal;

      } else {
        this.rear.next = animal;
        this.rear = animal;
      }

    } else {
      return 'enter cat or dog';
    }
  }


  // === === dequeue here === === //
  dequeue(pref) {
    if (pref === 'dog') {

      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      return temp.type;

    } else if (pref === 'cat') {

      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      return temp.type;

    } else {
      return null;
    }
  }

  // === === isEmpty creator === === //
  isEmpty() {
    return this.front === null;
  }
}


// === === exports === === //
module.exports = { 'animalShelter': AnimalShelter, 'animal': Animal, };
