<template>
  <div class="container">
    <NavBar/>
    <router-view/>
    
  </div>
  <Footer/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
     NavBar,
    Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400&display=swap');
html, body, #app {
  height: 200vh;
  margin: 0;
  padding: 0;
  scroll-margin: 0;
  min-height: 100%;
  position:relative;
}
body {
  background: black;
}
.container {
  margin: 16px;
  margin-top: 60px;
  height: 200vh;
  padding: 16px;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page {
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