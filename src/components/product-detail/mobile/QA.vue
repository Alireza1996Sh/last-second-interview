<template>
  <b-container fluid>
    <div class="px-3">
      <SectionTitle
        title="پرسش و پاسخ"
        :subtitle="`${totalQas} پرسش و پاسخ`"
        :action="{ title: 'نمایش همه', to: '#' }"
      />
      <div class="mt-3">
        <CustomCard
          v-for="qa in qas"
          :key="qa.id"
          class="mt-2"
          :title="qa.title"
          :subtitle="qa.subtitle"
          :description="qa.description"
        >
          <template #avatar>
            <b-icon-question font-scale="1.75" variant="secondary" />
          </template>
          <template #actions>
            <div class="d-flex justify-content-between flex-wrap">
              <b-button variant="light" class="font-weight-bold border">
                پاسخ دهید
                <b-icon-reply />
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
export default {
  name: "ProductQA",
  components: { CustomCard, SectionTitle },
  props: {
    // questions and answers
    qas: {
      type: Array,
      required: true,
    },
    totalQas: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
