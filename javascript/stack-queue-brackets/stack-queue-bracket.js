'use strict';

function validateBrackets(value) {

  let stack = [];
  let openBracket = ['(', '[', '{'];
  let closedBracket = [')', ']', '}'];

  for (let i = 0; i < value.length; i += 1) {

    if (openBracket.indexOf(value[i]) >= 0) {
      stack.push(value[i]);

    } else if (closedBracket.indexOf(value[i]) !== openBracket.indexOf(stack.pop())) {
      return false;
    }
  }


  if (stack.length > 0) {
    return false;
  }

  return true;
}

module.exports = validateBrackets;
