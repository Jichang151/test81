<template>
  <div id="app">
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
export default {
  name: 'App',
  components:{
    NavBar,
    SideBar
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:1200px;
  margin:0 auto;
  margin-top: 60px;
}
</style>
