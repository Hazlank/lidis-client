import Vue from 'vue';
import VueRouter from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { store } from './store';
import { createRouter } from './router';


const layoutComponent = () => import('./components/layout').then(({ LayoutComponent }) => LayoutComponent);
const searchComponent = () => import('./components/search').then(({ SearchComponent }) => SearchComponent);


import './sass/main.scss';
import { request } from 'http';

if (process.env.ENV === 'development' && module.hot) {
  const layoutModuleId = './components/layout';
  const searchModuleId = './components/search';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(layoutModuleId, layoutComponent,
    module.hot.accept('./components/layout', () => reload(layoutModuleId, (<any>require('./components/layout')).LayoutComponent)));

  makeHot(searchModuleId, searchComponent,
    module.hot.accept('./components/search', () => reload(searchModuleId, (<any>request('./components/search')).SearchComponent)));
}

new Vue({
  el: '#app-main',
  store: store,
  router: createRouter(),
  components: {
    'layout': layoutComponent,
    'search': searchComponent
  }
});
