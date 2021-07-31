<template>
	<div class="page" v-on:click="test">
		<h1 class="card-title">{{ blogObj.title }}</h1>
		<h6 class="author-name">by {{blogObj.author}}</h6>
		<p class="date">published {{blogObj.date}}</p>
		<p class="card-blog-content">{{blogObj.content}}</p>
	</div>
</template>

<script>
export default {
	name: 'BlogPage',
	props: {
		blog: Object,
	},
	data() {
		return {
			blogObj: JSON.parse(this.blog)
		}
	}
}
</script>

<style scoped>
	* {
		text-align: left;
	}
	.date {
		font-size: 1rem;
		margin-top: 2px;
		font-weight: 300;
	}

	.card-title {
		margin-bottom: spx;
	}
	.author-name {
		margin-top: 2px;
		margin-bottom: 2px;
	}
	.card-blog-content {
		font-size: 1rem;
	}

</style>