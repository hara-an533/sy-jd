<template>
  <div class="maninsaajk">
    <div class="fxgou">
      <div class="fxgoulft">
        <img src="../../../../assets/images/fxgou.jpg" alt />
      </div>
      <div class="fxgoumidddle">
        <span>送运费险.</span>
        <span>闪电退款</span>i
        <span>极速审核</span>
      </div>
      <div class="kapian" @click="openbox">...</div>
    </div>
    <div class="kaone" v-show="oped">
      <p class="kaone-top">
        <span class="kaone-topa">放心购</span>
        <span span class="kaone-topb">
          <i @click="closed" class="iconfont icon-guanbi"></i>
        </span>
      </p>
      <div class="kaone-img">
        <img src="../../../../assets/images/kaone.jpg" alt />
      </div>
      <p class="kaoneque" @click="closed">确定</p>
    </div>
    <div class="youhui">
      <div class="youtop">
        <p class="youtopa">优惠</p>
        <div class="youtop-middle">
          <p class="youtop-middlea">
            <span class="youtop-middlea-txta">满1500减150</span>
            <span class="youtop-middlea-txtb">满1000减100</span>
            <span @click="openboxb">...</span>
          </p>
          <p class="youtop-middleb">
            <span class="youtop-middleb-txta">赠品</span>
            <span class="youtop-middleb-txtb">罗宾你(LOBININ)正品手表男</span>
          </p>
        </div>
      </div>
      <div class="younottom">
        <p>
          <span class="younottom-txta">白条</span>
          <span class="younottom-txtb">六期内免息</span>
          <span class="younottom-txtc" @click="openboxc">...</span>
        </p>
      </div>
    </div>
    <div class="youhui-xxkb" v-show="opedb">
      <p class="youhui-xxkb-txta">
        <span class="youhui-xxkb-txta-da">优惠</span>
        <span class="youhui-xxkb-txta-db" @click="closedb">x</span>
      </p>
      <p class="youhui-xxkb-txtb">
        <span>促销</span>
      </p>
      <div class="youhui-xxkb-img">
        <img src="../../../../assets/images/youhuia.jpg" alt />
      </div>
      <p>领卷</p>
      <div class="youhui-xxkb-imgb">
        <img src="../../../../assets/images/youhuib.jpg" alt />
      </div>
    </div>
    <div class="dbta" v-show="opedc">
      <p class="dbtatop">
        <span class="dbtatop-txta">打白条购买</span>
        <span class="dbtatop-txtb" @click="closedc">x</span>
      </p>
      <div class="dbta-img">
        <img src="../../../../assets/images/baitiaoa.jpg" alt />
      </div>
      <p class="dbta-txtc" @click="closedc">知道了</p>
    </div>
    <div class="shmain">
      <p class="shmain-xuan">
        <span class="shmain-xuan-txta">已选</span>
        <span class="shmain-xuan-txtb">【热卖爆款-皮带款】玫壳-白面【</span>
        <span class="shmain-xuan-txtc" @click="openboxd">...</span>
      </p>
      <div class="shmain-song">
        <p class="shmain-song-txta">送至</p>
        <p class="shmain-song-txtb">
          <span class="shmain-song-txtb-one">北京朝阳区三环到四环之间</span>
          <span class="shmain-song-txtb-two">今日16:30前完成下单，预计4月28日</span>
          <span class="shmain-song-txtb-three">00:00前发货，4月30日24:00前送达</span>
        </p>
        <p class="shmain-song-txtc" @click="openboxe">...</p>
      </div>
      <div class="shmain-yun">
        <span class="shmain-yun-txta">运费</span>
        <span class="shmain-yun-txtb">免运费</span>
      </div>
      <div class="shmain-tui-main">
        <div class="shmain-tui">
          <p class="shmain-tui-top">
            <span class="shmain-tui-top-txta">商家发货&售后</span>
            <span class="shmain-tui-top-txtb">7天无理由退货</span>
          </p>
          <span class="shmain-tui-top-txtc" @click="openboxf">...</span>
        </div>
        <p class="shmain-tui-bottom">货到付款</p>
      </div>
    </div>
    <div class="xunxxkb" v-show="opedd">
      <p class="xunxxkb-txta">
        <span class="xunxxkb-txta-one">颜色</span>
        <span class="xunxxkb-txta-two" @click="closedd">x</span>
      </p>
      <div class="xunxxkb-img">
        <img src="../../../../assets/images/baimiana.jpg" alt />
      </div>
      <div class="xunxxkb-bottom">
        <p class="xunxxkb-bottom-txta">加入购物车</p>
        <p class="xunxxkb-bottom-txtb">立即购买</p>
      </div>
    </div>
    <div class="songzhi" v-show="opede">
      <p class="songzhi-top">
        <span class="songzhi-top-txta">选择区域</span>
        <span class="songzhi-top-txtb" @click="closede"></span>
      </p>
      <p class="songzhi-middle">请选择</p>
      <p class="songzhi-top-bottom">
        <span>北京</span>
        <span>广西</span>
        <span>江西</span>
        <span>四川</span>
        <span>海南</span>
        <span>贵州</span>
        <span>云南</span>
        <span>西藏</span>
        <span>陕西</span>
        <span>甘肃</span>
        <span>上海</span>
        <span>山西</span>
        <span>河南</span>
        <span>河北</span>
      </p>
    </div>
    <div class="tuihuo" v-show="opedf">
      <p class="tuihuo-top">
        <span class="tuihuo-top-txta">服务说明</span>
        <span class="tuihuo-top-txtb" @click="closedf">x</span>
      </p>
      <div class="tuihuoimg">
        <img src="../../../../assets/images/tuihuoa.jpg" alt />
      </div>
      <p class="tuihuo-bottom" @click="closedf">确定</p>
    </div>
    <div class="tabgudi">
      <div class="tabgudia">
        <div>
          <i class="iconfont icon-kefu"></i>
        </div>
        <p class="tabgudi-txta">客服</p>
      </div>
      <div class="tabgudia">
        <div>
          <i class="iconfont icon-dianpu"></i>
        </div>
        <p class="tabgudi-txta">店铺</p>
      </div>
      <div class="tabgudia">
        <div>
          <i class="iconfont icon-gouwuche3"></i>
        </div>
        <p class="tabgudi-txta">购物车</p>
      </div>
      <div class="tabgudib">加入购物车</div>
      <div class="tabgudib">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productxuanxiang",
  data() {
    return {
      oped: false,
      opedb: false,
      opedc: false,
      opedd: false,
      opede: false,
      opedf: false
    };
  },
  methods: {
    openbox() {
      this.oped = true;
    },
    closed() {
      this.oped = false;
    },
    openboxb() {
      this.opedb = true;
    },
    closedb() {
      this.opedb = false;
    },
    openboxc() {
      this.opedc = true;
    },
    closedc() {
      this.opedc = false;
    },
    openboxd() {
      this.opedd = true;
    },
    closedd() {
      this.opedd = false;
    },
    openboxe() {
      this.opede = true;
    },
    closede() {
      this.opede = false;
    },
    openboxf() {
      this.opedf = true;
    },
    closedf() {
      this.opedf = false;
    }
  }
};
</script>

