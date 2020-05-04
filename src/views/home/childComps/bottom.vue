<template>
  <div class="buttoms">
    <div class="buttoms-top">
      <p class="bptext">youyong...</p>
      <p class="bptextb">退出</p>
      <p class="bptextc">客户服务</p>
      <p>京东</p>
    </div>
    <div class="buttoms-middle">
        <div class="btp">
            <i class="iconfont icon-app"></i>
            <p class="uttoms-middle-text">客户端</p>
        </div>
        <div class="btp">
           <i class="iconfont icon-guoji"></i>
            <p class="uttoms-middle-text">国际版</p>
        </div>
        <div class="btp">
             <i class="iconfont icon-diannao-"></i>
            <p class="uttoms-middle-text">电脑端</p>
        </div>
    </div>
    <div class="buttoms-bo">
        <p class="buttoms-bo-text">Copyright © 2004-2019 京东JD.com 版权所有</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom"
};
</script>

<style scoped>
.buttoms {
    margin-bottom: 50px;
    width: 100%;
    height: 189px;
    margin: 0 auto;
    display: flex;
    background: white;
    border-top: 1px solid rgb(235, 235, 235);
    flex-direction: column;
}

.buttoms-top {
    display: flex;
     border-bottom: 1px solid rgb(235, 235, 235);
     /* padding: 0 5px; */
     height: 27%;
     width: 100%;
     padding-left: 29px;
     font-size: 12px;
     position: relative;
     align-items: center;
}

.buttoms-top p {
    margin-right: 33px;
    text-align: center;
    /* border: 1px solid red; */
}

/* .bptext::after {
    content: "";
    display: inline-block;
    height: 43%;
    width: 0.7px;
    background-color: #9c9a9a;
    position: absolute;
    right: 247px;
    top: 33%;
}

.bptextb::after {
    content: "";
    display: inline-block;
    height: 43%;
    width: 0.7px;
    background-color: #9c9a9a;
    position: absolute;
    right: 190px;
    top: 33%;
}

.bptextc::after {
    content: "";
    display: inline-block;
    height: 43%;
    width: 0.7px;
    background-color: #9c9a9a;
    position: absolute;
    right: 111px;
    top: 33%;
} */

.buttoms-middle {
    width: 100%;
    height: 40%;
     border-bottom: 1px solid rgb(235, 235, 235);
     display: flex;
}

.btp {
    width: 33%;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.icon-app {
    font-size: 36px;
}

.icon-guoji {
     font-size: 36px;
}

.icon-diannao- {
     font-size: 36px;
}

.uttoms-middle-text {
    margin-top: -5px;
    font-size: 12px;
    color: rgb(168, 168, 168);
}

.buttoms-bo {
    width: 100%;
    height: 26.1px;
    margin-bottom: 60px;
    /* border: 1px solid red; */
}

.buttoms-bo-text {
    text-align: center;
    padding: -9px;
    font-size: 8.8px;
    color: #848689;
}
</style>