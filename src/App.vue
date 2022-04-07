<template>
  <div id="app">
     <NavBar />
     <router-view/>
     <footer-bar />
  </div>
</template>

<script>
import FooterBar from './components/FooterBar.vue'
import NavBar from './components/NavBar'
import './styles/global.css'

export default {
  components: {
    NavBar,
    FooterBar,
    
  }
}
</script>



<style>
#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
