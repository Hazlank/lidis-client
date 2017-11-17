import { GetterTree } from 'vuex';
import { State } from './state';

export const filterText = (state: State): string => state.filterText;

export const getters = {
  filterText
} as GetterTree<State, any>;
