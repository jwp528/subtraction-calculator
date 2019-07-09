// constants
const operations = ['+', '-', '÷', 'x'];

// checks
function isOperation(symbol) {
  return operations.indexOf(symbol) !== -1;
}

// calculations

const subtract = (a, b) => a - b;
const add = (a, b) => a - -b;

const multiply = (base, factor) => {
  let product = base;
  for (let i = 1; i < parseInt(factor); ++i) {
    product -= -base;
  }
  return product;
};

const divide = (dividend, divisor) => {
  if (dividend == 0 || divisor == 0) { return 'ERROR'; }

  let quotient = 0;
  let remainder = dividend;

  while (remainder >= divisor) {
    remainder -= divisor;
    ++quotient;
  }

  if (remainder > 0) { return parseFloat(`${quotient}.${remainder}`); }

  return quotient;
};

const translationTable = {
  ÷: divide,
  x: multiply,
  '+': add,
  '-': subtract,
};


const solve = (equation, sum = 0, leftSymbol = '') => {
  try {
    let operator = sum > 0 ? sum : '';
    let operand = '';
    let operation = '';

    let symbol = leftSymbol !== '' ? leftSymbol : equation.shift();

    // fill operator
    while (!isOperation(symbol) && equation.length > 0) {
      operator += symbol;
      symbol = equation.shift();
    }

    // assign operation
    operation = symbol;

    symbol = equation.shift();

    // fill operand
    let done = false;
    while (!done) {
      operand += symbol;
      symbol = equation.shift();

      if (isNaN(symbol)) done = true;
    }

    // operate
    if (operator !== '' && operand !== '' && operation !== '') {
      sum = translationTable[operation](parseFloat(operator), parseFloat(operand));
      operation = symbol;

      if (equation.length > 0) {
        return solve(equation, sum, symbol);
      }
    }

    return sum;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export {
  subtract,
  add,
  multiply,
  divide,
  isOperation,
  solve,
};
