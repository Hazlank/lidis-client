import Vue from 'vue';
import VueRouter from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { store } from './store';
import { createRouter } from './router';
import { Getter } from 'vuex-class';

const App = () => import('./components/app').then(({ App }) => App);
const layoutComponent = () => import('./components/layout').then(({ LayoutComponent }) => LayoutComponent);
const searchComponent = () => import('./components/search').then(({ SearchComponent }) => SearchComponent);
const editorComponent = () => import('./components/editor').then(({ EditorComponent }) => EditorComponent);
const connectComponent = () => import('./components/connect').then(({ ConnectComponent }) => ConnectComponent);

import './sass/main.scss';

if (process.env.ENV === 'development' && module.hot) {
  const appModuleId = './components/app';
  const layoutModuleId = './components/layout';
  const searchModuleId = './components/search';
  const editorModuleId = './components/editor';
  const connectModuleId = './components/connect';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(appModuleId, App,
    module.hot.accept('./components/app', () => reload(appModuleId, (<any>require('./components/app')).App)));

  makeHot(layoutModuleId, layoutComponent,
    module.hot.accept('./components/layout', () => reload(layoutModuleId, (<any>require('./components/layout')).LayoutComponent)));

  makeHot(searchModuleId, searchComponent,
    module.hot.accept('./components/search', () => reload(searchModuleId, (<any>require('./components/search')).SearchComponent)));

  makeHot(editorModuleId, editorComponent,
    module.hot.accept('./components/editor', () => reload(editorModuleId, (<any>require('./components/editor')).EditorComponent)));

    makeHot(connectModuleId, connectComponent,
      module.hot.accept('./components/connect', () => reload(connectModuleId, (<any>require('./components/connect')).ConnectComponent)));

}


new Vue({
  el: '#app-main',
  store: store,
  router: createRouter(),
  components: { App }
});
