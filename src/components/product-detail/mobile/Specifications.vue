<template>
  <b-container fluid>
    <div class="px-3">
      <SectionTitle
        title="مشخصات فنی"
        :action="{ title: 'بیشتر >', to: '#' }"
      />
      <ul class="mt-3 pr-4 text-secondary">
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </b-container>
</template>

<script>
import SectionTitle from "@/components/app/SectionTitle";
export default {
  name: "ProductSpecifications",
  components: { SectionTitle },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
