import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from './util/hot-reload';

Vue.use(VueRouter);

if (process.env.ENV === 'development' && module.hot) {
  // do sth here ..
}

export const createRoutes: () => RouteConfig[] = () => [

];

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });