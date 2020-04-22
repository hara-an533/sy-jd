<template>
  <div>
    <home-swiper></home-swiper>
    <HomeSwiperTwo></HomeSwiperTwo>
  <div>
        <Spike></Spike>
    </div>
    <opa></opa>
    <court-yard></court-yard>
    <stroll></stroll>
    <expressNews></expressNews>
    <recommend></recommend>
    <backtotop></backtotop>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeSwiperTwo from "./childComps/HomeSwiperTwo";
import expressNews from "./childComps/expressNews.vue";
// import countdown from "./childComps/SecKill.vue";

import recommend from "./childComps/Recommend.vue"

import backtotop from "./childComps/BackToTop.vue"

import Opa from "./childComps/Opa";
import CourtYard from "./childComps/CourtYard";
import Stroll from "./childComps/Stroll";

   import Spike from './childComps/SecKill.vue'
    import moment from 'moment'
// import NavBar from '../../components/common/navbar/NavBar'

export default {
  name: "Home",
   data(){
            return{
                endTime:moment(new Date(Date.now()+10*1000)),
                startTime:moment(new Date(Date.now()))
            }
        },
  
  components: {
    // "nav-bar":NavBar,
    "home-swiper": HomeSwiper,
    expressNews: expressNews,
    // Countdown: countdown,
     Spike,
    opa: Opa,
    "court-yard": CourtYard,
    stroll: Stroll,
    HomeSwiperTwo:HomeSwiperTwo,
    "recommend":recommend,
    "backtotop":backtotop
  }
};
</script>

<style scoped>

</style>>

