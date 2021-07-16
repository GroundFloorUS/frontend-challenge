<template>
	<div class="gallery">
		<div class="hero is-medium is-primary">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-1">
						Carousel Challenge
					</h1>
					<div class="subtitle is-3">
						Or "How to deal with too many Murrays"
					</div>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="container">
				<h2 class="title">
					Your Mission
				</h2>
				<div class="content">
					<p>
						Your mission is simple. Build a carousel to contain the <a
							href="http://www.fillmurray.com/"
							target="_blank"
						>many faces of Bill Murray</a>, and build it from scratch. You <strong>may not</strong> use any of the excellent carousel libraries out there. That would be cheating. However, using other parts of Buefy/Bulma like icons, buttons etc is fine.
					</p>
				</div>
				<h3 class="subtitle is-3">
					Acceptance Criteria
				</h3>
				<div class="content">
					<ul>
						<li>The carousel must be its own component.</li>
						<li>The carousel must support n images, passed to the component as a prop.</li>
						<li>Each image should be rendered in a 4:3 aspect ratio, regardless of the size or proportions of the original images.</li>
						<li>The carousel and its images must fill the container.</li>
						<li>There should be controls for next and previous. If the user hits next on the last image they should be taken to the first, if they hit previous on the first image they should go to the last.</li>
						<li>Transitions between images should be animated using a sliding effect, revealing the next image below it.</li>
						<li>Optional: Add indicator dots to show where you are in the order.</li>
						<li>Feel free to remove or comment out this view and reuse it.</li>
					</ul>
				</div>
				<h3 class="subtitle is-3">
					Useful icons
				</h3>
				<div class="mb-5">
					<b-icon icon="chevron-left" />
					<b-icon icon="chevron-right" />
					<b-icon icon="dot-circle" />
				</div>
				<h3 class="subtitle is-3">
					Your Murrays
				</h3>
				<div>
					<img
						class="carousel__murray"
						v-for="(murray, murrayIndex) in murrays"
						:key="murrayIndex"
						:src="murray.url"
						:alt="murray.label"
					>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.gallery {
	.content {
		max-width:700px;
	}

	&__murray {
		max-width:100%;
		height:auto;
	}
}
</style>

<script lang="ts">
import Vue from 'vue';

export interface Murray {
	label: string;
	url: string;
}

export default Vue.extend({
	name: 'Gallery',
	data() {
		return {
			murrays: [
				{
					url: 'https://www.fillmurray.com/420/300',
					label: 'Bill Murry with delicious fish',
				},
				{
					url: 'https://www.fillmurray.com/600/600',
					label: 'Aquatic Bill Murry',
				},
				{
					url: 'https://www.fillmurray.com/300/800',
					label: 'A sliver of Bill Murry',
				},
				{
					url: 'https://www.fillmurray.com/603/800',
					label: 'Turtlenecked Bill Murry',
				},
				{
					url: 'https://www.fillmurray.com/1000/505',
					label: 'Sophisticated Bill Murry',
				},
			] as Murray[],
		};
	},
});
</script>
