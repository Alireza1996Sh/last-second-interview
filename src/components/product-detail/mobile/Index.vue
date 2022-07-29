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
    <hr class="mt-0" />
    <ProductDescription class="mt-3" :description="product.description" />
    <hr />
    <ProductSpecifications :items="product.specifications" />
  </div>
</template>

<script>
import HeaderMobile from "@/components/app/header/Mobile";
import ProductRating from "@/components/product-detail/mobile/Rating";
import ProductSection from "@/components/product-detail/mobile/Product";
import ProductDescription from "@/components/product-detail/mobile/Description";
import ProductSpecifications from "@/components/product-detail/mobile/Specifications";
export default {
  name: "ProductDetailMobile",
  components: {
    ProductSpecifications,
    ProductDescription,
    ProductSection,
    ProductRating,
    HeaderMobile,
  },
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
        description:
          "شرکت کاسترول به عنوان یکی از تولید کنندگان پیشرو در صنعت تولید روغن‌های روان کننده و گریس در سطح جهانی محسوب میشود",
        specifications: ["گروانی: 10W-40", "حجم: ۴ لیتر", "روش ساخت: ۴ لیتر"],
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
