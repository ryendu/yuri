<template>
	<div class="big-name" id="first-name">
		<div class="overlay">
			<h1>{{firstName}}</h1>
		</div>
		<div class="shadow">
			<h1>{{firstName}}</h1>
		</div>
	</div>
	<div class="big-name" id="last-name">
		<div class="overlay">
			<h1>{{lastName}}</h1>
		</div>
		<div class="shadow">
			<h1>{{lastName}}</h1>
		</div>
	</div>
	<div class="subtitle">
			{{subtitle}}
	</div>
</template>
<script>
export default {
	name: "TitleName",
	props: {
		subtitle: String,
		firstName: String,
		lastName: String,
	}
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

@media screen and (max-width: 860px) {
	.big-name{
		font-size: 3rem;
		font-weight: 700;
		text-align: center;
		position: absolute;
		left: 10%;
		top: 25%;
	}	
	.big-name .shadow{
		position: absolute;
		left: 2px;
		top: 2px;
	}
	.subtitle {
		transform : translateY(-4rem);
	}
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

.subtitle{
	position: absolute;
	font-size: 1rem;
	left: 13rem;
	top: calc(40% + 17rem);
}

</style>