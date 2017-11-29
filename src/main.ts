import Vue from 'vue';
import VueRouter from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { store } from './store';
import { createRouter } from './router';
import { Getter } from 'vuex-class';

const App = () => import('./components/app').then(({ App }) => App);

import './sass/main.scss';

if (process.env.ENV === 'development' && module.hot) {
  const appModuleId = './components/app';
  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(appModuleId, App,
    module.hot.accept('./components/app', () => reload(appModuleId, (<any>require('./components/app')).App)));
}


new Vue({
  el: '#app-main',
  store: store,
  router: createRouter(),
  components: { App }
});
