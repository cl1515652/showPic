<template>
  <div id="app">
    <!-- 主页面 -->
    <router-view/>
    <!-- 弹出框 -->
    <!--<SubjectView></SubjectView>-->
  </div>
</template>

<script>

  export default {
    name: 'App',
    components:{

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 90%;
    margin: 0 auto;
  }
</style>
