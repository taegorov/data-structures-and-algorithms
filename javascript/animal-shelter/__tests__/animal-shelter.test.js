'use strict';

// === === imports === === //
const animal = require('../animal-shelter.js');


// === === animals === === //
const dog = new animal.animal('dog');
const cat = new animal.animal('cat');
const chinchilla = new animal.animal('chinchilla');


// === === tests start here === === //
describe('tests for animal shelter code', () => {

  const animalShelter = new animal.animalShelter();

  animalShelter.enqueue(cat);
  animalShelter.enqueue(dog);
  animalShelter.enqueue(dog);
  animalShelter.enqueue(cat);
  animalShelter.enqueue(chinchilla);
  animalShelter.enqueue(cat);
  animalShelter.enqueue(dog);


  test('tests if a cat is dequeued', () => {

    expect(animalShelter.dequeue('cat')).toEqual('cat');
  });


  test('tests if a dog is dequeued', () => {

    expect(animalShelter.dequeue('dog')).toEqual('dog');
  });


  test('tests if only dogs and cats are in the queue', () => {

    expect(animalShelter.enqueue(chinchilla)).toEqual('enter cat or dog');
  });


  // test('tests if cat is allowed into the queue', () => {
  //   console.log(animalShelter);
  //   animalShelter.enqueue('cat');
  //   expect(animalShelter.enqueue('cat')).toEqual('cat');
  // });

});
