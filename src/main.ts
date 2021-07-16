import Buefy from 'buefy';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/app.scss';

const buefyConfig = {
	defaultIconPack: 'fas',
	defaultToastPosition: 'is-bottom-right',
	defaultToastDuration: 2000,
	materialDesignIcons: false,
	defaultIconComponent: 'font-awesome-icon',
};

Vue.use(Buefy, buefyConfig);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
