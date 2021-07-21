'use strict';

const mergeSort = require('../merge-sort.js');


describe('Tests for merge sort', () => {

  test('Sorts an array, main example', () => {
    let sampleArray = [8, 4, 23, 42, 16, 15];
    let test = mergeSort(sampleArray);

    expect(test).toEqual([4, 8, 15, 16, 23, 42]);
  });


  test('Sorts an array, reverse-sorted', () => {
    let sampleArray = [20, 18, 12, 8, 5, -2];
    let test = mergeSort(sampleArray);

    expect(test).toEqual([-2, 5, 8, 12, 18, 20]);
  });


  test('Sorts an array, few uniques', () => {
    let sampleArray = [5, 12, 7, 5, 5, 7];
    let test = mergeSort(sampleArray);

    expect(test).toEqual([5, 5, 5, 7, 7, 12]);
  });


  test('Sorts an array, nearly-sorted', () => {
    let sampleArray = [2, 3, 5, 7, 13, 11];
    let test = mergeSort(sampleArray);

    expect(test).toEqual([2, 3, 5, 7, 11, 13]);
  });

});