<style scoped>
.maninsaajk {
  position: relative;
}

.fxgou {
  width: 100%;
  height: 37px;
  background: #fbf0fd;
  padding: 12px 48px 12px 10px;
  vertical-align: middle;
  font-size: 13px;
  display: flex;
  position: relative;
  margin-bottom: 20px;
}

.fxgoulft {
  width: 70px;
  height: 13px;
}

.fxgoulft img {
  width: 100%;
  height: 200%;
  margin-top: -5px;
}

.fxgoumidddle {
  color: #e93b3d;
  color: 13px;
  margin-left: 5px;
}

.fxgoumidddle span {
  margin-left: 3px;
}

.kaone {
  width: 100%;
  height: 400px;
  background: white;
}

.kaone-img {
  width: 100%;
  height: 350px;
  margin-top: -41px;
}

.kaone-img img {
  width: 100%;
  height: 350px;
}

.icon-guanbi {
  font-size: 12px;
}

.kaone-top {
  width: 100%;
  height: 46px;
  text-align: center;
  position: relative;
}

.kaone-topb {
  position: absolute;
  margin-left: 32%;
}

.kaone-topa {
  font-size: 16px;
  color: #333333;
}

.kaone-topa {
  margin: 0 auto;
}

.kaoneque {
  width: 95%;
  font-size: 13px;
  font-weight: 700;
  height: 38px;
  line-height: 38px;
  border-radius: 21px;
  background-image: -webkit-linear-gradient(
    315deg,
    #f2140c,
    #f2270c 70%,
    #f24d0c
  );
  background-image: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
  color: #fff;
  border-width: 0;
  text-align: center;
  margin: 0 auto;
}

