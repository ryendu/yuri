<template>
  <div class="container">
    <NavBar/>
    <HomePage/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomePage from './components/HomePage.vue'
export default {
  name: 'App',
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
     NavBar,
     HomePage
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  scroll-margin: 0;
}
body {
  background: black;
}
.container {
  margin: 16px;
  margin-top: 60px;
  padding: 16px;
}
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
