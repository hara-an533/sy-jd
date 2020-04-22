<template>
  <div class="category_body">
    <nav-bar></nav-bar>
    <category-body></category-body>
  </div>
</template>

<script>
import NavBar from "./childComps/NavBar";
import CategoryBody from "./childComps/CategoryBody"

export default {
  name: "Category",
  components: {
    "nav-bar": NavBar,
    "category-body": CategoryBody
  }
};
</script>

<style scoped>
.category_body {
  height: 100%;
  background-color: #fff;
  /* overflow: hidden; */
}
</style>