<template>
  <div>
    <b-button variant="light-blue" class="text-blue font-weight-bold ml-2">
      {{ likes }}
      <b-icon-hand-thumbs-up />
    </b-button>
    <b-button variant="secondary" class="font-weight-bold">
      {{ dislikes }}
      <b-icon-hand-thumbs-down />
    </b-button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Popularity",
  props: {
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
  },
};
</script>

<style scoped></style>
