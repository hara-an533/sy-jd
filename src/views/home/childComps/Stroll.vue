<template>
  <div>
    <div class="stroll">
      <img src="../../../assets/images/meiriguang.jpg" alt />
    </div>
    <div class="stroll-main">
      <ul class="stroll-main-ul">
        <li>
          <p class="huangtext">免息星球</p>
          <p class="guangtext2">白条免息购</p>
          <div class="gungimh">
            <img src="../../../assets/images/mianxi.jpg" alt />
          </div>
        </li>
        <li>
          <p class="huangtext">每日特价</p>
          <p class="guangtext2">9块9疯抢</p>
          <div class="gungimh">
            <img src="../../../assets/images/tejia99.jpg" alt />
          </div>
        </li>
        <li>
          <p class="huangtext">品牌闪购</p>
          <p class="guangtext2">汇大牌好价</p>
          <div class="gungimh">
            <img src="../../../assets/images/heixie.jpg" alt />
          </div>
        </li>
        <li>
          <p class="huangtext">京东直播</p>
          <p class="guangtext2">边看边买</p>
          <div class="gungimh">
            <img src="../../../assets/images/jdzhibo.jpg" alt />
          </div>
        </li>
        <li>
          <p class="huangtext">排行榜</p>
          <p class="guangtext2">销量排行推荐</p>
          <div class="gungimh">
            <img src="../../../assets/images/naifen.jpg" alt />
          </div>
        </li>
        <li>
          <p class="huangtext">拍拍好物</p>
          <p class="guangtext2">iphone 5折起</p>
          <div class="gungimh">
            <img src="../../../assets/images/paipai.jpg" alt />
          </div>
        </li>
        <li>
          <p class="huangtext">新品首发</p>
          <p class="guangtext2">京东小魔方</p>
          <div class="gungimh">
            <img src="../../../assets/images/xpshoufa.jpg" alt />
          </div>
        </li>
        <li>
          <p class="huangtext">发现好货</p>
          <p class="guangtext2">发现品质生活</p>
          <div class="gungimh">
            <img src="../../../assets/images/faxianhaohuo.jpg" alt />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stroll"
};
</script>

<style  scoped>
.stroll {
  width: 100%;
  height: 100%;
}

.stroll img {
  width: 100%;
  height: 100%;
}

.stroll-main {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  /* border: 1px solid red; */
  margin-left: 11px;
  background: white;
}

.stroll-main-ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 0px;
  margin-top: -12px;
}

.stroll-main-ul li {
  width: 24%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.gungimh {
  width: 74.3px;
  height: 74.3px;
}

.stroll-main-ul li img {
  width: 100%;
  height: 100%;
}

.huangtext {
  width: 100%;
  background: -webkit-linear-gradient(left, #ff2a2a, #f139d2);
  background: linear-gradient(90deg, #ff2a2a, #f139d2);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 13.65px;
  font-weight: bold;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
    overflow: hidden;
}

.guangtext2 {
  font-size:10.24px;
  color: #222222;
  margin-top: -15px;
  margin-left: -10px;
}
</style>