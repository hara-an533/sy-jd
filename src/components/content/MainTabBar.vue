<template>
  <div class="main-tab-bar">
    <router-link class="message" tag="div" to="/home">
      <div class="twobiao">
          <div class="pictt">
            <i class="iconfont icon-zhifu-jingdong"></i>
        </div>
        <p class="icoytext">首页</p>
      </div>
    </router-link>
    <router-link class="address-book" tag="div" to="/category">
    <div class="twobiao">
         <div class="pictt">
            <i class="iconfont icon-fenlei"></i>
        </div>
        <p class="icoytext">分类</p>
      </div>
    </router-link>
    <router-link class="search" tag="div" to="/surprise">
     <div class="twobiao">
          <div class="pictt">
            <i class="iconfont icon-jingdongzhitou"></i>
        </div>
        <p class="icoytext">京喜</p>
      </div>
    </router-link>
    <router-link class="search" tag="div" to="/shopcart">
    <div class="twobiao">
          <div class="pictt">
            <i class="iconfont icon-gouwuche2"></i>
        </div>
        <p class="icoytext">购物车</p>
      </div>
    </router-link>
    <router-link class="meself" tag="div" to="/profile">
    <div class="twobiao">
          <div class="pictt">
            <i class="iconfont icon-mine-red"></i>
        </div>
        <p class="icoytext">我的</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainTabBar"
};
</script>

<style>
.main-tab-bar {
  display: flex;
  height: 60px;
  line-height: 30px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: fixed;
  bottom: 200px;
}

.main-tab-bar div {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}

.icoytext {
    margin-top: -8px;
    font-size: 12px;
}

.pictt {
    margin-top: 0px;
}

.router-link-active {
    color: #e93B3d;
}

</style>