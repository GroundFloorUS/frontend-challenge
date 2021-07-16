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
						<b-menu-item
							icon="hand-paper"
							label="Welcome"
						/>
					</b-menu-list>
				</b-menu>
			</div>
			<router-view class="app__view" />
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
		flex:1 0 auto;
		display:flex;
		flex-direction:row;
		align-items: stretch;
	}

	&__sidebar {
		width:14rem;
		padding:2rem 1.5rem;
		background:$white-bis;
	}

	&__view {
		flex:1 1 auto;
	}
}
</style>
