<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="font-weight-bold">{{ title }}</div>
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
    action: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style scoped></style>
