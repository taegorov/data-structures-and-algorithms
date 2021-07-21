# Merge Sort

Merge sort is a divide and conquer algorithm that repeatedly splits an array of numbers and compares its individual values. 

## Pseudocode

```js

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left


```

## Walkthrough

![whiteboard](./merge-sort.jpg)

In the first pass through the array, we determine the middle of the array (`mid`), then slice the left and right side of the array. 

If the array length is greater than 1, We continue working through the array, splitting it until it is broken up into individual number values (arrays of 1). 

At this point, we will merge the arrays by iterating through the left and right sides with a while loop. We then set the remaining entries in the array to equal the remaining values in the left and right, respectively.


## Efficiency

Time: O(log n)

Space: O(n)