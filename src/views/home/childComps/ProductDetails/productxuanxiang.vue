<template>
  <div>
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
         <p class="kaone-top"><span class="kaone-topa">放心购</span><span span class="kaone-topb"><i  @click="closed" class="iconfont icon-guanbi"></i></span></p>
          <div class="kaone-img">
               <img src="../../../../assets/images/kaone.jpg" alt />
          </div>
          <p class="kaoneque"  @click="closed">确定</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "productxuanxiang",
  data(){
      return {
          oped:false
      }
  },
  methods:{
      openbox(){
          this.oped=true;
      },
      closed(){
          this.oped=false;
      }
  }
};
</script>

<style scoped>
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
    background-image: -webkit-linear-gradient(315deg,#f2140c,#f2270c 70%,#f24d0c);
    background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
    color: #fff;
    border-width: 0;
    text-align: center;
    margin: 0 auto;
}
</style>