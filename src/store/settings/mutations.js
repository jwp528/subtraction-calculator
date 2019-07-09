export default {
  set(state, payload) {
    state.data = { ...payload };
  },
  update(state, payload) {
    state.data = { ...state.data, ...payload };
  }
};
