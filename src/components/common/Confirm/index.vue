<template>
  <div class="confirm" v-if="isShow">
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
// @import "~css/components/confirm.css";
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style/index.scss";

.confirm {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  .content {
    max-width: 520px;
    width: 78%;
    max-height: 220px;
    height: 21%;
    background: #ffffff;
    padding: 0.5em;

    .header {
      display: flex;

      justify-content: space-between;
      text-align: center;

      &::after {
        content: "";
        background-image: url("../../../assets/img/fork.png");
        width: 1em;
        height: 1em;

        &:hover {
          background-image: url("../../../assets/img/fork_focus.png");
          width: 1em;
          height: 1em;
        }
      }
    }

    .contents {
      text-indent: 2;
    }

    .footer {
      display: flex;
      justify-content: space-evenly;

      .cancle {
      }

      .confirm {
      }
    }
  }
}
</style>