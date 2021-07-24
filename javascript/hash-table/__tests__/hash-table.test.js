'use strict';


let Hashtable = require('../hash-table');
let hash = new Hashtable(1024);


describe('Hashtable tests', () => {

  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    hash.add('key', 'value');
    expect(hash.contains('key')).toEqual(true);

  });


  test('Retrieving based on a key returns the value stored', () => {
    expect(hash.get('key')).toStrictEqual('value');
  });


  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hash.contains('non existent key')).toStrictEqual(false);
  });


  test('Successfully handle a collision within the hashtable', () => {
    expect(hash.add('key', 'another key')).toStrictEqual(undefined);
  });


  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(hash.get('key')).toEqual('value');
  });


  test('Successfully hash a key to an in-range value', () => {
    expect(hash.hash('hashed key')).toBeLessThanOrEqual(1024);
  });

});
