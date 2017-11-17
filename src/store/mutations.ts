import { MutationTree, Mutation } from 'vuex';
import { State } from './state';
import {
  SET_FILTERTEXT
} from './types';

export const mutations = {
  [SET_FILTERTEXT](state: State, filterText: string) {
    state.filterText = filterText;
  }
} as MutationTree<State>;
