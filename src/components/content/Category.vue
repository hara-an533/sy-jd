<template>
  <div class="category">
    <h4 class="header">
      <slot name="header">热门分类</slot>
    </h4>
    <div class="content">
      <ul>
        <router-link tag="li" v-for="item in linkLists" :key="item.id" :to="'/main/category/'+item.name">
          <img :src="item.url" alt />
          <span>{{ item.name }}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import img01 from "../../../public/images/img01.png";
import img02 from "../../../public/images/img02.jpg";
import img03 from "../../../public/images/img03.jpg";
import img04 from "../../../public/images/img04.jpg";
import img05 from "../../../public/images/img05.jpg";
import img06 from "../../../public/images/img06.jpg";
import img07 from "../../../public/images/img07.jpg";
import img08 from "../../../public/images/img08.jpg";
import img09 from "../../../public/images/img09.jpg";
import img10 from "../../../public/images/img10.jpg";
import img11 from "../../../public/images/img11.jpg";

export default {
  name: "Category",
  data() {
    return {
      linkLists: [
        { id: 1, url: img01, name: "手机" },
        { id: 2, url: img02, name: "全面屏手机" },
        { id: 3, url: img03, name: "游戏手机" },
        { id: 4, url: img04, name: "充电宝" },
        { id: 5, url: img05, name: "体温计" },
        { id: 6, url: img06, name: "中医保健" },
        { id: 7, url: img07, name: "调节免疫" },
        { id: 8, url: img08, name: "经管励志" },
        { id: 9, url: img09, name: "投影机" },
        { id: 10, url: img10, name: "游戏机" },
        { id: 11, url: img11, name: "除菌液" }
      ]
    };
  }
};
</script>

<style>
.category {
  background-color: #fff;
  padding: 19px 7px 0;
}

.category ul {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  align-content: space-around;
  margin-top: 7px;
}

.category ul li {
  width: 32%;
}

.category img {
  width: 70px;
  height: 70px;
}

.category li {
  display: flex;
  height: 107px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.category li span {
  color: #333;
  height: 35px;
  line-height: 20px;
  margin-top: 2px;
}
</style>