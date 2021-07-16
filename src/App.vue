<template>
	<div class="app">
		<b-navbar type="is-dark">
			<template #brand>
				<b-navbar-item
					tag="router-link"
					:to="{ path: '/' }"
				>
					<img
						class="app-navbar__logo"
						src="./assets/images/Groundfloor_symbol_neg.svg"
						alt="Groundfloor Logo"
					>
					<span class="app-navbar__label">Coding Challenge</span>
				</b-navbar-item>
			</template>
		</b-navbar>
		<div class="app__main">
			<div class="app__sidebar">
				<b-menu>
					<b-menu-list>
						<router-link
							v-slot="{ href, isExactActive }"
							:to="{ name: namedRoutes.Home.name }"
						>
							<b-menu-item
								icon="hand-paper"
								label="Welcome"
								tag="router-link"
								:to="href"
								:active="isExactActive"
							/>
						</router-link>
						<router-link
							v-slot="{ href, isExactActive }"
							:to="{ name: namedRoutes.Carousel.name }"
						>
							<b-menu-item
								icon="horse"
								label="Carousel"
								tag="router-link"
								:to="href"
								:active="isExactActive"
							/>
						</router-link>
					</b-menu-list>
				</b-menu>
			</div>
			<div class="app__content">
				<router-view class="app__view" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.app {
	display:flex;
	flex-direction: column;
	align-items: stretch;
	min-height:100vh;

	&-navbar {
		&__logo {
			width:36px;
			max-height:initial !important;
		}

		&__label {
			margin-left:.75rem;
			font-size:$size-5;
			font-weight:$weight-medium;
		}
	}

	&__main {
		flex:1 1 auto;
		display:flex;
		flex-direction:row;
		align-items: stretch;
	}

	&__sidebar {
		flex:0 0 auto;
		width:14rem;
		padding:1.5rem .75rem;
		background:$white-bis;
	}

	&__content {
		flex:1 1 auto;
	}
}
</style>

<script lang="ts">
import Vue from 'vue';

import { namedRoutes } from '@/router';

export default Vue.extend({
	name: 'App',
	data() {
		return {
			namedRoutes,
		};
	},
});
</script>
