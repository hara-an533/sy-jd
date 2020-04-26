<template>
  <div>
    <router-view />
    <!-- <main-tab-bar class="main-tab-bar"></main-tab-bar> -->
    <component :is="$store.state.tabBarName" class="main-tab-bar"></component>
  </div>
</template>

<script>
import MainTabBar from "../components/content/MainTabBar";
import MainTabBarAfterLogin from '../components/content/MainTabBarAfterLogin'

export default {
  components: {
    "main-tab-bar": MainTabBar,
    "tab-bar-login-after":MainTabBarAfterLogin
  },
  data() {
    return {
      
    };
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  color: #666;
  background-color: #f6f6f6;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

em {
  font-style: normal;
}

h4,
ul {
  margin: 0;
  padding: 0;
}

input {
  outline: 0;
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
  bottom: -3px;
  width: 100%;
  height: 6%;
  text-align: center;
}
</style>
