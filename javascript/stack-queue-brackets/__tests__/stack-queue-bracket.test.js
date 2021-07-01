'use strict';


const brackets = require('../stack-queue-bracket.js');

describe('tests for multi bracket validation', () => {

  test('brackets should match', () => {
    const test = brackets('{}');

    expect(test).toBeTruthy();
  });


  test('brackets should match', () => {
    const test = brackets('{}(){}');

    expect(test).toBeTruthy();
  });


  test('brackets should match', () => {
    const test = brackets('()[[Extra Characters]]');

    expect(test).toBeTruthy();
  });


  test('brackets should match', () => {
    const test = brackets('(){}[[]]');

    expect(test).toBeTruthy();
  });


  test('brackets should match', () => {
    const test = brackets('{}{Code}[Fellows](())');

    expect(test).toBeTruthy();
  });


  test('should return false for mismatched brackets', () => {
    const test = brackets('[({}]');

    expect(test).toBeFalsy();
  });


  test('should return false for mismatched brackets', () => {
    const test = brackets('(](');

    expect(test).toBeFalsy();
  });


  test('should return false for mismatched brackets', () => {
    const test = brackets('{(})');

    expect(test).toBeFalsy();
  });

});
