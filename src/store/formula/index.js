import mutations from './mutations';

const state = {
  data: {
    solved: false,
    symbols: ['0'],
    steps: [],
  },
};

const namespaced = true;

export default {
  namespaced,
  state,
  mutations,
};
