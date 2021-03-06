import { MutationTree, Mutation } from 'vuex';
import { State } from './state';
import {
  SET_FILTERTEXT,
  TOGGLE_CONNECT
} from './types';

export const mutations = {
  [SET_FILTERTEXT](state: State, filterText: string) {
    state.filterText = filterText;
  },
  [TOGGLE_CONNECT](state: State) {
    state.showConnect = !state.showConnect;
  }
} as MutationTree<State>;
