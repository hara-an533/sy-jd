<template>
<div class="gegeg">
  <personalTop></personalTop>
  <personfunctions></personfunctions>
</div>
</template>

<script>
import personalTop from "./personalChildrens/personalTop.vue"
import personfunctions from "./personalChildrens/personfunctions.vue"
export default {
    name:'profile',
    components:{
      "personalTop":personalTop,
      "personfunctions":personfunctions,
    }
}
</script>

<style scoped>
.gegeg {
  background: rgba(255,255,255,0);
}
</style>