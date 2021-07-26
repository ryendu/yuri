<template>
	<div class="nav-bar">
		<div class="spacer-fg5"></div>
		<div class="nav-item">
			<router-link to="/">Home</router-link>
		</div>
		<div class="nav-item">
			<router-link to="/about">About</router-link>
		</div>
		<div class="nav-item">
			<router-link to="/blog">Blog</router-link>
		</div>
		<div class="nav-item">
			<router-link to="/contact">Contact</router-link>
		</div>
	</div>
</template>

<script>

export default {
	name: "NavBar",
}
</script>

<style scoped>
	.nav-bar {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.nav-item {
		flex-grow: 1;
		font-weight: 500;
		color: white;
	}
	.nav-item a, .nav-item a:visited{
		text-decoration: none;
		color: white;
		transition: all 0.1s ease-in-out;
	}
	.spacer-fg5{
		flex-grow: 5;
	}
	.nav-item a:hover {
		color: cyan;
		font-size: 1.1rem;
		
	}
</style>