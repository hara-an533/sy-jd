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
    height: 46px;
    line-height: 46px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,.08);
    text-align: center;
}

.main-tab-bar div {
    flex: 1;
}

</style>