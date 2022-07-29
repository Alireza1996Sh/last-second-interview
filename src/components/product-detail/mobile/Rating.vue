<template>
  <b-container fluid class="bg-green text-white rtl">
    <div
      class="d-flex flex-wrap align-items-center justify-content-between p-3"
    >
      <div>پیشنهاد شده توسط {{ data.suggestionCount }} نفر</div>
      <div class="d-flex align-items-center">
        <div class="d-flex ml-2">
          <b-icon-star
            v-for="star in 5 - data.stars"
            :key="`star-${star}`"
            class="ml-1"
          />
          <b-icon-star-fill
            v-for="star in data.stars"
            :key="`fill-star-${star}`"
            class="ml-1"
          />
        </div>
        <SkewedButton variant="light-green" class="px-4 py-1 text-white">
          {{ data.stars }}
        </SkewedButton>
      </div>
    </div>
  </b-container>
</template>

<script>
import SkewedButton from "@/components/app/SkewedButton";
export default {
  name: "ProductRating",
  components: { SkewedButton },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
