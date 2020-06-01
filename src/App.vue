<template>
  <div id="app">
    <Totp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Totp from './components/Totp.vue'

export default {
  name: 'App',
  components: {
    Totp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
