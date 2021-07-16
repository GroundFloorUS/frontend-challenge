<template>
	<div class="home hero is-fullheight-with-navbar is-light">
		<div class="hero-body">
			<div class="home__content">
				<div class="subtitle is-2">Welcome to the</div>
				<img
					class="home__logo"
					src="./../assets/images/Groundfloor_Logo_Neg_2color_rgb.svg"
				>
				<div class="subtitle is-1">Coding Challenge</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.home {
	&__logo {
		width:35rem;
	}

	&__content {
		margin:0 auto;
		text-align:center;

		.subtitle {
			margin-bottom:.25rem !important;
		}
	}
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Home',
});
</script>
