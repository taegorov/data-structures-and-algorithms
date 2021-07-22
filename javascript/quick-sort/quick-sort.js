'use strict';


function quickSort(arr, left, right) {

  if (left < right) {

    let position = partition(arr, left, right);

    if (left < position - 1) {
      quickSort(arr, left, position - 1);
    }
    if (position < right) {
      quickSort(arr, position, right);
    }
  }

  return arr;
}

// I was helped on this section by humanwhocodes.com, see README for full link:
function partition(arr, left, right) {

  let pivot = arr[Math.floor((right + left) / 2)],

    i = left,
    j = right;
  console.log('😯 i value =', i);

  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1;
    }
    while (arr[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {

      swap(arr, i, j);
      i += 1;
      j -= 1;
    }
  }

  return i;
}

function swap(arr, left, right) {

  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}


module.exports = quickSort;
