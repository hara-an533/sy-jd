<template>
  <div class="jd-cart">
    <div class="address_bar">
      <div class="address">无锡市滨湖区</div>
      <span class="address_btn">编辑商品</span>
    </div>
    <div class="section" v-for="(item,index) in $store.state.shopCart" :key="index">
      <div class="div_header" @touchstart="select">
        <div class="div_title">{{ item.title }}</div>
      </div>
      <div class="item">
        <i class="icon_select"></i>
        <div class="img">
          <img :src="item.url" width="100px" height="100px" alt @click="skipTo" />
        </div>
        <div class="content">
          <div class="name">
            <span>{{ item.desc }}</span>
          </div>
          <div class="sku-tag">{{ item.detail }}</div>
          <div class="price">
            <span>￥{{item.price*item.num}}</span>
            <div class="num_wrap">
              <span class="minus" @click="minus(index)"></span>
              <input type="text" :value="item.num" ref="inp" />
              <span class="plus" @click="add(index)"></span>
            </div>
          </div>
          <div class="m-action">
            <span @click="del(index)">删除</span>
            <span>移入关注</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flexBar_selected">
      <div class="all" @touchstart="allin">
        <i ref="icon"></i>
        全选
      </div>
      <div class="ouyprice">
        总计:
        <span>￥</span>
        <span ref="price">0.00</span>
      </div>
      <div class="buy" ref="shopping">
        去结算(
        <span ref="num">0</span>件）
      </div>
    </div>
  </div>
</template>

<script>
import mac01 from "../../../assets/upload/mac01.webp";
import mac02 from "../../../assets/upload/mac02.webp";
import img from "../../../assets/images/internation.png";
import lbn from "../../../assets/images/lbn.webp";
// import func from '../../../../vue-temp/vue-editor-bridge';

export default {
  name: "JdCart",
  data() {
    return {
      flag: true,
      // total:0,
      products: []
    };
  },
  methods: {
    select(e) {
      e.target.backgroundPosition = "-60px -48px";
    },
    allin() {
      if (this.flag == false) {
        this.$refs.icon.style.backgroundPosition = "0px -68px";
        this.$store.commit("getTotal");
        this.$refs.price.innerText = this.$store.state.total;
        this.$store.commit("getNum");
        this.$refs.num.innerText = this.$store.state.number;
        this.flag = true;
      } else if (this.flag == true) {
        this.$refs.icon.style.backgroundPosition = "-60px -48px";
        this.$refs.price.innerText = "0.00";
        this.$refs.shopping.opacity = ".3";
        this.$refs.num.innerText = "0";
        this.flag = false;
      }
    },
    minus(index) {
      console.log(index);
      this.$store.commit("minus", index);
      if (this.flag == true) {
        this.$store.commit("getTotal");
        this.$refs.price.innerText = this.$store.state.total;
        this.$store.commit("getNum");
        this.$refs.num.innerText = this.$store.state.number;
      }
    },
    add(index) {
      console.log(index);
      this.$store.commit("plus", index);
      if (this.flag == true) {
        this.$store.commit("getTotal");
        this.$refs.price.innerText = this.$store.state.total;
        this.$store.commit("getNum");
        this.$refs.num.innerText = this.$store.state.number;
      }
    },
    del(index) {
      this.$store.commit("delItem", index);
      this.$store.commit("getTotal");
      this.$refs.price.innerText = this.$store.state.total;
      this.$store.commit("getNum");
      this.$refs.num.innerText = this.$store.state.number;
    },
    skipTo() {
      this.$router.push({ path: "/main/home/ProductDetails" });
    }
  },
  created(){
    if(this.$store.state.shopCart.length<=0){
      this.flag==false;
      this.$refs.icon.style.backgroundPosition = "-60px -48px";
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

.flexBar_selected {
  position: fixed;
  left: 0;
  bottom: 48px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 6px 0 15px;
}

.flexBar_selected .all {
  position: relative;
  width: 40px;
  height: 50px;
  padding-top: 10px;
}

.all i {
  position: absolute;
  top: 4px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: url(../../../assets/images/sprite.png) no-repeat 0px -68px;
  background-size: 116px auto;
}

.flexBar_selected div:nth-child(2) {
  font-size: 16px;
  color: #333;
  font-weight: 700;
  padding-left: 65px;
}

.flexBar_selected div:nth-child(2) span {
  color: #f2270c;
}

.buy {
  width: 110px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  border-radius: 20px;
  margin-top: 5px;
  padding-left: 5px;
  background-image: linear-gradient(135deg, #f2270c, #f2270c 70%, #f24d0c);
  box-shadow: 0 6px 12px 0 rgba(255, 65, 66, 0.2);
}

.ouyprice {
  position: absolute;
  bottom: -9px;
}
</style>