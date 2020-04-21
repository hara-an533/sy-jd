<template>
    <div>
        <nav-bar>
            <div slot="left">11</div>
            <div slot="center">11</div>
            <div slot="right">11</div>
        </nav-bar>
        <home-swiper></home-swiper>
        <seckill></seckill>
        <opa></opa>
        <court-yard></court-yard>
        <stroll></stroll>
        <recommend></recommend>
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