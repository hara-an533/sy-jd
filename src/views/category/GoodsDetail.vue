<template>
  <div class="products">
    <div class="pro-header">
      <nav-bar></nav-bar>
      <ul class="selection">
        <li>
          综合
          <i class="icon_tri"></i>
        </li>
        <li>销量</li>
        <li>
          有货优先
          <i class="icon_tri"></i>
        </li>
        <li>筛选</li>
      </ul>
      <ul class="tab">
        <li>
          <a href="#">京东物流</a>
        </li>
        <li>
          <a href="#">新品</a>
        </li>
        <li>
          <a href="#">
            <span>
              品牌
              <i class="icon-tri"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              屏幕尺寸
              <i class="icon-tri"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <pro-detail></pro-detail>
    <pro-detail></pro-detail>
    <pro-detail></pro-detail>
  </div>
</template>

<script>
import NavBar from "./childComps/NavBar";
import ProDetail from "./childComps/ProDetail"
import sj01 from "../../assets/upload/sj01.jpg";

export default {
  name: "GoodsDetail",
  data() {
    return { products: [
        {url:sj01,
        desc: "",
        detail:""
        }
    ] };
  },
  components: {
    "nav-bar": NavBar,
    "pro-detail":ProDetail
  }
};
</script>

<style scoped>
.products {
  height: 100%;
  background-color: #fff;
}

.pro-header {
  overflow: hidden;
}

.selection {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.selection li:nth-child(1),
.selection li:nth-child(3) {
  color: #ff4142;
  position: relative;
  padding-right: 13px;
}

.icon_tri {
  width: 8px;
  height: 5px;
  background: url(../../assets/images/top.png);
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -1px;
  background-size: 8px auto;
}

.tab {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.tab li a {
  display: inline-block;
  height: 25px;
  line-height: 25px;
  padding: 2.5px 5px;
  color: #666;
  background-color: #f2f2f7;
  border-radius: 2px;
  width: 70px;
  font-size: 12px;
  text-align: center;
}

.tab li a span {
  position: relative;
  padding-right: 13px;
}

.icon-tri {
  width: 8px;
  height: 5px;
  background: url(../../assets/images/down.png);
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -1px;
  background-size: 8px auto;
}
</style>>
