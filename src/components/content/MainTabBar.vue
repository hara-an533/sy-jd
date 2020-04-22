<template>
        <div class="main-tab-bar">
            <router-link class="message" tag="div" to="/home">首页</router-link>
            <router-link class="address-book" tag="div" to="/category">分类</router-link>
            <router-link class="search" tag="div" to="/surprise">京喜</router-link>
            <router-link class="search" tag="div" to="/shopcart">购物车</router-link>
            <router-link class="meself" tag="div" to="/profile">登录</router-link>
        </div> 
</template>

<script>
export default {
    name:'MainTabBar'
}
</script>

<style>
.main-tab-bar {
    display: flex;
    z-index: 999;
    background: white;
}

.main-tab-bar div {
    flex: 1;
}

</style>