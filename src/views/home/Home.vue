<template>
    <div id="app">
        <nav-bar>
            <div slot="left"></div>
            <div slot="center"></div>
            <div slot="right"></div>
        </nav-bar>
        <home-swiper></home-swiper>
        <seckill></seckill>
        <opa></opa>
        <court-yard></court-yard>
        <stroll></stroll>
        <recommend></recommend>
        <div>首页</div>
    </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import Recommend from './childComps/Recommend'
import SecKill from './childComps/SecKill'
import Opa from './childComps/Opa'
import CourtYard from './childComps/CourtYard'
import Stroll from './childComps/Stroll'

import NavBar from '../../components/common/navbar/NavBar'


export default {
    name:'Home',
    components:{
        "nav-bar":NavBar,
        "home-swiper":HomeSwiper,
        "recommend":Recommend,
        'seckill':SecKill,
        "opa":Opa,
        'court-yard':CourtYard,
        'stroll':Stroll
    }
}
</script>

<style>

</style>