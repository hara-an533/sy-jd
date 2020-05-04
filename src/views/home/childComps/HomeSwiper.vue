<template>
  <div id="home-swiper">
    <div class="nav-bar">
      <router-link to="/main/category">
      <div class="search-btn"></div>
      </router-link>
      <router-view></router-view>
      <router-link to="/main/home/SearchFunction">
         <div class="search">
        <div class="jd-icon"></div>
      </div>
      <router-view></router-view>
      </router-link>
      <div class="search-login">
        <router-link to="/login">登录</router-link>
      </div>
    </div>
    <div class="triangle-left"></div>
    <div class="triangle-right"></div>
     <swiper class="home-swiper ouysyyu" ref="mySwiper" :options="swiperOptions ">
      <swiper-slide>
        <img src="../../../assets/images/lunbo1.jpg" alt />
      </swiper-slide>
      <swiper-slide>
         <img src="../../../assets/images/lunbo2.jpg" alt />
      </swiper-slide>
      <swiper-slide>
         <img src="../../../assets/images/lunbo3.jpg" alt />
      </swiper-slide>
      <swiper-slide>
         <img src="../../../assets/images/lunbo5.jpg" alt />
      </swiper-slide>
      <swiper-slide>
         <img src="../../../assets/images/lunbo5.jpg" alt />
      </swiper-slide>
      <swiper-slide>
         <img src="../../../assets/images/lunbo6.jpg" alt />
      </swiper-slide>
      <swiper-slide>
         <img src="../../../assets/images/lunbo7.jpg" alt />
      </swiper-slide>
      <swiper-slide>
         <img src="../../../assets/images/lunbo8.jpg" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // 允许点击小圆点跳转
          autoplay: true // 自动切换
        },
        // Some Swiper option/callback...
        loop: true, // 循环
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, false);
  }
};
</script>

<style scoped>
#home-swiper {
  position: relative;
  background-color: #c82519;
  height: 145px;
  margin-top: 0;
}

.nav-bar {
  width: 98%;
  height: 44px;
  overflow: hidden;
  background-color: #c82519;
  margin: 0 auto;
  z-index: 999;
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
  top:128px;
  border-right: 45px solid #f6f6f6;
  transform: rotate(-45deg);
  /* background: #19c893; */
}

.triangle-right {
  top:108px;
  right: 0px;
  border-right: 45px solid #f6f6f6;
  transform: rotate(0deg);
  /* background: #19c893; */
}

.home-swiper {
  width: 95%;
  height: 148px;
  border-radius: 5px;
}

.home-swiper img {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100%;
}

</style>