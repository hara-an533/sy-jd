<template>
  <div class="kuai">
    <div class="expressNews">
      <div class="expressNews-left">
        <img src="../../../assets/images/kuaibao.jpg" alt />
      </div>
      <div class="expressNews-middle">
        <div class="marquee">
          <!-- <div class="marquee_title">
            <span>免费微报</span>
          </div> -->
          <div class="marquee_box">
            <ul class="marquee_list" :class="{marquee_top:animate}">
              <li :key="index" v-for="(item,index) in marqueeList">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="expressNews-shhu"><i class="line"></i></div>
      <div class="expressNews-right">更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "expressNews",
  data() {
    return {
      animate: false,
      marqueeList: [
        {
          name: "最新 骚年，你该换键盘了"
        },
        {
          name: "热门 孩子乳牙掉了千万别丢，可留"
        },
        {
          name: "HOT 宝宝用过的尿不湿不要丢掉，二次用可以"
        },
        {
          name: "推荐 学烘培很简单， 入门工具要必备"
        }
      ]
    };
  },
  created: function() {
    // 页面显示
    setInterval(this.showMarquee, 2000);
  },
  methods: {
    showMarquee: function() {
      this.animate = true;
      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      }, 300);
    }
  }
};
</script>

<style scoped>

.kuai {
  margin-bottom: 20px;
}
.expressNews {
  width: 93%;
  height: 100%;
  margin: 0 auto;
  /* border: 1px solid red; */
  padding: 5px;
  margin-top: 15px;
  margin-bottom: 25px;
  background: white;
  padding: 5px;
  vertical-align: middle;
}

.expressNews-left {
  width: 90.55px;
  height: 19.85px;
  margin-top: 13px;
}

.expressNews-left img {
  width: 100%;
  height: 100%;
}

.marquee {
  width: 225px;
  height: 19.85px;
  align-items:center;
  color: #3a3a3a;
  background-color: white;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
}
.marquee_title {
  padding: 0 20px;
  height: 26px;
  font-size: 14px;
  border-right: 1px solid #d8d8d8;
  align-items: center;
}
.marquee_box {
  display: block;
  position: relative;
  width: 150%;
  height: 45px;
  overflow: hidden;
  margin-top: -9px;
}
.marquee_list {
  display: block;
  position: absolute;
  top: -15px;
  left: 0;
  list-style: none;
}
.marquee_top {
  transition: all 0.5s;
  margin-top: -35px;
}
.marquee_list li {
  height: 31px;
  line-height: 18px;
  font-size: 14px;
  padding-left: 40px;
  overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap; 
width: 150px;
}
.marquee_list li span {
  padding: 0 2px;
}

.expressNews-middle {
  margin-left: 66px;
  margin-top: -15px;
}

.line {
  background: #ececec;
  width: 1.23px;
  height: 19.85px;
  display: inline-block;
  margin-right: .25rem;
  vertical-align: middle;
  font-style: normal;
  margin-left: 369px;
  margin-top: -55px;
}
.expressNews-right {
  font-size: 14.8px;
  color: #181818;
  float: right;
  margin-top: -49px;
}
</style>