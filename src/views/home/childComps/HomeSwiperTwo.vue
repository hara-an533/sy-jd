<template>
  <div>
    <swiper class="banner" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <ul class="banners">
            <li class="banners-text">
                <img src="../../../assets/images/tabchaoshi.png" alt="">
                <p class="bannerszi">京东超市</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabshuma.png" alt="">
                <p class="bannerszi">数码电器</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabfushi.png" alt="">
                <p class="bannerszi">京东服饰</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tanshengxian.png" alt="">
                <p class="bannerszi">京东生鲜</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabdaojia.png" alt="">
                <p class="bannerszi">京东到家</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabjiaofei.png" alt="">
                <p class="bannerszi">充值缴费</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabpingou.png" alt="">
                <p class="bannerszi">9.9元拼</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabjuan.png" alt="">
                <p class="bannerszi">领卷</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabzhuanqian.png" alt="">
                <p class="bannerszi">赚钱</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabhuiyuan.png" alt="">
                <p class="bannerszi">PLUS会员</p>
            </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
           <ul class="banners">
            <li class="banners-text">
                <img src="../../../assets/images/tabjingkou.webp" alt="">
                <p class="bannerszi">京东国际</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabpaimai.webp" alt="">
                <p class="bannerszi">京东拍卖</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabhuipin.webp" alt="">
                <p class="bannerszi">唯品会</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tab3c.webp" alt="">
                <p class="bannerszi">玩3C</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/loading.jpg" alt="">
                <p class="bannerszi">沃尔玛</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabmeizhuang.webp" alt="">
                <p class="bannerszi">美妆馆</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabluexing.webp" alt="">
                <p class="bannerszi">京东旅行</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabpaipai.webp" alt="">
                <p class="bannerszi">拍拍二手</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabwuliu.webp" alt="">
                <p class="bannerszi">物流查询</p>
            </li>
             <li class="banners-text">
                <img src="../../../assets/images/tabquanbu.webp" alt="">
                <p class="bannerszi">全部</p>
            </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination two" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  name: "HomeSwiperTwo",
  data() {
    return {
      swiperOptions: {
        // 需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
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

<style type="text/css">
.banner {
  margin: 20px auto;
  width: 100%;
  height: 171px;
  position: relative;
}

.swiper-container {
  --swiper-theme-color: white;
  --swiper-pagination-color: rgb(187, 113, 113); /* 两种都可以 */
}

.two {
    position: absolute;
    top:154px;
    left:150px;
}

.banners {
  width: 100%;
  height: 171px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  margin-left: px;
  flex-grow: 1;
  flex-shrink: 0;
    /* background: rgb(241, 241, 241); */
}

.banners-text {
    width: 17%;
    height: 50%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

.banners-text img {
    width: 42.9px;
    height: 42.9px;
}
.bannerszi {
    font-size: 11.8px;
    color: #666666;
}
</style>
