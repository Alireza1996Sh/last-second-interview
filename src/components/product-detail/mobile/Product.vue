<template>
  <div class="position-relative">
    <div class="notice-wrapper d-flex flex-column">
      <b-button variant="transparent" class="btn-outline-secondary">
        <b-icon-share />
      </b-button>
      <b-button variant="transparent" class="btn-outline-secondary mt-2">
        <b-icon-bell />
      </b-button>
    </div>
    <b-carousel v-model="selectedImage" class="w-50 mx-auto pt-5">
      <b-carousel-slide v-for="image in images" :key="image" :img-src="image" />
    </b-carousel>
    <b-container fluid class="mt-3">
      <div class="d-flex align-items-center justify-content-between px-3">
        <div class="d-flex">
          <div
            v-for="(image, index) in images"
            :key="`indicator-${image}`"
            class="image-indicator mr-1"
            :class="[index === selectedImage && 'image-indicator-active']"
            @click="selectedImage = index"
          />
        </div>
        <div>
          <b-button variant="secondary" class="font-weight-bold">
            {{ popularity.dislikes }}
            <b-icon-hand-thumbs-down />
          </b-button>
          <b-button
            variant="light-blue"
            class="text-blue font-weight-bold ml-2"
          >
            {{ popularity.likes }}
            <b-icon-hand-thumbs-up />
          </b-button>
        </div>
      </div>
      <div class="font-weight-bold mt-4 text-right px-3">
        <div class="product-title pr-2">
          <div>{{ title.persian }}</div>
          <div class="mt-2">{{ title.english }}</div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ProductSection",
  props: {
    images: { type: Array, required: true },
    title: { type: Object, required: true },
    popularity: { type: Object, required: true },
  },
  data() {
    return {
      selectedImage: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.notice-wrapper {
  position: absolute;
  top: 1rem;
  right: 2rem;
}
.image-indicator {
  width: 10px;
  height: 10px;
  background-color: black;
  transition: all 0.2s;
  border-radius: 50%;
  &-active {
    width: 20px;
    background-color: var(--orange);
    border-radius: 100px;
  }
}
.product-title {
  border-right: 2px solid var(--orange);
}
</style>
