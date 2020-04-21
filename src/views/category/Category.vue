<template>
    <div>
        <nav-bar>
            <div slot="left">11</div>
            <div slot="center">11</div>
        </nav-bar>
        <p>目录</p>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default {
  name: "Category",
  components:{
  "nav-bar":NavBar,
  }
};
</script>

<style>
</style>