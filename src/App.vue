<template>
  <div id="app">
    <router-view/>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'

export default {
    name:'app',
    components:{
      'main-tab-bar':MainTabBar
    }

}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  color: #666;
  background-color: #f6f6f6;
}

a {
  text-decoration: none;
}

#app {
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 320px;
}

.main-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5%;
  text-align: center;
}

</style>
