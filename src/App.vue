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
  font-family: Montserrat;
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