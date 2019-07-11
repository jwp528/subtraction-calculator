import * as functions from '../../utils/functions';
import { mutations } from '../boilerplate';

export default {
  set: mutations.set,
  addSymbol(state, symbol) {
    if (state.data.symbols[0] === '0' && symbol !== '0') {
      state.data.symbols.shift();
      state.data.symbols.push(symbol);
    } else {
      state.data.symbols.push(symbol);
    }
  },
  setOperation(state, operation) {
    // if the last symbol is an operator. switch it. else add it
    if (functions.isOperation(state.data.symbols[state.data.symbols.length - 1])) {
      state.data.symbols.pop();
      state.data.symbols.push(operation);
    } else state.data.symbols.push(operation);
  },
  changeSign(state) {
    // if the last symbol is an operation, ignore the event
    if (functions.isOperation(state.data.symbols[state.data.symbols.length - 1])) return;

    const symbol = state.data.symbols.pop();

    state.data.symbols.push(-symbol);
  },
  removeLastSymbol(state) {
    if (state.data.symbols.length > 1) state.data.symbols.pop();
    else if (state.data.symbols[0] !== '0') state.data.symbols[0] = 0;
  },
  clearExisting(state) {
    state.data.symbols = ['0'];
  },
  clearAll(state) {
    state.data.symbols = ['0'];
    state.data.steps = [];
  },
  solve(state) {
    const result = functions.solve(state.data.symbols);
    state.data.symbols = `${result}`.split('');
    state.data.solved = true;
  },
};
