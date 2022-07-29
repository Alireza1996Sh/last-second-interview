<template>
  <b-container fluid>
    <div class="px-3">
      <SectionTitle
        title="محصولات مشابه"
        :action="{ title: 'نمایش همه', to: '#' }"
      />
      <div class="w-100 d-flex flex-nowrap overflow-auto py-3 px-1">
        <div
          v-for="(item, index) in items"
          :key="item.id"
          :class="[index && 'mr-2']"
          style="min-width: 220px"
        >
          <ProductCard :item="item" />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import SectionTitle from "@/components/app/SectionTitle";
import ProductCard from "@/components/app/ProductCard";
export default {
  name: "ProductRelations",
  components: { ProductCard, SectionTitle },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
