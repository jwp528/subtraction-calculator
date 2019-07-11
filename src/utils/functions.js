// constants
const operations = ["+", "-", "÷", "x"];

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
  if (dividend === 0) return 0;
  if (divisor === 0) {
    return 'ERROR';
  }

  let quotient = 0;
  let remainder = dividend;
  let decimal = 0;

  while (remainder >= divisor) {
    remainder -= divisor;
    quotient -= -1;
  }

  while (remainder > 0) {
    if (decimal.length > 12) {
      break;
    }

    remainder = multiply(remainder, 10);

    let currentDecimal = 0;
    while (remainder >= divisor) {
      remainder -= divisor;
      currentDecimal -= -1;
    }
    decimal = decimal === 0 ? `${currentDecimal}` : `${decimal}${currentDecimal}`;
  }

  if (decimal > 0) {
    return parseFloat(`${quotient}.${decimal}`);
  }
  return quotient;

  // return dividend / divisor;
};

const translationTable = {
  '÷': divide,
  'x': multiply,
  '+': add,
  '-': subtract,
};

const solve = (equation, sum = 0, leftSymbol = "") => {
  try {
    let operator = sum > 0 ? sum : "";
    let operand = "";
    let operation = "";

    let symbol = leftSymbol !== "" ? leftSymbol : equation.shift();

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

      if (isNaN(symbol) && symbol !== ".") done = true;
    }

    // operate
    if (operator !== "" && operand !== "" && operation !== "") {
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

export { subtract, add, multiply, divide, isOperation, solve };
