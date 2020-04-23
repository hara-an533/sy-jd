<template>
  <ul class="pro-detail">
    <li>
      <div class="img">
        <img src="../../../assets/upload/sj01.jpg" alt />
      </div>
      <div class="desc">
        <p class="pro-title">荣耀9X 麒麟810 4000mAh续航 4800万超清夜拍 6.59英寸升降全面屏 全网通6GB+64GB 魅海蓝</p>
        <div class="pro-attr">
          <span>6GB运存</span>
          <span>64GB</span>
          <span>6.59英寸</span>
        </div>
        <div class="pro-price">
          ￥
          <span>1299.00</span>
        </div>
        <div class="pro_title">
          <img src="../../../assets/images/self-support.png" alt />
          <img src="../../../assets/images/rest.png" alt />
          <span class="comments">145万+条评论</span>
          <span>好评率97%</span>
        </div>
        <span class="shop_name">荣耀京东自营旗舰店</span>
      </div>
    </li>
    <li>
      <div class="img">
        <img src="../../../assets/upload/sj02.jpg" alt />
      </div>
      <div class="desc">
        <p class="pro-title">Apple iPhone 11</p>
        <div class="pro-attr">
          <span>128GB</span>
          <span>6.1英寸</span>
        </div>
        <div class="pro-price">
          ￥
          <span>5999.00</span>
        </div>
        <div class="pro_title">
          <img src="../../../assets/images/self-support.png" alt />
          <span class="comments">171万+条评论</span>
          <span>好评率94%</span>
        </div>
        <span class="shop_name">Apple产品京东自营旗舰店</span>
      </div>
    </li>
    <li>
      <div class="img">
        <img src="../../../assets/upload/sj03.jpg" alt />
      </div>
      <div class="desc">
        <p class="pro-title">海语（HAIYU）H6 电信手机三防老人机天翼电信2G电霸老人手机 黑色</p>
        <div class="pro-price">
          ￥
          <span>89.00</span>
        </div>
        <div class="pro_title">
          <span class="comments">1900+条评论</span>
          <span>好评率98%</span>
        </div>
      </div>
    </li>
    <li>
      <div class="img">
        <img src="../../../assets/upload/sj04.jpg" alt />
      </div>
      <div class="desc">
        <p class="pro-title">小米（MI） Redmi 8A</p>
        <div class="pro-attr">
          <span>4GB运存</span>
          <span>64GB</span>
        </div>
        <div class="pro-price">
          ￥
          <span>699.00</span>
        </div>
        <div class="pro_title">
          <img src="../../../assets/images/self-support.png" alt />
          <img src="../../../assets/images/rest.png" alt />
          <span class="comments">62万+条评论</span>
          <span>好评率97%</span>
        </div>
         <span class="shop_name">小米京东自营旗舰店</span>
      </div>
    </li>
  </ul>
</template>

<script>
import sj01 from "../../../assets/upload/sj01.jpg";
export default {
  name: "ProDetail"
};
</script>

<style>
.pro-detail li {
  width: 100%;
  height: 149px;
  display: flex;
  padding: 10px 0 5px 10px;
  border-bottom: 1px solid #f4f4f4;
}

.pro-detail li .img img {
  width: 120px;
  height: 120px;
  margin-top: 12px;
}

.desc {
  padding: 10px 10px 8px;
}

.desc .pro-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
}

.pro_title img {
  height: 14px;
  margin-right: 5px;
  vertical-align: middle;
}

.pro_title img:first-child {
  width: 24px;
}

.pro_title img:nth-child(2) {
  width: 34px;
}

.pro-attr span {
  background-color: #f2f2f7;
  color: #ababac;
  font-size: 10px;
  padding: 2px 5px;
  margin-right: 5px;
}
.pro-price {
  color: #ea4244;
  font-size: 18px;
  margin-top: 5px;
}

.pro_title .shop_name {
  color: #a8a8a8;
  font-size: 12px;
}
</style>