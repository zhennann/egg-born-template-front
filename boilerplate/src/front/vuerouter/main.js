import Router from 'vue-router';
import axios from 'axios';

// eslint-disable-next-line
import AppStyles from '../css/app.css';

import App from './app';
import Home from './home';
import config from '../config/config.js';
import locales from '../config/locales.js';

let Vue;

// install
function install(_Vue, cb) {
  if (Vue) return console.error('already installed.');

  Vue = _Vue;

  // router
  Vue.use(Router);

  const router = new Router({
    routes: [{
      path: '/',
      component: Home,
      meta: { inject: true },
    }],
  });

  // return options
  return cb({
    meta: {
      provider: 'vuerouter',
    },
    store: null,
    axios,
    config,
    locales,
    options: {
      router,
      components: {
        app: App,
      },
    },
  });
}

// export
export default {
  install,
};
