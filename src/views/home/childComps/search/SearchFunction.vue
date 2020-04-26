<template>
  <div>
    <div class="search-main">
      <div class="srarchfunction-next">
        <button class="bbtned" @click="backop">
          <i class="iconfont icon-jiantou2"></i>
        </button>
        <input class="inputed" type="text" placeholder="手机" v-model="inputValue" />
        <div class="souicon">
          <i class="iconfont icon-fangdajing"></i>
        </div>
        <div class="search-txt">
        <router-link to="/main/category/全面屏手机">
        <p class="bbai">搜索</p>
        </router-link>
        </div>
        <router-view></router-view>
      </div>
      <div class="hengx"></div>
      <div class="souwen">
        <p class="souwena">最近搜索</p>
        <p class="souwenb">
          <span class="souwen-zia">小米</span>
          <span class="souwen-zib">华为</span>
        </p>
      </div>
      <div id="big">
        <div id="txtitem" :key="index" v-for="(item,index) in newList">
          <div class="txtimg">
            <img :src="item.img" alt />
          </div>
          <div class="txtright">
            <p class="txtright-text">{{item.mane}}{{item.text}}</p>
            <p class="txtright-price">{{item.price}}</p>
            <p class="txtright-ping">{{item.ping}}</p>
            <p class="txtright-infoed">{{item.infoed}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFunction",
  data() {
    return {
      inputValue: "",
      timer: null,
      newList: [],
      list: [
        {
          id: "drink-01",
          img: require("../../../../assets/images/shangpin7.webp"),
          mane: "华为",
          text: "手机 幻夜黑 6GB+128GB全网通",
          price: "￥ 1206",
          ping: "3条好评 好评率100%",
          infoed: "疆界互联旗舰店>"
        },
        {
          id: "drink-02",
          img: require("../../../../assets/images/shangpin5.webp"),
          mane: "华为",
          text: "手机 荣耀9X 麒麟810 4000mAh续航 4800万超清夜拍",
          price: "￥ 2641",
          ping: "3条好评 好评率100%",
          infoed: "疆界互联旗舰店>"
        },
        {
          id: "drink-03",
          img: require("../../../../assets/images/shangpin8.webp"),
          mane: "华为",
          text: "手机 幻夜黑 6GB+128GB全网通",
          price: "￥ 1548",
          ping: "3条好评 好评率100%",
          infoed: "疆界互联旗舰店>"
        },
        {
          id: "drink-04",
          img: require("../../../../assets/images/shangpin5.webp"),
          mane: "小米",
          text: "手机 幻夜黑 6GB+128GB全网通",
          price: "￥ 1956",
          ping: "3条好评 好评率100%",
          infoed: "疆界互联旗舰店>"
        },
        {
          id: "drink-05",
          img: require("../../../../assets/images/shangpin7.webp"),
          mane: "小米",
          text: "手机 幻夜黑 6GB+128GB全网通",
          price: "￥ 2356",
          ping: "3条好评 好评率100%",
          infoed: "疆界互联旗舰店>"
        },
        {
          id: "drink-06",
          img: require("../../../../assets/images/shangpin8.webp"),
          mane: "小米",
          text: "手机 幻夜黑 6GB+128GB全网通",
          price: "￥ 4664",
          ping: "3条好评 好评率100%",
          infoed: "疆界互联旗舰店>"
        }
      ]
    };
  },
  created: function() {
    this.newList = this.list;
  },
  methods: {
    // 执行搜索
    search: function(val) {
      this.newList = this.list.filter(item => {
        if (item.mane.indexOf(this.inputValue) != -1) {
          return item;
        }
      });
    },
    backop() {
      window.history.go(-1);
    }
  },
  watch: {
    inputValue: function(val) {
      let that = this;
      // 防抖动
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        that.search();
        console.log(val);
      }, 1000);
    }
  }
};
</script>

<style scoped>
.search-main {
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
}

.srarchfunction-next {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}

.bbtned {
  border: none;
  background-color: transparent;
  outline: none;
}

.icon-jiantou2 {
  font-size: 28px;
  color: #252525;
}

.inputed {
  display: inline-block;
  width: 62%;
  border: none;
  border-radius: 15px;
  height: 30px;
  overflow: hidden;
  background: #f7f7f7;
  font-size: 12px;
  -webkit-box-align: center;
  line-height: 30px;
  position: absolute;
  top: 1px;
  left: 50px;
  padding-left: 35px;
  padding-right: 10px;
  box-sizing: border-box;
}

.inputed {
  padding-left: 50px;
}

.icon-fangdajing {
  z-index: 999;
  position: absolute;
  left: 65px;
  top: 5px;
}

.search-txt {
  position: static;
  padding: 2px;
  box-sizing: border-box;
  background-color: #e93b3d;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1px;
  position: absolute;
  margin-left: 82%;
}

.hengx {
  border: 0.3px solid rgb(219, 218, 218);
  margin-top: 12px;
}

.souwen {
  width: 100%;
  height: 100%;
  background: white;
  padding: 12px;
}

.souwena {
  font-size: 15px;
  line-height: 15px;
  color: #232326;
  width: 100px;
  padding-left: 1px;
}

.souwenb {
  width: 100%;
  height: 100%;
  display: flex;
}

.souwen-zia {
  height: 23px;
  line-height: 24px;
  border-radius: 3px;
  display: block;
  width: 21%;
  color: #686868;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: #f0f2f5;
  padding-left: 13px;
  padding-right: 13px;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
  margin-right: 10px;
}

.souwen-zib {
  height: 23px;
  line-height: 24px;
  border-radius: 3px;
  display: block;
  width: 21%;
  color: #686868;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: #f0f2f5;
  padding-left: 13px;
  padding-right: 13px;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
}

#big {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  /* border: 1px solid rgb(20, 243, 0); */
}

#txtitem {
  width: 100%;
  height: 100%;
  display: flex;
}

.txtimg {
  width: 40%;
  height: 100%;
  /* border: 1px solid red; */
}

.txtimg img {
  width: 100%;
  height: 100%;
}

.txtright {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid rgb(68, 145, 207); */
}

.txtright-text {
  color: #333333;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-left: 2px;
  margin-top: 5px;
}

.txtright-price {
  color: #e93b3d;
  font-size: 18px;
  margin-left: 1px;
  margin-top: -9px;
}

.txtright-ping {
  color: #999999;
  font-size: 12px;
  margin-left: 1px;
  margin-top: -16px;
}

.txtright-infoed {
  color: #999999;
  font-size: 12px;
  margin-left: 1px;
  margin-top: -11px;
}

.bbai {
  color: white;
  height: 50%;
}
</style>