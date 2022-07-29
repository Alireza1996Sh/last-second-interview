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
    <b-container fluid>
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
export default {
  name: "ProductDetailMobile",
  components: {
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
        reviews: [
          {
            id: "id1",
            title: "حمیدرضا افشار",
            subtitle: "۲۰ خرداد ۱۳۹۹",
            description:
              "شاید در قدم اول، اینکه با روغن بری تو تعویض روغنی و صاحب مغازه چپ چپ بهت نگاه کنه، جالب نباشه، اما ارزش داره چون از اصالت روغنی که میخری مطمئن هستی",
            likes: 56,
            dislikes: 0,
            isSuggested: true,
          },
          {
            id: "id2",
            title: "پیمان آقاخانی",
            subtitle: "۲۴ خرداد ۱۳۹۹",
            description:
              "به نظر روغن مناسبی هست مخصوصا برای خودروهای وارداتی من برای پاجیرو ۳۸۰۰ و سوناتا ۲۰۰۸ استفاده کردم",
            likes: 20,
            dislikes: 5,
            isSuggested: false,
          },
        ],
        totalReviews: 20,
        qas: [
          {
            id: "id1",
            title: "بهنام بهرامی",
            subtitle: "۲۰ خرداد ۱۳۹۹",
            description: "سلام برای ۲۰۶ تیپ ۲ مدل ۹۰ مناسب هست؟",
          },
        ],
        totalQas: 20,
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
