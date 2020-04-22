<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style>
.nav-bar {
    position: fixed;
    width: 100%;
    height: 44px;
    z-index: 999;
    opacity: 1;
}

.nav-bar .left,
.nav-bar .right {
    width: 40px;
    height: 44px;
    position: absolute;
    top: 0;
}

.nav-bar .left {
    left: 0;
}

.nav-bar .center {
    height: 44px;
    margin: 0 50px;
}

.nav-bar .right {
    right: 0;
}
</style>