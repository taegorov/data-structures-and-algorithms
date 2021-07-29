'use strict';


const Hashtable = require('../../hash-table/hash-table.js');
const leftJoin = require('../left-join.js');

// === === hashtable creation === === //
let synonymHashTable = new Hashtable(50);
let antonymHashTable = new Hashtable(50);

synonymHashTable.add('fond', 'enamored');
synonymHashTable.add('wrath', 'anger');
synonymHashTable.add('diligent', 'employed');
synonymHashTable.add('outfit', 'garb');
synonymHashTable.add('guide', 'usher');

antonymHashTable.add('fond', 'averse');
antonymHashTable.add('wrath', 'delight');
antonymHashTable.add('diligent', 'idle');
antonymHashTable.add('guide', 'follow');
antonymHashTable.add('flow', 'jam');


describe('Testing left join', () => {

  test('Outputs a keyword and its value from both the Synonym Hashtable and Antonym Hashtable', () => {
    console.log('🐷', leftJoin(synonymHashTable, antonymHashTable));

    expect(leftJoin(synonymHashTable, antonymHashTable)).toStrictEqual([
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null],
    ]);
  });

});
