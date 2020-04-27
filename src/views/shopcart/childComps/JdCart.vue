<template>
  <div class="jd-cart">
    <div class="address_bar">
      <div class="address">无锡市滨湖区</div>
      <span class="address_btn">编辑商品</span>
    </div>
    <div class="section" v-for="item in products" :key="item.id">
      <div class="div_header" @touchstart="select">
        <div class="div_title">{{ item.title }}</div>
      </div>
      <div class="item">
        <i class="icon_select"></i>
        <div class="img">
          <img :src="item.url" width="100px" height="100px" alt />
        </div>
        <div class="content">
          <div class="name">
            <span>{{ item.desc }}</span>
          </div>
          <div class="sku-tag">{{ item.detail }}</div>
          <div class="price">
            <span>￥{{ item.price }}</span>
            <div class="num_wrap">
              <span class="minus"></span>
              <input type="text" value="1" />
              <span class="plus"></span>
            </div>
          </div>
          <div class="m-action">
            <span>删除</span>
            <span>移入关注</span>
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
  },
  methods:{
select(e){
    console.log('啦啦啦');
e.target.background="-60px -48px"
  }
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
  pointer-events: none;
}

.div_title::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0;
  top: 12px;
  background: url(../../../assets/images/sprite.png) no-repeat 0px -28px;
  background-size: 116px auto;
  pointer-events: auto;
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

.item .icon_select {
  position: absolute;
  height: 100%;
  width: 50px;
  left: 0;
}

.item .icon_select::before {
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
  color: #f2270c;
}

.name span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.num_wrap span {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}

.num_wrap input {
  width: 30px;
  height: 20px;
  border: none;
  text-align: center;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  background-color: #f7f7f7;
}

.num_wrap .minus::before,
.num_wrap .plus::before {
  content: "";
  position: absolute;
  left: 50%;
  margin-left: -4px;
  top: 50%;
  width: 10px;
  height: 2px;
  background: hsla(0, 0%, 80%, 0.3);
  font-size: 16px;
}

.num_wrap .plus {
  background-color: #f7f7f7;
}

.num_wrap .plus::before {
  background-color: #333;
}

.num_wrap .plus::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -4px;
  width: 2px;
  height: 10px;
  background: #333;
  font-size: 16px;
}

.m-action {
  height: 15px;
  width: 100%;
  margin: 10px 10px 0 0;
  display: flex;
  flex-direction: row-reverse;
  font-size: 10px;
  color: #999;
}

.m-action span:nth-child(2) {
  margin-right: 20px;
}
</style>