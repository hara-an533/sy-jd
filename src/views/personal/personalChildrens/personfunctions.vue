<template>
  <div>
    <div class="perfunctona">
      <div class="perfunctona-one">
        <div class="perfunctona-one-icon">
          <i class="iconfont icon-fukuanfangshi"></i>
        </div>
        <p class="perfunctona-one-text">待付款</p>
      </div>
      <div class="perfunctona-one">
        <div class="perfunctona-one-icon">
          <i class="iconfont icon-wuliuzifei"></i>
        </div>
        <p class="perfunctona-one-text">待收货</p>
      </div>
      <div class="perfunctona-one fiveto">
        <div class="perfunctona-one-icon">
          <i class="iconfont icon-tuihuo"></i>
        </div>
        <p class="perfunctona-one-text">退货 / 售后</p>
      </div>
      <div class="perfunctona-one">
        <div class="perfunctona-one-icon">
          <i class="iconfont icon-quanbudingdanmb"></i>
        </div>
        <p class="perfunctona-one-text">全部订单</p>
      </div>
    </div>
    <div class="assetsed">
      <div class="assetsed-one">
        <p class="assetsed-one-texta">
          <span class="textmaina">0</span>
          <span class="textmainb">张</span>
        </p>
        <p class="assetsed-one-textb">京东卷</p>
      </div>
      <div class="assetsed-one">
        <div class="chali">立减40元</div>
        <p class="assetsed-one-textong">开通有礼</p>
        <p class="assetsed-one-textbong">白条</p>
      </div>
      <div class="assetsed-one">
        <p class="assetsed-one-texta">
          <span class="textmaina">0</span>
          <span class="textmainb">个</span>
        </p>
        <p class="assetsed-one-textb">京豆</p>
      </div>
      <div class="assetsed-one">
        <p class="assetsed-one-texta">
          <span class="textmaina">0</span>
          <span class="textmainb">元</span>
        </p>
        <p class="assetsed-one-textb">红包</p>
      </div>
      <div class="assetsed-one">
        <div class="assetsed-one-icon">
          <!-- <i class="iconfont icon-fukuanfangshi"></i> -->
        </div>
        <p class="assetsed-one-textbed">我的资产</p>
      </div>
    </div>
    <div class="footprint">
      <div class="footprint-one">
        <p class="footprint-one-txta">0</p>
        <p class="footprint-one-txtb">商品收藏</p>
      </div>
      <div class="footprint-one">
        <p class="footprint-one-txta">0</p>
        <p class="footprint-one-txtb">店铺收藏</p>
      </div>
      <div class="footprint-one">
        <p class="footprint-one-txta">1</p>
        <p class="footprint-one-txtb">我的足迹</p>
      </div>
    </div>
    <div class="abouted">
      <ul class="abouted-ul">
        <li>
          <div class="abouted-ul-icon">
            <div class="abouted-ul-icona"></div>
          </div>
          <p class="abouted-ul-text">我的预约</p>
        </li>
        <li>
          <div class="abouted-ul-icon">
            <div class="abouted-ul-iconb"></div>
          </div>
          <p class="abouted-ul-text">高价回收</p>
        </li>
        <li>
          <div class="abouted-ul-icon">
            <div class="abouted-ul-iconc"></div>
          </div>
          <p class="abouted-ul-text">京东火车票</p>
        </li>
        <li>
          <div class="abouted-ul-icon">
            <div class="abouted-ul-icond"></div>
          </div>
          <p class="abouted-ul-text">应用推荐</p>
        </li>
        <li>
          <div class="abouted-ul-icon">
            <div class="abouted-ul-icone"></div>
          </div>
          <p class="abouted-ul-text">京东机票</p>
        </li>
        <li>
          <div class="abouted-ul-icon">
            <div class="abouted-ul-iconf"></div>
          </div>
          <p class="abouted-ul-text">京东酒店</p>
        </li>
        <li>
          <div class="abouted-ul-icon">
            <div class="abouted-ul-icong"></div>
          </div>
          <p class="abouted-ul-text">闲置管家</p>
        </li>
      </ul>
    </div>
    <div class="serviceed">
      <p class="serviceed-text">客户服务</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "personfunctions"
};
</script>

<style scoped>
.perfunctona {
  display: flex;
  width: 100%;
  height: 72px;
  border: 1px solid red;
  margin-top: 20px;
  background: white;
  position: relative;
}

.perfunctona-one {
  flex: 1;
  text-align: center;
  margin-top: 5px;
}

.icon-fukuanfangshi {
  font-size: 25px;
  color: #e0a565;
}

.icon-wuliuzifei {
  font-size: 25px;
  color: #e0a565;
}

.icon-tuihuo {
  font-size: 25px;
  color: #e0a565;
}

.icon-quanbudingdanmb {
  font-size: 25px;
  color: #e0a565;
}

.perfunctona-one-text {
  font-size: 12px;
  color: #666666;
  margin-top: 4%;
}

