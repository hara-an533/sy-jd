<template>
  <div>
    <div class="productmain">
      <div class="leftnt" @click="badeee">
        <i class="iconfont icon-icon--"></i>
      </div>
      <prozujian></prozujian>
      <div class="producttext">
        <p class="jiagea">
          <span class="asdwe">￥</span>
          1098
        </p>
        <div class="product-icona">
          <i class="iconfont icon-qian"></i>
          <span class="producttexta">降价提醒</span>
        </div>
        <div class="product-iconb">
          <i class="iconfont icon-shoucang1"></i>
          <span class="producttexta">收藏</span>
        </div>
      </div>
      <div class="productmiao">
        <p class="productmiaoa">
          罗宾尼（LOBINNI）正品手表男全自动机械表
          男士手表超薄休闲商务防水皮带品牌瑞士风格腕表名表男款
          【热卖爆款-皮带款】玫壳-白面【礼盒包装】
        </p>
        <p class="productmiaob">
          【4.25-4.26品牌特卖】爆款直降！领大额优惠券，
          叠加优惠券享双重优惠【保价365天】【6期免息，
          官方直营】...
        </p>
      </div>
      <productxuanxiang></productxuanxiang>
      <pro-introduce></pro-introduce>
    </div>
  </div>
</template>

<script>
import prozujian from "./productswiper.vue";
import productxuanxiang from "./productxuanxiang.vue"
import ProIntroduce from "./ProIntroduce"

export default {
  name: "productswiper",
  components: {
    prozujian,
    productxuanxiang,
    "pro-introduce":ProIntroduce
  },
  methods: {
    badeee() {
      window.history.go(-1);
    }
  }
};
</script>

<style scoped>
.productmain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.leftnt {
  position: absolute;
  z-index: 999;
  left: 10px;
  top: 10px;
}

.icon-icon-- {
  color: white;
}

.producttext {
  width: 100%;
  height: 35px;
  background: white;
  display: flex;
  align-items: center;
  padding: 18px;
  margin-top: 20px;
  justify-content: space-between;
}

.jiagea {
  color: #f2270c;
  font-size: 30px;
}
.asdwe {
  color: #f2270c;
  font-size: 16px;
}

.product-icona {
  display: flex;
  flex-direction: column;
  color: #333333;
  font-size: 9px;
  margin-left: 40%;
  text-align: center;
}

.product-iconb {
  display: flex;
  flex-direction: column;
  color: #333333;
  font-size: 9px;
  margin-left: -7%;
}

.productmiao {
  width: 100%;
  height: 155px;
  display: flex;
  flex-direction: column;
  background: white;
  /* margin-bottom: 60px; */
  padding: 12px 18px;
}

.productmiao p {
  line-height: 1;
}

.productmiaoa {
  color: #262626;
  font-size: 16px;
  font-weight: 700;
}

.productmiaob {
  width: 100%;
  height: 48px;
  color: #666666;
  font-size: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  padding: 0 20px 0 0;
}
</style>