<template>
  <b-card>
    <div class="d-flex align-items-center">
      <div
        class="custom-card__avatar bg-light rounded-circle border d-flex justify-content-center align-items-center"
      >
        <slot name="avatar" />
      </div>
      <div class="mr-3">
        <div class="font-weight-bold text-dark-3">{{ title }}</div>
        <div class="text-secondary small">{{ subtitle }}</div>
      </div>
    </div>
    <div class="mt-3 text-secondary">{{ description }}</div>
    <div class="mt-3">
      <slot name="actions" />
    </div>
  </b-card>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.custom-card {
  &__avatar {
    width: 3.5rem;
    height: 3.5rem;
  }
}
</style>
