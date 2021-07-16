<template>
	<div class="home hero is-fullheight-with-navbar is-light">
		<div class="hero-body">
			<div class="home__content">
				<div>
					Welcome to the
				</div>
				<img
					class="home__logo"
					src="./../assets/images/Groundfloor_Logo_Neg_2color_rgb.svg"
				>
				<div>
					Frontend Coding Challenge
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.home {
	&__logo {
		width:35rem;
		margin-bottom:-.3rem;
	}

	&__content {
		margin:0 auto 5vh;
		text-align:center;
		font-weight: $weight-light;
		font-size:$size-2;
	}
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Home',
});
</script>
