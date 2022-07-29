<template>
  <b-container fluid>
    <div class="px-3">
      <SectionTitle title="توضیحات" :action="{ title: 'بیشتر >', to: '#' }" />
      <div class="mt-3 text-secondary">{{ description }}</div>
    </div>
  </b-container>
</template>

<script>
import SectionTitle from "@/components/app/SectionTitle";
export default {
  name: "ProductDescription",
  components: { SectionTitle },
  props: {
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
