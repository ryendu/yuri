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
	/* top: 25%; */
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
	top: calc(13.5rem);
	left: calc(15% + 8.8rem);
}
#last-name .shadow{
	color: red;
}

.subtitle{
	/* position: fixed; */
	text-align: left;
	font-size: 1rem;
	margin-top: 22rem;
	margin-left: 10%;
}
@media screen and (max-width: 860px) and (min-width: 700px){
	.big-name{
		font-size: 3rem;
		font-weight: 700;
		text-align: center;
		left: 10%;
	}	
	.big-name .shadow{
		position: absolute;
		left: 5px;
		top: 5px;
	}
	.subtitle {
		font-size: 1rem;
	}
	#last-name{
		top: calc(12rem);
		left: 11rem;
	}
}

@media screen and (max-width: 700px)  {
	.big-name{
		font-size: 2rem;
		font-weight: 600;
		left: 10%;
	}	
	.big-name .shadow{
		position: absolute;
		left: 4px;
		top: 4px;
	}
	.subtitle {
		font-size: 1.5rem;
	}
	#last-name{
		top: calc(11rem);
		left: 7rem;
	}	
}
</style>