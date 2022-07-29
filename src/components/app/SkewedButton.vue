<template>
  <b-button v-bind="$attrs" class="btn-skew">
    <div><slot></slot></div>
  </b-button>
</template>

<script>
export default {
  name: "SkewedButton",
};
</script>

<style scoped lang="scss">
.btn-skew {
  transform: skew(-15deg);
  & > div {
    transform: skew(15deg);
  }
}
</style>
