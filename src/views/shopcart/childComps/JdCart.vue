<template>
  <div class="jd-cart">
    <div class="address_bar">
      <div class="address">无锡市滨湖区</div>
      <span class="address_btn">编辑商品</span>
    </div>
    <div class="section" v-for="item in products" :key="item.id">
      <div class="div_header">
        <div class="div_title">{{ item.title }}</div>
      </div>
      <div class="item">
        <div class="img">
          <img :src="item.url" width="100px" height="100px" alt />
        </div>
        <div class="content">
          <div class="name">
            <img :src="item.img" alt width="44px" height="14px" />
            <span>{{ item.desc }}</span>
          </div>
          <div class="sku-tag">{{ item.detail }}</div>
          <div class="price">
            <span>￥{{ item.price }}</span>
            <div class="num_wrap"></div>
          </div>
          <div class="m-action">
            <span>移入关注</span>
            <span>删除</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mac01 from "../../../assets/upload/mac01.webp";
import mac02 from "../../../assets/upload/mac02.webp";
import img from "../../../assets/images/internation.png";

export default {
  name: "JdCart",
  data() {
    return {
      products: [
        {
          id: 1,
          title: "卓悦环球海外专营店",
          url: mac01,
          img: img,
          desc: "魅可mac女士口红 sugar dada 血橙色",
          detail: "sugar dada 血橙色",
          price: "168.00"
        },
        {
          id: 2,
          title: "宏愿化妆品外专营店",
          url: mac02,
          desc:
            "【专柜正品】mac口红魅可CHILI小辣椒口红mac316泫雅色秀智款唇膏 CHILI 602#小辣椒铁锈红(秀智款)",
          detail: "CHILI 602#小辣椒铁锈红(秀智款)",
          price: "138.00"
        }
      ]
    };
  }
};
</script>

<style scoped>
.jd-cart .address_bar {
  margin: 44px 0 15px 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.address {
  position: relative;
  width: 102px;
  height: 45px;
  padding-left: 18px;
  color: #999;
}

.address::before {
  position: absolute;
  content: "";
  left: 0;
  top: 15px;
  width: 13px;
  height: 15px;
  background: url(../../../assets/images/sprite.png) no-repeat -30px -98px;
  background-size: 116px auto;
}

.jd-cart .section {
  height: 207px;
  background-color: #fff;
  margin-bottom: 15px;
}

.section .item {
  display: flex;
}

.div_header {
  position: relative;
  height: 46px;
  line-height: 46px;
  padding-left: 42px;
  color: #333;
  font-size: 16px;
  font-weight: 700;
}

.div_header::before {
  content: "";
  position: absolute;
  left: 12px;
  top: 12px;
  width: 20px;
  height: 20px;
  background: url(../../../assets/images/sprite.png) no-repeat 0px -68px;
  background-size: 116px auto;
}

.div_title {
  position: relative;
  padding-left: 25px;
}

.div_title::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0;
  top: 12px;
  background: url(../../../assets/images/sprite.png) no-repeat -40px -48px;
  background-size: 116px auto;
}

.div_title::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 10px;
  right: 50%;
  margin-right: -14px;
  top: 18px;
  background: url(../../../assets/images/tri.svg) no-repeat center;
  background-size: 6px 10px;
}

.item {
  position: relative;
  padding-left: 42px;
}

.item::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 16px;
  top: 41px;
  background: url(../../../assets/images/sprite.png) no-repeat 0px -68px;
  background-size: 116px auto;
}

.content {
    margin: 0 10px 0;
  /* margin-left: 11px; */
  color: #333;
}

.sku-tag {
  position: relative;
  background-color: #f7f7f7;
  border-radius: 2px;
  font-size: 10px;
  height: 20px;
  line-height: 20px;
  padding: 0 15px 0 5px;
}

.sku-tag::after {
  content: "";
  position: absolute;
  right: 5px;
  top: 10px;
  width: 10px;
  height: 10px;
  background: url(../../../assets/images/sprite.png) no-repeat -86px -72px;
  background-size: 116px auto;
}

.price {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color:#f2270c;;
}
</style>