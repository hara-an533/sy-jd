<template>
  <div class="box">
    <div class="nav-bar">
      <div slot="left" class="left" @click="goBack"></div>
      <div class="center" slot="center">购物车</div>
      <div class="right" slot="right"></div>
    </div>
    <component :is="this.$store.state.weiden"></component>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import EmptyCart from "./childComps/EmptyCart";
import JdCart from "./childComps/JdCart";

export default {
  name: "ShopCart",
  // data() {
  //   return { cartName: "empty-cart" };
  // },
  components: {
    "nav-bar": NavBar,
    "empty-cart": EmptyCart,
    "jd-cart": JdCart
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  // mounted() {
  //   if (this.$store.state.status == "login") {
  //     this.cartName="jd-cart"
  //   }
  // }
};
</script>

<style scoped>
.box {
  overflow: hidden;
}
.nav-bar {
  background-color: #fff;
  border-bottom: 1px solid #f4f4f4;
}

.nav-bar .left {
  background: url(../../assets/images/jd-sprites.png) no-repeat -20px 0;
  background-size: 200px auto;
  box-sizing: border-box;
  overflow: hidden;
  width: 20px;
  height: 18px;
  margin: 14px 0 0 15px;
}

.center {
  text-align: center;
  line-height: 44px;
  color: #333;
  font-size: 18px;
}

.right {
  background: url(../../assets/images/dian.png) no-repeat center;
  background-size: 20px;
}
</style>>
