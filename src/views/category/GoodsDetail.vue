<template>
  <div class="products" ref="pro">
    <div class="pro-header" ref="header">
      <div class="nav">
        <div class="left" @click="goBack"></div>
        <input class="center" placeholder="游戏本i7" />
        <i class="cat-icon"></i>
      </div>
      <ul class="selection">
        <li>
          综合
          <i class="icon_tri"></i>
        </li>
        <li>销量</li>
        <li>
          有货优先
          <i class="icon_tri"></i>
        </li>
        <li>筛选</li>
      </ul>
      <ul class="tab">
        <li>
          <a href="#">京东物流</a>
        </li>
        <li>
          <a href="#">新品</a>
        </li>
        <li>
          <a href="#">
            <span>
              品牌
              <i class="icon-tri"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              屏幕尺寸
              <i class="icon-tri"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="pro-content"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      ref="detail"
    >
      <component :is="comName"></component>
      <component :is="comName"></component>
      <component :is="comName"></component>
      <component :is="comName"></component>
      <div class="jd-icon">
        <span>JD.COM</span>
      </div>
    </div>
    <div @touchstart="touch" class="pro-icon1" :class="[y<=-500? 'block':'none']" ref="icon1">
      <img src="../../assets/images/gotop.png" alt width="16px" height="16px" />
    </div>
    <div class="pro-icon2" @click="comName='pro-option'" v-show="comName=='pro-detail'">
      <img src="../../assets/images/layout.png" alt width="16px" height="16px" />
    </div>
    <div class="pro-icon2" @click="comName='pro-detail'" v-show="comName=='pro-option'">
      <img src="../../assets/images/column.png" alt width="16px" height="16px" />
    </div>
  </div>
</template>

<script>
import ProDetail from "./childComps/ProDetail";
import ProOption from "./childComps/ProOption"
// import sj01 from "../../assets/upload/sj01.jpg";

export default {
  name: "GoodsDetail",
  data() {
    return {
      startY: 0,
      moveY: 0,
      y: 0,
      minTop: 0,
      comName:'pro-detail'
    };
  },
  components: {
    "pro-detail": ProDetail,
    "pro-option":ProOption
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY;
    },
    touchMove(e) {
      this.moveY = e.targetTouches[0].pageY - this.startY;
      this.$refs.detail.style.transition = "none";
      if (
        this.y + this.moveY > 127 ||
        this.y + this.moveY <
          this.$refs.pro.offsetHeight - this.$refs.detail.offsetHeight
      ) {
        return;
      }
      this.$refs.detail.style.top = this.y + this.moveY + "px";
      this.minTop =
        this.$refs.pro.offsetHeight - this.$refs.detail.offsetHeight;
    },
    touchEnd(e) {
      if (this.moveY < 0) {
        this.$refs.header.style.transition = "top .5s";
        this.$refs.header.style.top = -80 + "px";
        this.y += this.moveY;
      }
      if (this.moveY > 0) {
        this.$refs.header.style.transition = "top .5s";
        this.$refs.header.style.top = 0 + "px";
        this.y += this.moveY;
      }
    },
    touch() {
      this.$refs.detail.style.transition = "top .5s";
      this.$refs.header.style.transition = "none";
      this.$refs.header.style.top = 0 + "px";
      this.$refs.detail.style.top = 116 + "px";
      this.y += 0;   
    }
  }
};
</script>

<style scoped>
.none {
  display: none;
}

.block {
  display: block;
}

.products {
  position: relative;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
}

.pro-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 999;
  background-color: #fff;
}

.nav {
  display: flex;
  padding-bottom: 3px;
  width: 100%;
  height: 44px;
  z-index: 999;
  opacity: 1;
}

.left {
  background-color: tomato;
  width: 20px;
  height: 18px;
  background: url(../../assets/images/jd-sprites.png) no-repeat -22px 0;
  background-size: 200px auto;
  margin: 14px 0 0 15px;
}

.center {
  position: relative;
  height: 30px;
  margin: 0 15px;
  border-radius: 15px;
  background-color: #f7f7f7;
  margin-top: 8px;
  border: none;
  width: 65%;
  outline: none;
  padding-left: 45px;
}

.cat-icon {
  position: absolute;
  left: 70px;
  top: 15px;
  width: 20px;
  height: 18px;
  background: url(../../assets/images/jd-sprites.png) no-repeat -83px 0;
  background-size: 200px auto;
}

.selection {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}

.selection li:nth-child(1),
.selection li:nth-child(3) {
  color: #ff4142;
  position: relative;
  padding-right: 13px;
}

.icon_tri {
  width: 8px;
  height: 5px;
  background: url(../../assets/images/top.png);
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -1px;
  background-size: 8px auto;
}

.tab {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.tab li a {
  display: inline-block;
  height: 25px;
  line-height: 25px;
  padding: 2.5px 5px;
  color: #666;
  background-color: #f2f2f7;
  border-radius: 2px;
  width: 70px;
  font-size: 12px;
  text-align: center;
}

.tab li a span {
  position: relative;
  padding-right: 13px;
}

.icon-tri {
  width: 8px;
  height: 5px;
  background: url(../../assets/images/down.png);
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -1px;
  background-size: 8px auto;
}

.pro-content {
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
}

.jd-icon {
  height: 100px;
  line-height: 100px;
  text-align: center;
  width: 100%;
  background-color: #f7f7f7;
  color: red;
  font-size: 22px;
}

.jd-icon span {
  width: 100px;
  height: 25px;
  padding-left: 35px;
  background: url(../../assets/images/zhifu-jingdong.png) no-repeat;
  background-size: 35px auto;
}

.pro-icon1,
.pro-icon2 {
  position: fixed;
  right: 10px;
  width: 32px;
  text-align: center;
  height: 32px;
  line-height: 40px;
  border-radius: 50%;
  border: 1px solid #dfdfdf;
}

.pro-icon1 {
  bottom: 95px;
}

.pro-icon2 {
  bottom: 50px;
}
</style>>
