<template>
  <!-- use dynamic loading to prevent load extra js for not rendered component -->
  <!-- this could be implemented with <component :is="computedComponent" /> -->
  <ProductDetailMobile v-if="isMobile" />
  <ProductDetailDesktop v-else />
</template>

<script>
export default {
  name: "ProductDetailPage",
  components: {
    ProductDetailMobile: () =>
      import("@/components/product-detail/mobile/Index"),
    ProductDetailDesktop: () =>
      import("@/components/product-detail/desktop/Index"),
  },
  computed: {
    isMobile() {
      return this.$mq === "sm";
    },
  },
};
</script>

<style scoped></style>
