<template>
  <ul class="pro-option-detail">
    <li>
      <div class="img">
        <img src="../../../assets/upload/sj01.jpg" alt />
      </div>
      <div class="desc">
        <p class="pro-option-title">荣耀9X 麒麟810 4000mAh续航 4800万超清夜拍 6.59英寸升降全面屏 全网通6GB+64GB 魅海蓝</p>
        <div class="pro-option-price">
          ￥<span>1299.00</span>
        </div>
        <div class="pro-option_title">
          <img src="../../../assets/images/self-support.png" alt />
          <span class="comments">145万+条评论</span>
        </div>
        <span class="shop_name">荣耀京东自营旗舰店</span>
      </div>
    </li>
    <li>
      <div class="img">
        <img src="../../../assets/upload/sj02.jpg" alt />
      </div>
      <div class="desc">
        <p class="pro-option-title">Apple iPhone 11</p>
        <div class="pro-option-attr">
          <span>128GB</span>
          <span>6.1英寸</span>
        </div>
        <div class="pro-option-price">
          ￥<span>5999.00</span>
        </div>
        <div class="pro-option_title">
          <img src="../../../assets/images/self-support.png" alt />
          <span class="comments">171万+条评论</span>
        </div>
        <span class="shop_name">Apple产品京东自营旗舰店</span>
      </div>
    </li>
    <li>
      <div class="img">
        <img src="../../../assets/upload/sj03.jpg" alt />
      </div>
      <div class="desc">
        <p class="pro-option-title">海语（HAIYU）H6 电信手机三防老人机天翼电信2G电霸老人手机 黑色</p>
        <div class="pro-option-price">
          ￥<span>89.00</span>
        </div>
        <div class="pro-option_title">
          <span class="comments">1900+条评论</span>
        </div>
      </div>
    </li>
    <li>
      <div class="img">
        <img src="../../../assets/upload/sj04.jpg" alt />
      </div>
      <div class="desc">
        <p class="pro-option-title">小米（MI） Redmi 8A</p>
        <div class="pro-option-attr">
          <span>4GB运存</span>
          <span>64GB</span>
        </div>
        <div class="pro-option-price">
          ￥<span>699.00</span>
        </div>
        <div class="pro-option_title">
          <img src="../../../assets/images/self-support.png" alt />
          <img src="../../../assets/images/rest.png" alt />
          <span class="comments">62万+条评论</span>
        </div>
        <span class="shop_name">小米京东自营旗舰店</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name:"ProOption"
}
</script>

<style scoped>
.pro-option-detail {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background-color: #f7f7f7;
  padding: 17px 0 0 10px;
  color: #666;
}

.pro-option-detail li {
  display: flex;
  flex-direction: column;
  width: 172.6px;
  height: 297.6px;
  background-color: #fff;
  margin-bottom: 10px;
}

.pro-option-detail li:nth-child(even) {
  margin-left: 10px;
}

.pro-option-detail .img img{
  width: 176.2px;
  height: 176.2px;
}

.desc {
  padding: 5px 10px 3px;
} 

.desc .pro-option-title {
    overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
}

.pro-option-attr span {
  background-color: #f2f2f7;
  color: #ababac;
  font-size: 10px;
  padding: 2px 5px;
  margin-right: 5px;
}

.pro-option-price {
  color: #ea4244;
  font-size: 18px;
  margin-top: 5px;
}

.pro-option_title {
  font-size: 12px;
  color: #999;
}

.pro-option_title img {
  height: 14px;
  margin-right: 5px;
  vertical-align: middle;
}

.pro-option-detail .shop_name {
  color: #a8a8a8;
  font-size: 12px;
}

</style>