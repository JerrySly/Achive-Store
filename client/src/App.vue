<template>
  <div>
    <nav-bar></nav-bar>
    <div class="main-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style>
.main-wrapper{
  margin: 20px 0px;
  padding:0px 10%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
body{
   background-color: #fddddd59;
   padding: 0;
   margin: 0;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
