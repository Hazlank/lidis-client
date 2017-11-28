import { GetterTree } from 'vuex';
import { State } from './state';

export const filterText = (state: State): string => state.filterText;
export const showConnect = (state: State): boolean => state.showConnect;

export const getters = {
  filterText,
  showConnect
} as GetterTree<State, any>;
