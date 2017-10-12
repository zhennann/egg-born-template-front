/*
* @Author: zhennann
* @Date:   2017-09-13 11:29:09
* @Last Modified by:   zhennann
* @Last Modified time: 2017-09-13 17:33:26
*/

import Vue from 'vue';
import mock from './mock.vue';

export default Vue.prototype.$meta.provider === 'framework7' ? {} : {
  'f7-page': mock,
  'f7-navbar': mock,
  'f7-block': mock,
};
