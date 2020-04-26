<template>
  <div class="empty-cart">
    <div class="login">
      登录后可同步购物车中的商品
      <div class="shopcart-btn-red" @click="login">登录</div>
    </div>
    <div class="cart-empty-wrap">
        <div class="empty-icon"></div>
        <p class="empty-text">登录后可同步购物车中商品</p>
    </div>
  </div>
  
</template>

<script>

export default {
  name: "EmptyCart",
  methods:{
    login(){
      this.$router.push({path:"/login"})
    }
  }
};
</script>

<style scoped>
.empty-cart {
  margin-top: 44px;
}

.empty-cart .login {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #333;
  font-size: 14px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
}

.shopcart-btn-red {
  display: inline-block;
  width: 58px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-left: 10px;
  color: #fff;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(255,65,66,.2);
  background: linear-gradient(270deg,#f2270c,#ff4b2b);
}

.cart-empty-wrap {
    padding: 70px 0 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
} 

.cart-empty-wrap .empty-icon {
    width: 90px;
    height: 90px;
    background: url(../../../assets/images/empty.png);
    background-size: 90px auto;
}
</style>