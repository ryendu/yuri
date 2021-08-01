<template>
	<div class="page">
		<h1 id="MainH1">Blog</h1>
		<caption>Hey! Welcome to my blog!</caption>
		<div class="blogs">
			<div class="blog" v-for="blog in blogs" :key="blog.id" >
				<BlogCard v-bind:blog="blog"/>
			</div>

			
		</div>
	</div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'
import firebase from "firebase/app";
import "firebase/firestore";

export default {
	name: 'Blog',
	components: {
		BlogCard
	},
	data () {
		return {
			loading: true,
			blogs: []
			}
	},
	created() {
			this.getBlogs()
	},
	methods: {
		
		getBlogs () {
			this.loading = true;
			let blogs = []
			firebase.firestore().collection('blogs').get().then( snapshot => {
				snapshot.forEach( doc => {
					blogs = [doc.data(), ...blogs]
				})
				this.blogs = blogs;
				console.log(this.blogs);
				this.loading = false;
			})
		}
	}
}
</script>

<style scoped>

	spinner {
		color: white;
	}

	.page {
		display: flex;
		margin-right: 5rem;
		margin-left: 5rem;
	}

	caption {
		font-size: 1rem;
		text-align: left;
	}

	#MainH1 {
		text-align: left;
	}
	.blogs {
		display: flex;
		flex-direction: column;
	}
	

</style>

