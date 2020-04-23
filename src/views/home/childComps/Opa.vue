<template>
  <swiper class="dong" ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <ul class="slides">
        <li class="slides-li">
          <img src="../../../assets/images/xiangji.jpg" alt="">
          <div> <span class="biaoji">￥</span><span class="price">278</span></div>
          <p class="yuanjia">499</p>
        </li>
        <li class="slides-li">
           <img src="../../../assets/images/bijiben.jpg" alt="">
           <div> <span class="biaoji">￥</span><span class="price">278</span></div>
          <p class="yuanjia">499</p>
        </li>
        <li class="slides-li">
           <img src="../../../assets/images/doujiangji.jpg" alt="">
           <div> <span class="biaoji">￥</span><span class="price">278</span></div>
          <p class="yuanjia">499</p>
        </li>
        <li class="slides-li">
           <img src="../../../assets/images/ziji.jpg" alt="">
           <div> <span class="biaoji">￥</span><span class="price">278</span></div>
          <p class="yuanjia">499</p>
        </li>
        <li class="slides-li">
           <img src="../../../assets/images/huijia1.jpg" alt="">
           <div> <span class="biaoji">￥</span><span class="price">278</span></div>
          <p class="yuanjia">499</p>
        </li>
      </ul>
    </swiper-slide>
    <swiper-slide>
      <ul class="slides">
        <li class="slides-li">
          <img src="../../../assets/images/xiangji.jpg" alt="">
          <div> <span class="biaoji">￥</span><span class="price">278</span></div>
          <p class="yuanjia">499</p>
        </li>
        <li class="slides-li">
           <img src="../../../assets/images/bijiben.jpg" alt="">
           <div> <span class="biaoji">￥</span><span class="price">278</span></div>
          <p class="yuanjia">499</p>
        </li>
        <li class="slides-li">
           <img src="../../../assets/images/doujiangji.jpg" alt="">
           <div> <span class="biaoji">￥</span><span class="price">278</span></div>
          <p class="yuanjia">499</p>
        </li>
        <li class="slides-li">
           <img src="../../../assets/images/ziji.jpg" alt="">
           <div> <span class="biaoji">￥</span><span class="price">278</span></div>
          <p class="yuanjia">499</p>
        </li>
        <li class="slides-li">
           <img src="../../../assets/images/huijia1.jpg" alt="">
           <div> <span class="biaoji">￥</span><span class="price">278</span></div>
          <p class="yuanjia">499</p>
        </li>
      </ul>
    </swiper-slide>
    <div class="swiper-pagination three" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "Opa",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
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
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style scoped>
.swiper-slide {
  width: 100%;
  height: 136.49px;
}

.slides {
  width: 100%;
  height: 136.49px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: 0px;
}
.slides-li {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.slides-li img {
  width: 100%;
  height: 60%;
}

.dong {
  background: rgb(255, 255, 255);
  margin-top: 20px;
}

.biaoji {
  color: #e93B3d;
  font-size: 12px;
}

.price {
  font-size: 15px;
   color: #e93B3d;
   font-weight: bold;
}

.yuanjia {
  margin-top: -2px;
  font-size: 12px;
  text-decoration: line-through
}

.three {
  display: none;
}
</style>