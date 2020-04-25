<template>
  <div>
    <div class="srarchfunction-next">
      <button class="bbtned" @click="backop">
        <i class="iconfont icon-jiantou2"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFunction",
  methods: {
    backop() {
      window.history.go(-1);
    }
  }
};
</script>

<style scoped>
.bbtned {
  border: none;
  background-color: transparent;
  outline: none;
}

.icon-jiantou2 {
    font-size: 28px;
    color: #252525;
}
</style>