<template>
  <div class="home">
    <HomePage msg="Welcome to Yo Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'MainHome',
  components: {
    HomePage
  }
}
</script>