.youhui {
  width: 100%;
  height: 126px;
  background: white;
  padding: 0 18px;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.youtop {
  width: 100%;
  height: 60%;
  display: flex;
}

.youtopa {
  color: #262626;
  font-size: 13px;
  font-weight: 700;
}

.youtop-middlea {
  width: 100%;
  height: 30%;
}

.youtop-middlea-txta {
  position: relative;
  display: inline-block;
  margin-right: 5px;
  padding: 0 9px 0 12px;
  border-top: 1px solid #f2270c;
  border-bottom: 1px solid #f2270c;
  height: 16px;
  line-height: 16px;
  color: #f2270c;
  font-size: 10px;
  margin-left: 5px;
}

.youtop-middlea-txtb {
  position: relative;
  display: inline-block;
  margin-right: 5px;
  padding: 0 9px 0 12px;
  border-top: 1px solid #f2270c;
  border-bottom: 1px solid #f2270c;
  height: 16px;
  line-height: 16px;
  color: #f2270c;
  font-size: 10px;
}

.youtop-middleb-txta {
  position: relative;
  padding: 0 3px;
  margin-right: 0;
  height: 13px;
  line-height: 13px;
  font-size: 9px;
  color: #e4393c;
  background: #fff;
}

.youtop-middleb-txtb {
  color: #333333;
  font-size: 13px;
}

.younottom {
  width: 100%;
  height: 100%;
  display: flex;
}

.younottom-txta {
  font-size: 13px;
  color: #333333;
  font-weight: 700;
  margin-right: 12px;
}

.younottom-txtb {
  font-size: 13px;
  color: #333333;
}

.younottom-txtc {
  margin-left: 93px;
}

.youhui-xxkb {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
}

.youhui-xxkb-img {
  width: 100%;
  height: 245.38px;
}

.youhui-xxkb-img img {
  width: 100%;
  height: 100%;
}

.youhui-xxkb-imgb {
  width: 100%;
  height: 414px;
}

.youhui-xxkb-imgb img {
  width: 100%;
  height: 100%;
}

.youhui-xxkb-txta {
  margin: 0 auto;
  position: relative;
}

.youhui-xxkb-txta-da {
  color: #333333;
  font-size: 15px;
  font-weight: 700;
}

.youhui-xxkb-txta-db {
  position: absolute;
  left: 140px;
}

.youhui-xxkb-txtb {
  font-size: 13px;
  color: #262626;
  font-weight: 700;
  margin-left: 15px;
}

.dbta {
  width: 100%;
  height: 280px;
  background: white;
}

.dbta-img {
  width: 100%;
  height: 254px;
}

.dbta-img img {
  width: 100%;
  height: 100%;
}

.dbtatop-txta {
  color: #333333;
  font-size: 16px;
  font-weight: 700;
}

.dbtatop {
  text-align: center;
  position: relative;
}

.dbtatop-txtb {
  position: absolute;
  left: 85%;
}

.dbta-txtc {
  width: 100%;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background: #e4393c;
  color: #fff;
  text-align: center;
}

.shmain {
  width: 100%;
  height: 100%;
  background: white;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  padding: 0 18px;
  border-radius: 12px;
}

.shmain-xuan {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.shmain-xuan-txta {
  color: #262626;
  font-size: 13px;
  font-weight: 700;
}

.shmain-xuan-txtb {
  color: #333333;
  font-size: 13px;
}

.shmain-xuan-txtc {
  margin-left: 35px;
}

.shmain-song {
  width: 100%;
  height: 100%;
  display: flex;
}

.shmain-song-txta {
  width: 12%;
  display: flex;
  color: #262626;
  font-size: 13px;
  font-weight: 700;
}

.shmain-song-txtb {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.shmain-song-txtb-one {
  font-size: 13px;
  color: #333333;
}

.shmain-song-txtb-two {
  color: #999999;
  font-size: 12px;
}

.shmain-song-txtb-three {
  color: #999999;
  font-size: 12px;
}

.shmain-yun {
  width: 100%;
  height: 100%;
}

.shmain-yun-txta {
  color: #262626;
  font-size: 13px;
  font-weight: 700;
}

.shmain-yun-txtb {
  color: #333333;
  font-size: 13px;
  margin-left: 15px;
}

.shmain-tui-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  margin-bottom: 48px;
}

.shmain-tui {
  width: 100%;
  height: 100%;
  /* padding: 9px 18px; */
  display: flex;
  align-items: center;
}

.shmain-tui-top-txta {
  font-size: 12px;
  color: #8c8c8c;
  margin-left: 12px;
}

.shmain-tui-top-txtb {
  font-size: 12px;
  color: #8c8c8c;
  margin-left: 5px;
}

.shmain-tui-top-txtc {
  margin-left: 72px;
}

.shmain-tui-bottom {
  font-size: 12px;
  color: #8c8c8c;
  margin-top: -11px;
  margin-left: 10px;
}

.xunxxkb {
  width: 100%;
  height: 100%;
  background: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.xunxxkb-img {
  width: 100%;
  height: 350px;
}

.xunxxkb-img img {
  width: 100%;
  height: 100%;
}

.xunxxkb-txta {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  position: relative;
}

.xunxxkb-txta-one {
  color: #262626;
  font-size: 13px;
  font-weight: 700;
  margin-left: 15px;
  margin: 0 auto;
}

.xunxxkb-txta-two {
  position: absolute;
  margin-left: 285px;
}

.xunxxkb-bottom {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  text-align: center;
}

.xunxxkb-bottom-txta {
  width: 50%;
  line-height: 38px;
  border-radius: 21px;
  box-shadow: 0 3px 6px 0 rgba(255, 65, 66, 0.2);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  margin-right: 12px;
  background-image: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
}

.xunxxkb-bottom-txtb {
  width: 50%;
  line-height: 38px;
  border-radius: 21px;
  box-shadow: 0 3px 6px 0 rgba(255, 65, 66, 0.2);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  margin-right: 12px;
  background-image: linear-gradient(135deg, #ffba0d, #ffc30d 69%, #ffcf0d);
}

.songzhi {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.songzhi-top {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #333;
  background-color: #f3f2f8;
  position: relative;
}

.songzhi-top-txta {
  color: #333333;
  font-size: 12px;
}

.songzhi-top-txtb {
  content: "\20";
  position: absolute;
  top: 50%;
  right: 10px;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTGZmZmZmZmVlZWZmZmRkZGZmZmJiYmVlZWZmZmVlZWZmZst3r9QAAAALdFJOUwDqMFSVKb4OgEL4DOKGowAAALhJREFUKM9jYKAz4HSTWpgyAVWsQno3EGxsRxZjBosBRQ2QBL13Q8EWhBgbTGz3rgRMhUhKmXcjAZiphciC4lDBbmTBHVBBkHssgcRGZZCroJ4BKVBQ3L1blBNhKAuIKcokvTFAEcRyQLgSKAIUB7EgLmXcDVEKUbhbACzIBfF2AETh7gW4BbFqx2oRVicxY3M8O6o3C/AECNagwxrIWKMDKeJ2J+CPYuyJAWuyAap1k96YYkDvZA0ALePd7o1YB+oAAAAASUVORK5CYII=);
  background-size: 20px;
}

.songzhi-middle {
  width: 100%;
  height: 42px;
  line-height: 42px;
  color: #e93b3d;
  margin-left: 12px;
  margin-top: -15px;
}

.songzhi-top-bottom {
  width: 100%;
  height: 309px;
  overflow: hidden;
  overflow: auto;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-top: -15px;
  padding: 5px 12px;
}

.songzhi-top-bottom span {
  color: #666666;
  font-size: 14px;
  margin: 10px 0px;
}

.tuihuo {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 0 18px;
  /* margin-bottom: 550px; */
}

.tuihuoimg {
  width: 100%;
  height: 293px;
}

.tuihuoimg img {
  width: 100%;
  height: 100%;
}

.tuihuo-top {
  position: relative;
  height: 48px;
  line-height: 48px;
  font-size: 15px;
  color: #333;
  text-align: center;
  font-weight: 700;
  display: flex;
  margin: 0 auto;
}

.tuihuo-top-txtb {
  width: 100%;
  position: absolute;
  margin-left: 125px;
  color: #333333;
}

.tuihuo-bottom {
  text-align: center;
  color: #f3f2f8;
  font-size: 13px;
  font-weight: 700;
  height: 38px;
  line-height: 38px;
  border-radius: 21px;
  background-image: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
}

.tabgudi {
  width: 100%;
  height: 50px;
  margin: 0 auto;
  background: #ffffff;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px;position: fixed;
  bottom: 0px;
  z-index: 999;
}

.tabgudia {
  flex: 1;
  height: 100%;
}

.tabgudib {
  height: 100%;
  flex: 2;
}

.icon-kefu {
  color: #262626;
  padding-top: 5px;
}

.tabgudi-txta {
  margin-top: 5px;
  color: #262626;
  font-size: 9px;
}

.tabgudib {
  position: relative;
  z-index: 10;
  line-height: 38px;
  height: 38px;
  text-align: center;
  background-image: -webkit-linear-gradient(
    315deg,
    #f2140c,
    #f2270c 70%,
    #f24d0c
  );
  background-image: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
  color: #fff;
  font-size: 13px;
  border-radius: 21px;
  margin: 6px 5px 0 0;
  box-sizing: border-box;
  padding: 0 10px;
  cursor: pointer;
}
</style>