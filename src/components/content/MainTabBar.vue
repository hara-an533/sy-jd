<template>
  <div class="main-tab-bar">
    <router-link class="main" tag="div" to="/main/home"></router-link>
    <router-link class="category" tag="div" to="/main/category"></router-link>
    <router-link class="surprise" tag="div" to="/main/surprise"></router-link>
    <a tag="div" class="aone" href="https://wqs.jd.com/pingou/index.shtml?sceneval=2&fromM=1&ptag=138097.1.6">
    <p class="jinxi">京喜</p>
    </a>
    <router-link class="cart" tag="div" to="/main/shopcart"></router-link>
    <router-link class="login" tag="div" to="/login"></router-link>
  </div>
</template>

<script>
export default {
  name: "MainTabBar",
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {}
};
</script>

<style>
.main-tab-bar {
  display: flex;
  height: 46px;
  line-height: 46px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: relative;
}

.main-tab-bar div {
  flex: 1;
}

.main-tab-bar .main {
  background: url(../../assets/images/main.png) no-repeat center;
  background-size: 60px 46px;
}

.main-tab-bar .category {
  background: url(../../assets/images/cate.png) no-repeat center;
  background-size: 60px 46px;
}

/* .main-tab-bar .surprise {
  background: url(../../assets/images/sur.png) no-repeat center;
  background-size: 60px 46px;
} */

.main-tab-bar .cart {
  background: url(../../assets/images/cart.png) no-repeat center;
  background-size: 60px 46px;
}

.main-tab-bar .login {
  background: url(../../assets/images/img.png) no-repeat center;
  background-size: 60px 46px;
}

.router-link-active.main {
  background: url(../../assets/images/main-r.png) no-repeat center;
  background-size: 60px 46px;
}

.router-link-active.category {
  background: url(../../assets/images/category.png) no-repeat center;
  background-size: 60px 46px;
}

.router-link-active.cart {
  background: url(../../assets/images/cart-r.png) no-repeat center;
  background-size: 60px 46px;
}

.aone {
  text-decoration: none;
   background: url(../../assets/images/sur.png) no-repeat center;
   font-size: 1px;
   /* margin-left: 15%; */
   background-size: 60px 46px;
    position: fixed; 
    left:48%;
   top:92.8%; 
   
}

.jinxi {
	color: transparent;
  font-size: 6px;
  padding-top: 3px;
}
</style>