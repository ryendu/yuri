<template>
	<footer>
		<div class="content">
			This website was handcrafted with ❤️ by <a href="https://github.com/ryendu" target="_blank">Ryan Du</a>.

		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer'	
}
</script>
<style scoped>
	footer {
		margin: 0;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100px;
		width: 100%;
		background: #0D0F12;
		display: flex;
		justify-content: center;
	}
	.content {
		padding-top: 2rem;
		color: white;
	}
	body {
		padding-bottom: 100px;
	}
	.content a {
		text-decoration: none;
		color: white;
		font-weight: 700;
	}
</style>