.fiveto::before {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 234px;
  width: 10px;
  height: 72px;
  background: url(https://img11.360buyimg.com/jdphoto/s20x144_jfs/t14743/330/1610539369/321/10d659d3/5a53580eNa26a8177.png);
  background-size: 10px;
  content: "";
}

.assetsed {
  width: 100%;
  height: 72px;
  margin: 0 auto;
  background: white;
  display: flex;
  margin-top: 20px;
  position: relative;
}

.assetsed .assetsed-one {
  flex: 1;
  text-align: center;
}

.textmaina {
  font-size: 16px;
  color: #e93b3d;
}

.textmainb {
  font-size: 10px;
  color: #e93b3d;
}

.assetsed-one-textb {
  font-size: 12px;
  color: #666666;
}

.assetsed-one-textong {
  font-size: 12px;
  color: #e93b3d;
  margin-top: 16.3px;
}

.assetsed-one-textbong {
  font-size: 12px;
  color: #666666;
  margin-top: 18px;
}

.assetsed-one-icon {
  width: 64.1px;
  height: 18px;
  background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png)
    no-repeat 50% scroll;
  background-size: auto 100%;
  margin-top: 16px;
}

.assetsed-one-textbed {
  font-size: 12px;
  color: #666666;
  margin-top: 18px;
}

.chali {
  position: absolute;
  top: 0;
  left: 30%;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  padding: 0 8px;
  background: #e93b3d;
  transform-origin: left bottom;
  white-space: nowrap;
  color: #fff;
  border-radius: 8px;
  border-bottom-left-radius: 0;
}

.footprint {
  width: 100%;
  height: 72px;
  background: white;
  margin-top: 20px;
  display: flex;
}

.footprint .footprint-one {
  flex: 1;
  text-align: center;
}

.footprint-one-txta {
  font-size: 16px;
  color: #333333;
  margin-top: 12px;
}

.footprint-one-txtb {
  font-size: 12px;
  color: #666666;
  margin-top: -9px;
}

.abouted {
  width: 100%;
  height: 130px;
  background: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
}

.abouted-ul {
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  text-align: center;
}

.abouted-ul li {
  width: 25%;
  height: 65px;
  display: flex;
  flex-direction: column;
  padding: -3px 2px;
}

.abouted-ul-icona {
  display: block;
  margin: 0 auto 7px;
  width: 20px;
  height: 20px;
  background: url(//img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png.webp)
    0px 0px / 100% 100% no-repeat;
  margin-top: 10px;
}

.abouted-ul-text {
  font-size: 12px;
  color: #666666;
  margin-top: 3px;
}

.abouted-ul-iconb {
  display: block;
  margin: 0 auto 7px;
  width: 20px;
  height: 20px;
  background: url(//img12.360buyimg.com/img/s64x64_jfs/t1/97016/19/15154/2382/5e6b8e86E17a7527c/eeed6fdf78de3847.png.webp)
    0px 0px / 100% 100% no-repeat;
  margin-top: 10px;
}

.abouted-ul-iconc {
  display: block;
  margin: 0 auto 7px;
  width: 20px;
  height: 20px;
  background: url(//img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png.webp)
    0px 0px / 100% 100% no-repeat;
  margin-top: 10px;
}

.abouted-ul-icond {
  display: block;
  margin: 0 auto 7px;
  width: 20px;
  height: 20px;
  background: url(//img12.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png.webp)
    0px 0px / 100% 100% no-repeat;
  margin-top: 10px;
}

.abouted-ul-icone {
  display: block;
  margin: 0 auto 7px;
  width: 20px;
  height: 20px;
  background: url(//img14.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png.webp)
    0px 0px / 100% 100% no-repeat;
  margin-top: 10px;
}

.abouted-ul-iconf {
  display: block;
  margin: 0 auto 7px;
  width: 20px;
  height: 20px;
  background: url(//img14.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png.webp)
    0px 0px / 100% 100% no-repeat;
  margin-top: 10px;
}

.abouted-ul-icong {
  display: block;
  margin: 0 auto 7px;
  width: 20px;
  height: 20px;
  background: url(//img12.360buyimg.com/img/s64x64_jfs/t1/102785/29/14987/2346/5e6b8ed9Ee5ab6266/d6d34952c182fb1b.png.webp)
    0px 0px / 100% 100% no-repeat;
  margin-top: 10px;
}

.serviceed {
  width: 100%;
  height: 45px;
  background: white;
  margin-top: 20px;
  margin-bottom: 60px;
  font-size: 14px;
  counter-reset: #666666;
}

.serviceed-text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;
}

.serviceed-text::after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 6px;
  height: 10px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 20'%3E%3Cpath fill='%23CCC' fill-rule='evenodd' d='M2 20c-.8 0-1.5-.5-1.8-1.2-.3-.8-.2-1.6.4-2.2L7.2 10 .6 3.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l8 8c.4.4.6 1 .6 1.4 0 .5-.2 1-.6 1.4l-8 8c-.4.4-1 .6-1.4.6z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -6px;
}
</style>