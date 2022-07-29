<template>
  <div>
    <!-- in real project header will be loaded in layout layer -->
    <!-- I loaded it here to not waste time unduly -->
    <HeaderMobile />
    <b-container fluid class="bg-dark-3">
      <b-breadcrumb
        class="bg-transparent text-right mb-0"
        dir="rtl"
        :items="breadCrumbItems"
      />
    </b-container>
    <ProductRating :data="product.rating" />
  </div>
</template>

<script>
import HeaderMobile from "@/components/app/header/Mobile";
import ProductRating from "@/components/product-detail/mobile/Rating";
export default {
  name: "ProductDetailMobile",
  components: { ProductRating, HeaderMobile },
  data() {
    return {
      product: {
        rating: {
          suggestionCount: 20,
          stars: 3,
        },
      },
    };
  },
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
