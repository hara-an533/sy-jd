<template>
  <div>
    <div class="details-top">
      <swiper class="home-swiper ouysyyu" ref="mySwiper" :options="swiperOptions ">
        <swiper-slide>
          <img src="../../../../assets/images/xlunbo1.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../../assets/images/xlunbo2.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../../assets/images/xlunbo3.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../../assets/images/xlunbo4.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../../assets/images/xlunbo5.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../../assets/images/xlunbo6.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../../assets/images/xlunbo7.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../../assets/images/xlunbo8.jpg" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
export default {
  name: "prozujian",
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

.ouysyyu {
    width: 100%;
    height: 375px;
}

.ouysyyu img {
    width: 100%;
    height: 100%;
}
</style>