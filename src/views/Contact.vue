<template>
	<div class="homepage">
		<TitleName firstName="Lorem" lastName="Ipsum" subtitle="Writer, Dreamer, Creator"/>
		<SideBlobs/>

	</div>
</template>

<script>
import TitleName from '../components/TitleName.vue';
import SideBlobs from '../components/SideBlobs.vue';
export default {
	name:'Contact',
	components: {
		TitleName,
		SideBlobs
	}
}
</script>

<style>
.homepage {
	color:white;
	font-size: 1.5rem;
	margin-top: 16px;
	margin-bottom: 16px;
	padding-top: 16px;
	padding-bottom: 16px;
	display: flex;
	flex-direction: column;
}




</style>