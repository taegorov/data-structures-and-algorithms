'use strict';


function leftJoin(synonymHashTable, antonymHashTable) {

  const array1 = [];

  for (let i = 0; i < synonymHashTable.buckets.length; i += 1) {
    const array2 = [];

    if (synonymHashTable.buckets[i] !== undefined) {

      let key = (Object.keys(synonymHashTable.buckets[i].head.value)[0]);
      array2.push(key);
      array2.push(synonymHashTable.buckets[i].head.value[key]);
      console.log('🐶', array2);

      if (antonymHashTable.contains(key)) {
        array2.push(antonymHashTable.get(key));

      } else {
        array2.push(null);
      }

      array1.push(array2);
    }
  }

  return array1;
}


module.exports = leftJoin;
