<template>
  <b-card class="w-100 h-100 product-card p-2">
    <div class="d-flex flex-column justify-content-between h-100">
      <div>
        <div class="text-center"><b-img :src="item.image" class="w-50" /></div>
        <div class="font-weight-bold text-secondary mt-3 small">
          {{ item.title }}
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between align-items-center mt-2">
          <div class="d-flex align-items-center">
            <b-icon-cloud font-scale="1.5" />
            <SkewedButton size="sm" class="mr-1 border" variant="light">
              {{ item.year }}
            </SkewedButton>
          </div>
          <!-- placeholder for flags! (really flags?!) -->
          <!-- <div>2</div> -->
        </div>
        <hr />
        <div class="d-flex justify-content-between align-items-center num-fa">
          <div v-if="+offPercent">
            <SkewedButton variant="red" size="sm">
              {{ offPercent }} ٪
            </SkewedButton>
            <span class="small mr-2 text-secondary line-through">
              {{ item.basePrice.toLocaleString() }}
            </span>
          </div>
          <div>
            {{ item.salePrice.toLocaleString() }}
            <span class="small text-secondary">تومان</span>
          </div>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
import SkewedButton from "@/components/app/SkewedButton";
export default {
  name: "ProductCard",
  components: { SkewedButton },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    offPercent() {
      return (
        ((this.item.basePrice - this.item.salePrice) / this.item.basePrice) *
        100
      ).toFixed(0);
    },
  },
};
</script>

<style scoped lang="scss">
.product-card {
  & .card-body {
    padding: 0;
  }
}
</style>
