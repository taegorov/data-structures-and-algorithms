'use strict';


const quickSort = require('../quick-sort.js');

describe('Testing merge sort function', () => {

  test('Sorts an array, main example', () => {
    let array = [8, 4, 23, 42, 16, 15];
    let test = quickSort(array, 0, 5);

    expect(test).toEqual([4, 8, 15, 16, 23, 42]);
  });


  test('Sorts an array, reverse-sorted', () => {
    let array = [20, 18, 12, 8, 5, -2];
    let test = quickSort(array, 0, 5);

    expect(test).toEqual([-2, 5, 8, 12, 18, 20]);
  });


  test('Sorts an array, few uniques', () => {
    let array = [5, 12, 7, 5, 5, 7];
    let test = quickSort(array, 0, 5);

    expect(test).toEqual([5, 5, 5, 7, 7, 12]);
  });


  test('Sorts an array, nearly-sorted', () => {
    let array = [2, 3, 5, 7, 13, 11];
    let test = quickSort(array, 0, 5);

    expect(test).toEqual([2, 3, 5, 7, 11, 13]);
  });

});
