<template>
  <div class="index">
    <ul class="tabs">
      <li class="tab" v-for="(item,index) in tabList" :key="index">{{item}}</li>
    </ul>
    <div class="boxs">
      <div class="box">
        小按钮
        <Lswitch v-model:innerValue="innerValue" @onChange="changState"></Lswitch>
      </div>
    </div>
  </div>
</template>

<script>
import Lswitch from "components/common/Lswitch/index.vue";
export default {
  name: "Index",
  data() {
    return {
      tabList: ["switch", "rotation", "button", "button", "button"],
      innerValue: true,
    };
  },
  components: {
    Lswitch,
  },
  methods: {
    changState(data) {
      console.log(data);
    },
  },
};
</script>
<style scoped>
@import "~css/index/index.css";
</style>