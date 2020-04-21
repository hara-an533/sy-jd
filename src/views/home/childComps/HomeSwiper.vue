<template>
  <div id="home-swiper">
    <div class="nav-bar">
      <div class="search-btn"></div>
      <div class="search">
        <div class="jd-icon"></div>
      </div>
      <div class="search-login">
        <a href="#">登录</a>
      </div>
    </div>
    <div class="triangle-left"></div>
    <div class="triangle-right"></div>
    <ul class="home-swiper">
      <li>
        <a href="#">
          <img src="../../../assets/images/lunbo1.jpg" alt />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/lunbo2.jpg" alt />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/lunbo3.jpg" alt />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/lunbo4.jpg" alt />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/lunbo5.jpg" alt />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/lunbo6.jpg" alt />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "HomeSwiper"
};
</script>

<style scoped>
#home-swiper {
  position: relative;
  background-color: #c82519;
  height: 187px;
  margin-top: 0;
}

.nav-bar {
  width: 100%;
  height: 44px;
  overflow: hidden;
  background-color: #c82519;
}

.nav-bar a {
  color: #fff;
  font-size: 16px;
}

.nav-bar .search-btn,
.nav-bar .search-login {
  width: 40px;
  height: 44px;
  position: absolute;
  top: 0;
}

.nav-bar .search-btn {
  left: 0;
}

.search-btn::before {
  content: "";
  display: block;
  width: 20px;
  height: 18px;
  background: url(../../../assets/images/s-btn.png) no-repeat center;
  background-size: 20px 18px;
  margin: 14px 0 0 15px;
}

.nav-bar .search-login {
  right: 0;
  padding-top: 10px;
}

.nav-bar .search {
  position: relative;
  height: 30px;
  margin: 0 50px;
  border-radius: 15px;
  background-color: #fff;
  margin-top: 8px;
  overflow: hidden;
}

.nav-bar .search::before {
  content: "";
  display: block;
  width: 20px;
  height: 18px;
  background: url(../../../assets/images/jd.png) no-repeat center;
  background-size: 20px 18px;
  margin: 5px 0 0 15px;
}

.jd-icon {
  position: absolute;
  left: 38px;
  top: 10px;
  width: 20px;
  height: 18px;
  background: url(../../../assets/images/jd-sprites.png) no-repeat -82px 0;
  background-size: 200px auto;
  margin: -2px 0 0 15px;
}

.jd-icon::before {
  content: "";
  display: block;
  width: 1px;
  height: 18px;
  background-color: #f5f5f5;
  margin: -2px 0 0 -10px;
}

.triangle-left,
.triangle-right {
  position: absolute;
  bottom: -45px;
  height: 0;
  width: 0;
  line-height: 0;
  font-size: 0;
  border: 45px solid transparent;
}

.triangle-left {
  left: -46px;
  border-right: 45px solid #f6f6f6;
  transform: rotate(-45deg);
}

.triangle-right {
  right: -45px;
  border-left: 45px solid #f6f6f6;
  transform: rotate(45deg);
}

.home-swiper {
  position: absolute;
  bottom: 0;
  left: 13px;
  width: 350px;
  height: 140px;
  background-color: tomato;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  border-radius: 8px;
  overflow: hidden;
}

.home-swiper a img {
  width: 350px;
  height: 140px;
}
</style>