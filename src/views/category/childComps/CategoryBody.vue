<template>
  <div class="category-box">
    <div class="category-tab" ref="categoryTab">
      <ul
        class="rootList"
        @touchstart="tabTouch"
        @touchmove="touchMove"
        @touchend="touchEnd"
        @click="tab"
        ref="tab"
      >
        <li class="current">热门推荐</li>
        <li>手机数码</li>
        <li>电脑办公</li>
        <li>家用电器</li>
        <li>计生情趣</li>
        <li>美妆护肤</li>
        <li>个护清洁</li>
        <li>汽车生活</li>
        <li>京东超市</li>
        <li>男装</li>
        <li>男鞋</li>
        <li>女装</li>
        <li>女鞋</li>
        <li>母婴童装</li>
        <li>图书音像</li>
        <li>运动户外</li>
        <li>内衣配饰</li>
        <li>食品生鲜</li>
        <li>酒水饮料</li>
        <li>家具家装</li>
        <li>家具厨具</li>
        <li>箱包手袋</li>
        <li>钟表珠宝</li>
        <li>玩具乐器</li>
        <li>医药保健</li>
        <li>宠物生活</li>
        <li>礼品鲜花</li>
        <li>农资绿植</li>
        <li>生活旅行</li>
        <li>奢侈品</li>
      </ul>
    </div>
    <div
      class="branchList-content"
      @touchstart="touch"
      @touchmove="move"
      @touchend="end"
      ref="cate"
    >
      <div class="branchList-div" v-show="i==0" ref="branch">
        <category></category>
        <category>
          <template slot="header">家电搜索</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==1" >
        <category>
          <template slot="header">手机通讯</template>
        </category>
        <category>
          <template slot="header">手机配件</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==2">
        <category>
          <template slot="header">电脑整机</template>
        </category>
        <category>
          <template slot="header">外设产品</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==3">
        <category>
          <template slot="header">厨房小店</template>
        </category>
        <category>
          <template slot="header">个护健康</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==4">
        <category>
          <template slot="header">男用器具</template>
        </category>
        <category>
          <template slot="header">女用器具</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==5">
        <category>
          <template slot="header">面部护肤</template>
        </category>
        <category>
          <template slot="header">男士护肤</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==6">
        <category>
          <template slot="header">洗发护发</template>
        </category>
        <category>
          <template slot="header">身体护理</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==7">
        <category>
          <template slot="header">汽车装饰</template>
        </category>
        <category>
          <template slot="header">乘用车</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==8">
        <category>
          <template slot="header">休闲零食</template>
        </category>
        <category>
          <template slot="header">个护清洁</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==9">
        <category>
          <template slot="header">男士内搭</template>
        </category>
        <category>
          <template slot="header">男士外套</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==10">
        <category>
          <template slot="header">流行男鞋</template>
        </category>
        <category>
          <template slot="header">专柜名品</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==11">
        <category>
          <template slot="header">上装</template>
        </category>
        <category>
          <template slot="header">夏装</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==12">
        <category>
          <template slot="header">时尚女鞋</template>
        </category>
        <category>
          <template slot="header">国货名品</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==13">
        <category>
          <template slot="header">奶粉</template>
        </category>
        <category>
          <template slot="header">营养辅食</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==14">
        <category>
          <template slot="header">文学</template>
        </category>
        <category>
          <template slot="header">教材教辅</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==15">
        <category>
          <template slot="header">运动鞋包</template>
        </category>
        <category>
          <template slot="header">户外鞋服</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==16">
        <category>
          <template slot="header">内裤</template>
        </category>
        <category>
          <template slot="header">袜子</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==17">
        <category>
          <template slot="header">进口食品</template>
        </category>
        <category>
          <template slot="header">休闲食品</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==18">
        <category>
          <template slot="header">中外名酒</template>
        </category>
        <category>
          <template slot="header">水</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==19">
        <category>
          <template slot="header">厨房卫浴</template>
        </category>
        <category>
          <template slot="header">灯饰照明</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==20">
        <category>
          <template slot="header">家纺</template>
        </category>
        <category>
          <template slot="header">家装软饰</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==21">
        <category>
          <template slot="header">潮流女包</template>
        </category>
        <category>
          <template slot="header">精品男包</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==22">
        <category>
          <template slot="header">钟表</template>
        </category>
        <category>
          <template slot="header">时尚饰品</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==23">
        <category>
          <template slot="header">遥控电动</template>
        </category>
        <category>
          <template slot="header">积木拼插</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==24">
        <category>
          <template slot="header">中西药品</template>
        </category>
        <category>
          <template slot="header">保健器械</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==25">
        <category>
          <template slot="header">狗狗</template>
        </category>
        <category>
          <template slot="header">猫咪</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==26">
        <category>
          <template slot="header">礼品</template>
        </category>
        <category>
          <template slot="header">鲜花</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==27">
        <category>
          <template slot="header">花卉绿植</template>
        </category>
        <category>
          <template slot="header">种子</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==28">
        <category>
          <template slot="header">京东生活</template>
        </category>
        <category>
          <template slot="header">演出票务</template>
        </category>
      </div>
      <div class="branchList-div" v-show="i==29">
        <category>
          <template slot="header">大牌推荐</template>
        </category>
        <category>
          <template slot="header">奢品分类</template>
        </category>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "../../../components/content/Category";

