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
</style>