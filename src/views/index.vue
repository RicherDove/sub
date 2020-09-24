<template>
  <div class="index">
    <ul class="tabs">
      <li class="tab" v-for="(item, index) in tabList" :key="index">
        {{ item }}
      </li>
    </ul>
    <div class="boxs">
      <div class="box">
        按钮
        <Lswitch :innerValue="innerValue" @onChange="changState"></Lswitch>
        <Lswitch :innerValue="innerValue" disabled="ture"></Lswitch>
      </div>
      <div class="box">
        <Confirm :isShow="isShow" />
        <button @click="confirm">弹出弹窗</button>
      </div>
    </div>
  </div>
</template>

<script>
import Lswitch from "components/common/Lswitch";
import Confirm from "components/common/Confirm";
export default {
  name: "Index",
  data() {
    return {
      tabList: ["switch", "loading", "button", "button", "button"],
      innerValue: true,
      isShow: false,
    };
  },
  components: {
    Lswitch,
    Confirm,
  },
  methods: {
    changState() {
      this.innerValue = !this.innerValue;
    },
    confirm() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style scoped>
@import "~css/index/index.css";
</style>