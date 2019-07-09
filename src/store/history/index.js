import { state } from '../boilerplate';
import mutations from './mutations';

const namespaced = true;

export default {
  namespaced,
  ...state,
  mutations,
};