export default {
  name: "CategoryBody",
  data() {
    return {
      startY: 0,
      starty: 0,
      y: 0,
      Y: 0,
      moveY: 0,
      movey: 0,
      minTop: 0,
      min: 0,
      max: 0,
      maxTop: 0,
      minBouceTop: 0,
      minBouce: 0,
      maxBouceTop: 0,
      maxBouce: 0,
      i: 0
    };
  },
  components: {
    category: Category
  },
  methods: {
    touch(e) {
      this.starty = e.targetTouches[0].pageY;
    },
    move(e) {
      this.movey = e.targetTouches[0].pageY - this.starty;
      this.min = this.$refs.cate.offsetHeight - this.$refs.branch.offsetHeight;
      this.maxBouce = this.max + 100;
      this.minBouce = this.min - 100;
      if (
        this.Y + this.movey < this.minBouce ||
        this.Y + this.movey > this.maxBouce
      ) {
        return;
      }
      this.$refs.branch.style.transition = "none";
      this.$refs.branch.style.top = this.Y + this.movey + "px";
    },
    end(e) {
     if (this.Y + this.movey < this.min) {
        this.$refs.branch.style.transition = "all .5s";
        this.$refs.branch.style.top = this.min + "px";
        this.Y = this.min;
      } else if (this.Y + this.movey > this.max) {
        this.$refs.branch.style.top = this.max + "px";
        this.$refs.branch.style.transition = "all .5s";
        this.Y = this.max;
      } else {
        this.Y += this.movey;
      }
    },
    tabTouch(e) {
      this.startY = e.targetTouches[0].clientY;
    },
    touchMove(e) {
      this.moveY = e.targetTouches[0].pageY - this.startY;
      this.minTop =
        this.$refs.categoryTab.offsetHeight - this.$refs.tab.offsetHeight;
      this.maxBouceTop = this.maxTop + 160;
      this.minBouceTop = this.minTop - 160;
      //   console.log(this.minTop);
      if (
        this.y + this.moveY < this.minBouceTop ||
        this.y + this.moveY > this.maxBouceTop
      ) {
        return;
      }
      this.$refs.tab.style.transition = "none";
      this.$refs.tab.style.top = this.y + this.moveY + "px";
    },
    touchEnd(e) {
      if (this.y + this.moveY < this.minTop) {
        this.$refs.tab.style.transition = "all .5s";
        this.$refs.tab.style.top = this.minTop + "px";
        this.y = this.minTop;
      } else if (this.y + this.moveY > this.maxTop) {
        this.$refs.tab.style.top = this.maxTop + "px";
        this.$refs.tab.style.transition = "all .5s";
        this.y = this.maxTop;
      } else {
        this.y += this.moveY;
        // console.log(this.y);
      }
    },
    tab(e) {
      for (let i = 0; i < e.target.parentNode.children.length; i++) {
        e.target.parentNode.children[i].classList.remove("current");
        e.target.parentNode.children[i].setAttribute("index", i);
      }
      e.target.classList.add("current");
      const index = e.target.getAttribute("index");
      this.i = index;
      this.$refs.tab.style.transition = "top .5s";
      if (
        -index * e.target.offsetHeight <
        this.$refs.categoryTab.offsetHeight - this.$refs.tab.offsetHeight
      ) {
        this.$refs.tab.style.top =
          this.$refs.categoryTab.offsetHeight -
          this.$refs.tab.offsetHeight +
          "px";
        this.y =
          this.$refs.categoryTab.offsetHeight - this.$refs.tab.offsetHeight;
      } else {
        this.$refs.tab.style.top = -(index * e.target.offsetHeight) + "px";
        this.y = -(index * e.target.offsetHeight);
      }
    }
  }
};
</script>

<style>
.category-box {
  padding-top: 44px;
}

.rootList {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

.rootList li.current {
  background-color: #fff;
  color: #ec5052;
}

.category-tab {
  position: relative;
  float: left;
  height: 719px;
  width: 86px;
  background: #f8f8f8;
  overflow: hidden;
}

.rootList li {
  height: 46px;
  line-height: 46px;
  width: 100%;
  text-align: center;
}

.branchList-content {
  position: relative;
  float: right;
  overflow: hidden;
  height: 719px;
  width: 289px;
}

.branchList-content .branchList-div{
  position: absolute;
  right: 0;
  top: 0;
}
</style>