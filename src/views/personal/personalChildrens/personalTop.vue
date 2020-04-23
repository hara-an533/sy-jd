<template>
  <div>
    <div class="personalmain">
      <div class="toplefti">
        <button class="bumr" @click="backed">
          <i class="iconfont icon-jiantouzuo"></i>
        </button>
      </div>
      <div class="topleftib">
        <p class="mytxt">我的京东</p>
      </div>
      <div class="topleftc">
        <p>...</p>
      </div>
    </div>
    <div class="Interface">
      <div class="setup">
          <i class="iconfont icon-shezhi1"></i>
          <div class="setuptext">
              账户设置
          </div>
      </div>
      <div class="Interface-main">
        <div class="Interface-left">
          <div class="Interface-head"></div>
          <p class="Interface-teaxt">待实名认证></p>
        </div>
        <div class="Interface-right">
          <div class="Interface-right-top">
            <p class="Interface-right-top-texta">youyonghui123</p>
            <div class="Interface-right-top-textb">
                <i class="iconfont icon-qianbi"></i>
            </div>
            <div class="Interface-right-top-textc">
                注册
            </div>
          </div>
          <div class="Interface-right-middle">
              用户名: youyonghui123
          </div>
          <div class="Interface-right-btom">
              京享值306
          </div>
        </div>
      </div>
      <div class="bulumain">
          <div class="bulumain-left">
          </div>
          <div class="bulumain-middle">
              免费试用 立领1张运...
          </div>
          <div class="bulumain-right">
              0元试用
              <span class="youicon">></span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personalTop",
  methods: {
    backed() {
      window.history.go(-1);
    }
  }
};
</script>

<style scoped>
.personalmain {
  width: 100%;
  height: 45px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: rgb(255, 255, 255);
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
}

.personalmain div {
  flex: 1;
}

.bumr {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  background: white;
}

.topleftib {
  margin-left: -69px;
}

.mytxt {
  font-size: 16px;
  color: #333333;
}

.toplefti {
  padding-left: 3%;
}

.icon-jiantouzuo {
  font-weight: 700;
}

.topleftc {
  width: 100%;
  height: 100%;
  position: absolute;
  margin-left: 92%;
  margin-top: 1.5%;
}

.topleftc p {
  margin-top: 4px;
  font-weight: 700;
}

.Interface {
  background: linear-gradient(90deg, #eb3c3c, #ff7459);
  box-sizing: border-box;
  min-height: 110px;
  padding-top: 25px;
  border-radius: 0 0 300px 300px/0 0 20px 20px;
  box-shadow: 0 2px 4px rgba(228, 57, 60, 0.4);
  padding: 10px 0 10px 15px;
  position: relative;
  overflow: hidden;
}

.Interface-head {
  width: 60px;
  height: 60px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 60px;
}

.Interface-main {
}

.Interface-head {
  background: url(https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png)
    0px 0px / 100% 100% no-repeat;
}
.Interface-teaxt {
    width: 15%;
  padding: 0 14px 0 6px;
  color: hsla(0, 0%, 100%, 0.7);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  font-size: 10px;
  white-space: nowrap;
  position: absolute;
  top:69%;
  left:-1%;
}

.Interface-left {
    position: relative;
}

.Interface-right-top {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    left:90px;
    top:-1px;
}

.Interface-right-top-textb {
   flex-shrink: 0;
    /* margin: 0 0 0 4px; */
    width: 16px;
    height: 16px;
    vertical-align: middle;
    border-radius: 8px;
    /* display: inline-block;  */
    z-index: 5;
    background: white;
    margin-left: 10px;
}

.icon-qianbi {
    font-size: 14px;
}

.Interface-right-top-textc {
    flex-shrink: 0;
    position: relative;
    margin: 0 5px 0 13px;
    padding: 0 6px 0 10px;
    height: 16px;
    line-height: 16px;
    vertical-align: middle;
    border-radius: 0 12px 12px 0;
    background-color: #c8483f;
    font-size: 10px;
    color: #fff;
}

.Interface-right-top-textc::before {
    position: absolute;
    width: 20px;
    height: 20px;
    left: -10px;
    top: 48%;
    margin-top: -10px;
    background: url(//wq.360buyimg.com/fd/base/img/my/icon_vip.png) no-repeat 0 0;
    background-size: 100px 20px;
    content: "";
}

.Interface-right-middle {
    font-size: 12px;
    color: hsla(0,0%,100%,.7);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    top:31%;
    left:28%;
}

.Interface-right-top-texta {
  color: rgba(255, 255, 255, 0.877);
}

.Interface-right-btom {
    width: 16%;
    height: 16px;
    line-height: 16px;
    padding: 0 8px;
    border-radius: 10px;
    font-size: 10px;
    color: #fff;
    background: #c8483f;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    top:51%;
    left:28%;
}

.setuptext {
    color: rgba(76,0,0,.7);
    font-size: 12px;
    padding-left: 15px;
    position: relative;
    height: 40px;
    line-height: 40px;
    position: absolute;
    left:80%;
    top:-10%;
}

.icon-shezhi1 {
    font-size: 12px;
    position: absolute;
    left:80%;
    top:1%;
    color: rgba(76,0,0,.7);
}

.bulumain {
    display: flex;
    width: 86%;
    height: 100%;
    box-sizing: border-box;
    padding: 7px 10px 10px;
    background: url(https://img11.360buyimg.com/jdphoto/s710x134_jfs/t1/43463/14/4447/108469/5cd2c002Ee4dcb4c9/445d4efb8eee08e9.png) no-repeat 0 0;
    background-size: 100% 67px;
    position: absolute;
    top:81px;
    left:23px;
    font-size: 12px;
    color: #FFE678;
}

.bulumain-left::before {
    position: absolute;
    content: "";
    width: 57px;
    height: 12px;
    left: 12px;
    top: 9px;
    background: url(https://img11.360buyimg.com/jdphoto/s113x21_jfs/t1/44130/31/4355/2489/5cd2d9bdE7fd63a96/155d2b916c3ede73.png) no-repeat 50%;
    background-size: 100% 100%;
}

.bulumain-middle {
    margin-left: 27%;
}

.youicon {
    font-weight: 700;
}

.bulumain-right {
    margin-left: 6%;
}
</style>