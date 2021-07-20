<template>
	<div class="homepage">
		<TitleName/>
		<SideBlobs/>
	</div>
</template>

<script>
import TitleName from './TitleName.vue';
import SideBlobs from './SideBlobs.vue';
export default {
	name:'HomePage',
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