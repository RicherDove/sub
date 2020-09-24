<template>
  <div :click="$emit('enlarge')">{{title}}</div>
</template>
<script>
export default {
  name: "propsTest",
  data() {},
  props: {
    title: String,
    enlarge: Number,
  },
  methods: {},
  computed: {},
};
</script>
<style scoped>
</style>