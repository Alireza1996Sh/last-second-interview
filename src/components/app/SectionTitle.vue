<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="font-weight-bold">
      {{ title }}
      <span v-if="subtitle" class="text-secondary small">({{ subtitle }})</span>
    </div>
    <div v-if="action">
      <b-button
        variant="transparent"
        class="btn-outline-secondary px-4"
        :to="action.to"
      >
        {{ action.title }}
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: () => "",
    },
    action: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style scoped></style>
