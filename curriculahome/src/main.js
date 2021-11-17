import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore';

import VueTranslate from 'vue-translate-plugin';
Vue.use(VueTranslate);


Vue.config.productionTip = false
Vue.use(VueFirestore);

new Vue({
  render: h => h(App),
}).$mount('#app')
