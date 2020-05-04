<template>
  <div class="seckill">
    <div class="seckill-img"></div>
    <p class="seckilltext">8点场</p>
    <div class="time">
      <div>
        <div class="component-wrapper" id="flash-sale">
          <div class="sale-header">
            <div class="countdown-zone">
              <div class="countdown pure-css-countdown active">
                <div class="li">
                  <div class="digits-wrapper-hours">{{this.hou}}</div>
                </div>
                <p class="dian">:</p>
                <div class="li">
                  <div class="digits-wrapper-minutes">{{min}}</div>
                </div>
                 <p class="dian">:</p>
                <div class="li">
                  <div class="digits-wrapper-seconds">{{sec}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="Seckill">更多秒杀</p>
    <div class="skil-more">
        <img src="../../../assets/images/next.png" alt="">
    </div>
  </div>
</template>

<script>
// import CountDown from "vue2-countdown";
import moment from "moment";
export default {
  name: "Spike",
  data() {
    return {
      hou: 0,
      min: 0,
      sec: 0,
      ssec: 0,
      endTime: "",
      disprArr: []
    };
  },
  created() {
    let that = this;
    that.time();
  },
  methods: {
    time() {
      var that = this;
      var interval = setInterval(function timestampToTime() {
        var date =
          new Date(2020, 4, 23, 15, 10, 24, 999) - new Date().getTime();
        //new Date当前的时间戳，也可以换成自定义的时间戳
        if (date > 0) {
          let time = date / 1000;
          // 获取时、分、秒,毫秒
          that.hou =
            parseInt((time % (60 * 60 * 24)) / 3600) < 10
              ? "0" + parseInt((time % (60 * 60 * 24)) / 3600)
              : parseInt((time % (60 * 60 * 24)) / 3600);
          that.min =
            parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          that.sec =
            parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          that.ssec = parseInt(((date % (60 * 60 * 24)) % 3600) / 60) % 10;
        } else {
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.seckill {
  width: 98%;
  height: 35.95px;
  /* border: 1px solid red; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 0%;
}

button[disabled] {
  cursor: not-allowed;
}

.seckill-img {
  width: 4.9rem;
  height: 0.9rem;
  margin-top: 0.4rem;
  margin-right: 0.3rem;
  background: url(../../../assets/images/下载.png);
  background-size: contain;
}

.seckilltext {
  display: flex;
  width: 50px;
  color: #232326;
  font-size: 12px;
  margin-top: 16px;
  font-weight: bolder;
}

.time {
    margin-left: 5px;
    margin-top: 5px;
}
.countdown {
  display: flex;
  width: 66px;
  height: 15.99px;
}

.li {
    width: 14.99px;
    height: 12.98px;
    border: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
    padding: 2px;
}

.dian {
    margin-top: -5px;
    margin-left: 5px;
}

.Seckill {
    width: 63px;
    height: 35px;
    color: #f23030;
    font-size: 10px;
    margin-left: 80px;
    margin-top: 32px;
}

.skil-more {
   width: 12px;
   height: 12px;
   margin-top: -5px;
   position: absolute;
   left:305px;
   top:14px;
}

.skil-more img {
    width: 100%;
    height: 100%;
}

.digits-wrapper-hours {
  margin-right: 5px;
}
</style>