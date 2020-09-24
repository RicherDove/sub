<template>
  <div :class="[size, { disabled: disabled }]" @click="onChange">
    <span class="round" :data-set="innerValue ? 'receive' : 'reject'"></span>
    <span v-if="activeText" class="text-on">{{ activeText }}</span>
    <span v-if="unActiveText" class="text-off">{{ unActiveText }}</span>
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
  computed: {},
};
</script>
<style scoped>
@import "~css/components/Lswitch.css";
</style>