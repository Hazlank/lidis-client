import Vue from 'vue';
import VueRouter from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { createRouter } from './router';

const layoutComponent = () => import('./components/layout').then(({ LayoutComponent }) => LayoutComponent);

import './sass/main.scss';

if (process.env.ENV === 'development' && module.hot) {
  const layoutModuleId = './components/layout';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(layoutModuleId, layoutComponent,
    module.hot.accept('./components/layout', () => reload(layoutModuleId, (<any>require('./components/layout')).LayoutComponent)));
}

new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    'layout': layoutComponent
  }
});
