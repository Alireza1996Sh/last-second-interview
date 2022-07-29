<template>
  <b-container fluid>
    <div class="px-3">
      <SectionTitle
        title="نقد و بررسی"
        :subtitle="`${totalReviews} نقد و بررسی`"
        :action="{ title: 'نمایش همه', to: '#' }"
      />
      <div class="mt-3">
        <CustomCard
          v-for="review in reviews"
          :key="review.id"
          class="mt-2"
          :title="review.title"
          :subtitle="review.subtitle"
          :description="review.description"
        >
          <template #avatar>
            <b-icon-person font-scale="1.75" variant="secondary" />
          </template>
          <template #actions>
            <div class="d-flex justify-content-between flex-wrap">
              <Popularity :likes="review.likes" :dislikes="review.dislikes" />
              <b-button
                variant="light-green"
                class="text-white"
                v-if="review.isSuggested"
              >
                پیشنهاد شده برای خرید
              </b-button>
            </div>
          </template>
        </CustomCard>
      </div>
    </div>
  </b-container>
</template>

<script>
import SectionTitle from "@/components/app/SectionTitle";
import CustomCard from "@/components/app/CustomCard";
import Popularity from "@/components/app/Popularity";
export default {
  name: "ProductReview",
  components: { Popularity, CustomCard, SectionTitle },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
    totalReviews: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
