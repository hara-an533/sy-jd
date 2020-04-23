<template>
  <div>
    <div class="midddle-two">
      <div class="midddle-two-img">
        <img src="../../../assets/images/xinren99.jpg" alt />
        <img src="../../../assets/images/xinrenzhuanxiang.jpg" alt />
      </div>
    </div>
   <div class="master">
      <div class="masterHome">
        <img src="../../../assets/images/dongjiaxiaoyuan.jpg" alt />
      </div>
    </div>
    <div class="master-main">
      <div class="master-main-top">
        <div class="master-main-top-left">
          <p class="left-text">回家看看</p>
          <p class="left-text2">小长假回家陪爸妈</p>
          <div class="master-main-top-left-img">
            <img src="../../../assets/images/huijia1.jpg" alt />
            <img src="../../../assets/images/huijia2.jpg" alt />
          </div>
        </div>
        <div class="master-main-top-left">
          <p class="left-text">唱片潮流</p>
          <p class="left-text2">遇见春光</p>
          <div class="master-main-top-left-img">
            <img src="../../../assets/images/sheyin.jpg" alt />
            <img src="../../../assets/images/shishangxie.jpg" alt />
          </div>
        </div>
      </div>
      <div class="master-main-button">
        <ul class="button-main">
          <li>
            <p class="button-text">下厨做饭</p>
            <p class="button-text2">创房能手</p>
            <div class="buttonimg">
              <img src="../../../assets/images/xiachu1.jpg" alt />
            </div>
          </li>
          <li>
            <p class="button-text">唱片潮流</p>
            <p class="button-text2">创房能手</p>
            <div class="buttonimg">
              <img src="../../../assets/images/changpian2.jpg" alt />
            </div>
          </li>
          <li>
            <p class="button-text">追剧零食</p>
            <p class="button-text2">创房能手</p>
            <div class="buttonimg">
              <img src="../../../assets/images/lingshi.jpg" alt />
            </div>
          </li>
          <li>
            <p class="button-text">租房贵族</p>
            <p class="button-text2">创房能手</p>
            <div class="buttonimg">
              <img src="../../../assets/images/zufang.jpg" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourtYard"
};
</script>
<style scoped>
.midddle-two {
  width: 98%;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
}

.midddle-two-img {
  width: 100%;
  height: 148.8px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.midddle-two-img img {
  width: 50%;
  height: 148.8px;
  display: flex;
}

.master {
  width: 100%;
  height: 100%;
  background: #fff;
}
.masterHome {
  width: 100%;
  height: 100%;
}

.masterHome img {
  width: 100%;
  height: 100%;
}

.master-main {
  width: 98%;
  height: 100%;
  margin: 0 auto;
  /* border: 1px solid blue; */
  background: rgb(253, 253, 253);
}

.master-main-top {
  width: 100%;
  height: 148.87px;
  margin: 0 auto;
  color: #666666;
  background: rgb(255, 255, 255);
  display: flex;
}

.master-main-top-left {
  width: 50%;
  height: 100%;
  /* border: 1px solid red; */
  padding: 5px;
  margin-left: 2px;
}

.left-text {
  font-size: 13.65px;
  background: linear-gradient(90deg, #45caff, #1471fb);
  color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;
  margin-top: -2px;
  margin-left: 10px;
}

.left-text2 {
  font-size: 10.24px;
  color: #777661;
  margin-top: -14px;
  margin-left: 10px;
}

.master-main-top-left-img {
  width: 100%;
  height: 80px;
  display: flex;
  margin-top: -5px;
  /* margin-left: 15px; */
}

.master-main-top-left-img img {
  width: 71px;
  height: 71px;
  /* margin-right: 33px; */
}

.master-main-button {
  width: 100%;
  height: 50%;
  margin-left: -21px;
  /* border: 1px solid firebrick; */
}

.button-main {
  width: 100%;
  height: 50%;
  display: flex;
  text-align: center;
  align-items: center;
  list-style: none;
  margin-left: 20px;
  flex-grow: 1;
  flex-shrink: 0;
}

.button-main li {
  width: 25%;
  height: 100%;
  margin-right: 5px;
  /* border: 1px solid red; */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
}

.buttonimg {
  width: 100%;
  height: 100%;
  margin-left: 1px;
}

.buttonimg img {
  width: 100%;
  height: 100%;
}

.button-text {
  width: 100%;
  font-size: 13.65px;
  line-height: 1.125rem;
  color: #000000;
  font-weight: bolder;
  margin-top: -2px;
  margin-left: -6px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  font-weight: 700;
  max-width: 100%;
}

.button-text2 {
  font-size: 10.8px;
  color: #666771;
  margin-top: -13px;
  margin-left: -24px;
}
</style>