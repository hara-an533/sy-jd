<template>
  <div class="login-page">
    <div class="login-nav-bar">
      <div class="left" @click="goBack"></div>
      <div class="center">京东登录注册</div>
    </div>
    <div class="input-container">
      <p class="phone-number">
        <label for="tele">
          <span>+86</span>
          <i></i>
        </label>
        <input type="text" placeholder="请输入手机号" />
      </p>
      <p class="security-code">
        <input type="text" placeholder="请输入收到的验证码" />
        <span>获取验证码</span>
      </p>
    </div>
    <div class="inp_btn">
      <a href="javascript:;" class="login">登录</a>
      <a href="javascript:;" class="register">注册</a>
    </div>
    <div class="quick_btn">
      <a href="javascript:;">账号密码登录</a>
      <a href="javascript:;">手机快速注册</a>
    </div>
    <div class="quick-login">
      <h4 class="other_login">其他登录方式</h4>
      <div class="quick_type">
        <a href="javascript:;" class="qq">QQ</a>
        <a href="javascript:;" class="wechat">微信</a>
        <a href="javascript:;" class="anple">苹果</a>
      </div>
    </div>
    <div class="policy_tip">
      <span>未注册的手机号验证后将自动创建京东账号, 登录即代表您已同意</span>

      <a href="javascript:;">京东隐私政策</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

.login-page {
  height: 100%;
  padding: 0 25px 25px;
  background-color: #fff;
}
.login-nav-bar {
  position: relative;
  height: 44px;
  line-height: 44px;
}

.login-nav-bar .left {
  position: absolute;
  left: 0;
  top: 10px;
  width: 22px;
  height: 22px;
  background: url(../../assets/images/jd-sprites.png) no-repeat -20px 0;
  background-size: 200px auto;
}

.center {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #000;
  font-size: 17px;
}

.input-container p {
  position: relative;
  border-bottom: 1px solid #f5f5f5;
  height: 50px;
  line-height: 50px;
  width: 100%;
}

.input-container input {
  border: none;
}

input::-webkit-input-placeholder {
  font-size: 16px;
  color: #a8a8a8;
}

.input-container i {
  position: absolute;
  top: 20px;
  right: 12px;
  height: 6px;
  width: 14px;
  background: url(../../assets/images/down1.png) no-repeat center;
  background-size: 14px 6px;
}

.input-container label {
  position: absolute;
  left: 0;
  top: 0;
  width: 72px;
  height: 50px;
  color: #000;
  font-size: 16px;
  padding-left: 8px;
}

.phone-number {
  padding-left: 80px;
}

.security-code > span {
  position: absolute;
  right: 0;
  top: 10px;
  width: 110px;
  height: 23px;
  line-height: 23px;
  text-align: center;
  border-left: 1px solid #ccc;
  color: #848689;
}

.inp_btn a {
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  text-align: center;
  font-size: 16px;
}

.login {
  color: #fff;
  background: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
}

.register {
  border: 1px solid red;
  color: #f10000;
  margin-top: 10px;
}

.quick_btn {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quick_btn a {
  color: rgba(0, 0, 0, 0.4);
}

.quick-login {
  text-align: center;
  margin-top: 88px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.quick-login h4 {
  width: 140px;
  height: 16px;
  color: rgba(0, 0, 0, 0.2);
  margin: -15px auto 0;
  background: #fff;
  text-align: center;
}
.quick_type {
  margin: 25px 0 12px;
}

.quick_type .qq,
.wechat,
.anple {
  display: inline-block;
  width: 48px;
  height: 69px;
  padding-top: 63px;
  margin: 0 15px;
  color: rgba(0, 0, 0, 0.4);
}

.quick_type .qq {
  background: url(../../assets/images/qq.png) no-repeat center;
  background-size: 48px auto;
}

.quick_type .wechat {
  background: url(../../assets/images/wechat.png) no-repeat center;
  background-size: 48px auto;
}

.quick_type .anple {
  background: url(../../assets/images/anple.png) no-repeat center;
  background-size: 48px auto;
}

.policy_tip {
  color: rgba(0, 0, 0, 0.3);
  font-size: 13px;
  text-align: center;
}
.policy_tip a {
  color: #4a90e2;
}
</style>>
