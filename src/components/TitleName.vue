<template>
	<div class="big-name" id="first-name">
		<div class="overlay">
			<h1>Lorem</h1>
		</div>
		<div class="shadow">
			<h1>Lorem</h1>
		</div>
	</div>
	<div class="big-name" id="last-name">
		<div class="overlay">
			<h1>Ipsum</h1>
		</div>
		<div class="shadow">
			<h1>Ipsum</h1>
		</div>
	</div>
</template>
<script>
export default {
	name: "TitleName",
	props: {}
}
</script>
<style scoped>
.big-name{
	font-size: 4rem;
	font-weight: 700;
	text-align: center;
	position: absolute;
	left: 15%;
	top: 25%;
}
.big-name .overlay{
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
}
.big-name .shadow{
	position: absolute;
	left: 7px;
	top: 7px;
	
}
#first-name .shadow{
	color: cyan;
}
#last-name {
	top: calc(30% + 5rem);
	left: 20rem;
}
#last-name .shadow{
	color: red;
}
</style>