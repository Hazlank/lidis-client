import Vue from 'vue';
import Vuex from 'vuex';

import { State } from './state';
import { mutations } from './mutations';
import { getters } from './getters';
// import { actions } from './actions'


declare namespace window {
  export const Vue: Vue;
}

if (typeof window === 'undefined' || !window.Vue) {
  // [vuex] already installed. Vue.use(Vuex) should be called only once.
  Vue.use(Vuex);
}

const state: State = {
  // 用于更新视图的媒体对象
  filterText: '',
  // 是否显示连接弹窗
  showConnect: true
};

export const store = new Vuex.Store<State>({
  state,
  getters,
  // actions,
  mutations,
});

export default store;
