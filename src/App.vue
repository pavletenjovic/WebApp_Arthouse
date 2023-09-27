<template>
  <div>
    <Heder class = "heder_stil"></Heder>
    <NavigacioniMeni></NavigacioniMeni>
    <router-view/>
    <Futer class = "futer_stil"></Futer>
  </div>
  </template>
  
  
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .heder_stil{
    background-color: rgb(216, 188, 182);
    height: 100px;
  }
  .futer_stil{
      position:fixed;
      bottom: 0;
      width: 100%;    
      text-align: center;
      background-color: rgb(216, 188, 182);
  }
  .putanja{
          font-style:italic;
          font-size:140%;
          margin-left:4%;
          margin-top: 7px;
          color:#3D291Eff;
      }
  .aput{
        font-style:italic;
        color:#3D291Eff;
  }
  </style>
  
  <script>
    import Heder from '@/components/Header.vue'
    import Futer from '@/components/Footer.vue'
    import NavigacioniMeni from '@/components/Navbar.vue'
  
    export default{
      name: 'App',
      components:{
        Heder,
        Futer,
        NavigacioniMeni
      }, watch: {
        '$route' (to) {
          document.title = to.meta.title || 'Art House'
        }
      }
    }
  </script>