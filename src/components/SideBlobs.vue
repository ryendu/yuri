<template>
	<div class="side-blobs">
			<div id="blob-1">
				<img src="../assets/blob1.svg" alt="blob1" />
			</div>
			<div id="blob-2">
				<img src="../assets/blob2.svg" alt="blob2" />
			</div>
			<div id="blob-3">
				<img src="../assets/blob3.svg" alt="blob3" />
			</div>
		</div>
</template>

<script>
export default {
	name: 'SideBlobs',
}
</script>

<style scoped>
	.side-blobs {
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow-x:hidden;
	}
	#blob-1 {
		position: absolute;
		top: 5%;
		right: 5%;
	}
	#blob-2 {
		position: relative;
		top: 20%;
		right: -30%;	
	}
	#blob-3 {
		position: relative;
	}
</style>