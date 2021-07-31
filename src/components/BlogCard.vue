<template>
	<router-link :to="{ name: 'BlogPage', 
           params: { blog: JSON.stringify(blog) }}">
		<div class="card">
			<h3 class="card-title">{{blog.title}}</h3>
			<div class="card-body">
				<h6 class="author-name">by {{blog.author}}</h6>
				<p class="date">published {{blog.date}}</p>
				<p class="card-blog-preview">{{blog.content.substr(0,400)}}<a class="elipsis">...</a></p>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {
	name: "BlogCard",
	props: {
		blog: Object,
	},
}
</script>

<style scoped>
.card {
	margin-top: 16px;
	padding: 1px;
	padding-right: 10px;
	padding-left: 32px;
	text-align: left;
	background: #212529;
	border-radius: 32px;
	box-shadow: 0px 58px 203px rgba(46, 251, 255, 0.12), 0px 37.5926px 118.887px rgba(21, 35, 36, 0.091), 0px 22.3407px 64.6593px rgba(46, 251, 255, 0.0728889), 0px 11.6px 32.9875px rgba(46, 251, 255, 0.06), 0px 4.72593px 16.5407px rgba(46, 251, 255, 0.0471111), 0px 1.07407px 7.98843px rgba(46, 251, 255, 0.0288889);
}
.card:hover:nth-child(odd) {
	transform: skew(0,-1deg);
	transition-duration: 500ms;
	transition-property: transform;
}
.card:hover:nth-child(even) {
	transform: skew(0,1deg);
	transition-duration: 500ms;
	transition-property: transform;
}
.card {
	transform: skew(0deg,0deg);
	transition-duration: 500ms;
	transition-property: transform;
}
.date {
	font-size: 1rem;
	margin-top: 2px;
	font-weight: 300;
}

.card-title {
	margin-bottom: 8px;
}

* {
	text-decoration: none;
	color: white;
}

.card-blog-preview {
	font-size: 1rem;
}
.author-name {
	margin-bottom: 2px;
	font-size: 1rem;
	margin-top: 2px;
}
.elipsis {
	line-height: 5px;
	font-size: 2rem;
}
</style>