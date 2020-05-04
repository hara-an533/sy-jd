<template>
  <div class="nav-bar">
    <div slot="left" class="left" @click="goBack"></div>
    <input slot="center" class="center" placeholder="游戏本i7" />
    <i class="cat-icon"></i>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: "NavBar",
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.nav-bar {
  /* position: relative; */
  padding-bottom: 3px;
  border-bottom: 1px solid #ededed;
  background: white;
}
.left {
  background-color: tomato;
  width: 20px;
  height: 18px;
  background: url(../../../assets/images/jd-sprites.png) no-repeat -22px 0;
  background-size: 200px auto;
  margin: 14px 0 0 15px;
}

.center {
  position: relative;
  height: 30px;
  margin: 0 50px;
  border-radius: 15px;
  background-color: #f7f7f7;
  margin-top: 8px;
  border: none;
  width: 65%;
  outline: none;
  padding-left: 45px;
}

.cat-icon {
  position: absolute;
  left: 70px;
  top: 15px;
  width: 20px;
  height: 18px;
  background: url(../../../assets/images/jd-sprites.png) no-repeat -83px 0;
  background-size: 200px auto;
}
</style>