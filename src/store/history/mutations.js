export default {
  set: (state, { data }) => {
    state.data = { ...data };
  },
  update(state, { data }) {
    state.data = { ...state.data, ...data };
  },
};
