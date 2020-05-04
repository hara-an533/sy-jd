<template>
  <div>
    <div class="recomment">
      <div class="foryou">
        <img src="../../../assets/images/tuijian.png" alt />
      </div>
    </div>
    <router-link to="/main/home/ProductDetails">
    <div class="obig">
        <div class="commodity" :key="'infout'+index" v-for="(item,index) in commoditylist">
        <ul class="commodity-ul">
          <li class="commodityli">
            <div class="commodityli-img">
              <img :src="item.picter" alt />
            </div>
            <div class="textsed">{{item.texts}}</div>
            <div class="buttton-text">
              <div class="buttton-price">￥{{item.price}}</div>
              <div class="buttton-leftsa">{{item.leftsa}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </router-link>
      <router-view></router-view>
    <div class="backtop" v-show="shoepop">
      <p @click="backtop">
        <i class="iconfont icon-fanhuidingbu1"></i>
      </p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      shoepop:false,
      commoditylist: [
        {
          id: "drink-01",
          picter: require("../../../assets/images/shangpin1.jpg"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "闪购"
        },
        {
          id: "drink-02",
          picter: require("../../../assets/images/shangpin2.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "满减"
        },
        {
          id: "drink-03",
          picter: require("../../../assets/images/shangpin3.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "闪购"
        },
        {
          id: "drink-04",
          picter: require("../../../assets/images/shangpin4.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "满减"
        },
        {
          id: "drink-05",
          picter: require("../../../assets/images/shangpin5.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "满减"
        },
        {
          id: "drink-06",
          picter: require("../../../assets/images/shangpin6.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "闪购"
        },
        {
          id: "drink-07",
          picter: require("../../../assets/images/shangpin7.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "满减"
        },
        {
          id: "drink-08",
          picter: require("../../../assets/images/shangpin8.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "闪购"
        },
        {
          id: "drink-09",
          picter: require("../../../assets/images/shangpin9.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "闪购"
        },
        {
          id: "drink-10",
          picter: require("../../../assets/images/shangpin10.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "满减"
        },
        {
          id: "drink-11",
          picter: require("../../../assets/images/shangpin11.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "闪购"
        },
        {
          id: "drink-12",
          picter: require("../../../assets/images/shangpin12.webp"),
          texts:
            "罗宾尼（LOBINNI）品牌正品手表男士简约超薄全自动机械表防水皮带商",
          price: "978",
          leftsa: "闪购"
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.showbtn, true);
  },
  methods: {
    // 显示回到顶部按钮
    showbtn() {
      //  console.log( document.documentElement.scrollTop);

      // 自己加的,控制回到顶部按纽出现和消失
       if(document.documentElement.scrollTop>400){
         this.shoepop = true;
        // console.log(this.shoepop)
       } else {
         this.shoepop = false;
       }
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
    },
    /**
     * 回到顶部功能实现过程：
     * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
     * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
     * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
     * 4. 最后记得在移动到顶部时，清除定时器
     */
    backtop() {
      var timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
           console.log(osTop)
        }
         console.log(osTop)
         console.log(ispeed)
      }, 30);
    }
  }
};
</script>

<style scoped>
.recomment {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* border: 1px solid red; */
  background: white;
  margin-bottom: 0px;
}

.foryou {
  width: 100%;
  height: 100%;
}

.foryou img {
  width: 100%;
  height: 100%;
}

.obig {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 18px;
  flex-grow: 1;
  flex-shrink: 0;
}

.commodity {
  width: 40%;
  height: 100%;
  margin: 0 auto;
  margin-left: 8px;
}

.commodity-ul {
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
}

.commodityli {
  width: 78%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.commodityli-img {
  width: 155px;
  height: 155px;
}

.commodityli-img img {
  width: 100%;
  height: 100%;
}

.textsed {
  width: 153px;

  word-break: break-all;

  text-overflow: ellipsis;

  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/

  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/

  -webkit-line-clamp: 2; /** 显示的行数 **/

  overflow: hidden; /** 隐藏超出的内容 **/
  color: #232326;
  font-size: 13px;
}

.buttton-text {
  display: flex;
  width: 100%;
}

.buttton-price {
  font-size: 16px;
  color: #f23020;
  margin-left: -10px;
}

.buttton-leftsa {
  border: 1px solid #e4393c;
  color: #e4393c;
  font-size: 10px;
  padding: 0 3px;
  margin-right: 5px;
  padding: 2px;
  margin-left: 10px;
}

.backtop {
  position: fixed;
  bottom: 90px;
  left:205px;
  /* background: white; */
  z-index: 999;
  width: 38px;
  height: 38px;
}

.icon-fanhuidingbu1 {
  font-size: 38px;
}
</style>