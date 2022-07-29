<template>
  <div>
    <!-- in real project header will be loaded in layout layer -->
    <!-- I loaded it here to not waste time unduly -->
    <HeaderMobile />
    <b-container fluid class="bg-dark-3">
      <b-breadcrumb
        class="bg-transparent text-right"
        dir="rtl"
        :items="breadCrumbItems"
      />
    </b-container>
  </div>
</template>

<script>
import HeaderMobile from "@/components/app/header/Mobile";
export default {
  name: "ProductDetailMobile",
  components: { HeaderMobile },
  computed: {
    breadCrumbItems() {
      return [
        {
          text: "خانه",
          to: { name: "home" },
        },
        ...this.$route.matched.map((route) => ({
          to: route.path,
          text: route.meta.name,
        })),
      ];
    },
  },
};
</script>

<style scoped></style>
