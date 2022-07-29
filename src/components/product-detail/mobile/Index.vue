<template>
  <div class="pb-3">
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
    <hr class="mt-0" />
    <ProductDescription class="mt-3" :description="product.description" />
    <hr class="mx-4" />
    <ProductSpecifications :items="product.specifications" />
    <hr class="mx-4" />
    <ProductReview
      :reviews="product.reviews"
      :total-reviews="product.totalReviews"
    />
    <hr class="mx-4" />
    <ProductQA :qas="product.qas" :total-qas="product.totalQas" />
    <hr class="mx-4" />
    <ProductRelations :items="product.relations" />
    <b-container fluid class="mt-3">
      <div class="px-3">
        <b-button variant="primary" block size="lg">
          فروشندگان این کالا
        </b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import HeaderMobile from "@/components/app/header/Mobile";
import ProductRating from "@/components/product-detail/mobile/Rating";
import ProductSection from "@/components/product-detail/mobile/Product";
import lazyLoadComponent from "@/utils/lazy-load-component";
import productSchema from "@/components/product-detail/product.schema";

export default {
  name: "ProductDetailMobile",
  components: {
    ProductRelations: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/product-detail/mobile/Relations"),
    }),
    ProductQA: lazyLoadComponent({
      componentFactory: () => import("@/components/product-detail/mobile/QA"),
    }),
    ProductReview: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/product-detail/mobile/Review"),
    }),
    ProductSpecifications: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/product-detail/mobile/Specifications"),
    }),
    ProductDescription: lazyLoadComponent({
      componentFactory: () =>
        import("@/components/product-detail/mobile/Description"),
    }),
    ProductSection,
    ProductRating,
    HeaderMobile,
  },
  data() {
    return {
      product: productSchema,
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
