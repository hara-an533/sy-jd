<template>
  <div class="category">
    <h4 class="header">
      <slot name="header">热门分类</slot>
    </h4>
    <div class="content">
        <ul>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img01.png" alt="">
                    <span>手机</span>                 
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img02.jpg" alt="">
                   <span>全面屏手机</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img03.jpg" alt="">
                   <span>游戏手机</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img04.jpg" alt="">
                    <span>充电宝</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img05.jpg" alt="">
                    <span>体温计</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img06.jpg" alt="">
                    <span>中医保健</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img07.jpg" alt="">
                    <span>调节免疫</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img08.jpg" alt="">
                    <span>经管励志</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img09.jpg" alt="">
                    <span>投影机</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img10.jpg" alt="">
                    <span>游戏机</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/upload/img11.jpg" alt="">
                   <span>除菌液</span>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'Category'
};
</script>

<style>
.category {
    /* margin-left: 85px; */
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

.category li a{
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