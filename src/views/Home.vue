<template>
	<div class="page">
		<TitleName firstName="Lorem" lastName="Ipsum" subtitle="Writer, Dreamer, Creator"/>
		<SideBlobs class="sideblobs"/>
		<div class="content">
			<About class="about"/>
			<div class="blog-link">
				<router-link to="/blog">Checkout My Blog!</router-link>
			</div>
			
		</div>
	</div>
</template>

<script>
import TitleName from '../components/TitleName.vue';
import SideBlobs from '../components/SideBlobs.vue';
import About from '../views/About.vue';
export default {
	name:'Home',
	components: {
		TitleName,
		SideBlobs,
		About,
	}
}
</script>

<style scoped>
.content {
	/* position: absolute; */
	/* padding-top: 100%; */
	width: 60%;
}

.content .about {
	text-align: left;
	margin-left: 15%;
}
.sideblobs {
	width: 40%;
}

.blog-link {
	background: white;
	border-radius: 1rem;
	padding: 16px;
	width: 16rem;
	justify-content: center;
	align-self: center;
	margin-left: 15%;
}
.blog-link a {
	color: #000;
	text-decoration: none;
}

.foot {
	/* margin: 0; */
	position: absolute;
	bottom: 0;
	/* left: 0;
	right: 0; */
	height: 100px;
	width: 100%;
	background: #6c757d;
	/* padding: 10px; */
}

</style>