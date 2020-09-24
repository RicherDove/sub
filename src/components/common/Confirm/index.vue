<template>
  <div class="confirm" v-if="isShow">
    <div class="background"></div>
    <div class="content">
      <div class="header">{{ title }}</div>
      <div class="contents">{{ contents }}</div>
      <div class="footer">
        <div v-if="isConfirm" class="cancle" @click="confirm">确认</div>
        <div v-if="isCancle" class="confirm" @click="cancle">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Confirm",
  data() {
    return {};
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    isConfirm: {
      type: Boolean,
      default: false,
    },
    isCancle: {
      type: Boolean,
      default: true,
    },
    contents: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  components: {},
  methods: {
    confirm() {
      this.$emit("confirm", true);
    },
    cancle() {
      this.$emit("cancle", false);
    },
  },
  computed: {},
};
</script>
<style scoped>
@import "~css/components/confirm.css";
</style>