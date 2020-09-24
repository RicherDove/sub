<template>
  <div
    :class="size+'-cheek'"
    :style="'background:'+innerDisabled?'rgb(160 211 255)':innerDisabled?'':'rgba(25, 31, 37, 0.12)'"
    @click="onChange"
  >
    <span :class="size+'-round'" :style="innerValue ? 'right:0.02em' : 'left:0.02em'"></span>
    <span v-if="activeText" :class="size+'-text-on'">{{activeText}}</span>
    <span v-if="unActiveText" :class="size+'-text-off'">{{unActiveText}}</span>
  </div>
</template>

<script>
export default {
  name: "Lswitch",
  data() {
    return {};
  },
  props: {
    autofocus: {
      type: Boolean,
      default: false,
    },
    option: {
      type: Boolean,
      default: false,
    },
    innerValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "normal",
    },
    activeText: undefined,
    unActiveText: undefined,
  },
  components: {},
  methods: {
    onChange() {
      this.$emit("onChange", this.innerValue);
    },
  },
  computed: {
    // move() {
    //   return this.innerValue ? "right:0.02em" : "left:0.02em";
    // },
  },
};
</script>
<style scoped>
@import "~css/components/Lswitch/Lswitch.css";
</style>