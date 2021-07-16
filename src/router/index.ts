import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Carousel from '@/views/Carousel.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

export const namedRoutes = {
	Home: {
		path: '/',
		name: 'Home',
		component: Home,
	},
	Carousel: {
		path: '/carousel',
		name: 'Carousel',
		component: Carousel,
	},
};

const routes: Array<RouteConfig> = [
	namedRoutes.Home,
	namedRoutes.Carousel,
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
