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
    <ProductSection
      :images="product.images"
      :title="product.title"
      :popularity="product.popularity"
    />
  </div>
</template>

<script>
import HeaderMobile from "@/components/app/header/Mobile";
import ProductRating from "@/components/product-detail/mobile/Rating";
import ProductSection from "@/components/product-detail/mobile/Product";
export default {
  name: "ProductDetailMobile",
  components: { ProductSection, ProductRating, HeaderMobile },
  data() {
    return {
      product: {
        rating: {
          suggestionCount: 20,
          stars: 3,
        },
        images: [
          require("@/assets/images/oil1.jpeg"),
          require("@/assets/images/oil2.jpeg"),
        ],
        title: {
          persian: "روغن موتور خودرو کاسترول مدل مجیک حجم ۴ لیتر",
          english: "Castrol Magnatec 4L 10W40 Car Engine Oil",
        },
        popularity: {
          likes: 52,
          dislikes: 12,
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
