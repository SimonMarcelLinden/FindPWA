import Vue from 'vue'
import App from './app.view.vue';
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n';

import SimplifyVue from 'simplify-vue'
import 'simplify-css-package';
import 'simplify-icon';

Vue.config.productionTip = false
Vue.use(SimplifyVue);

new Vue({
	router,
	store,
    i18n,
	render: h => h(App)
}).$mount('#app')
