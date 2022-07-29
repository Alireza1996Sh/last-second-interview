<template>
  <div>
    <!-- in real project header will be loaded in layout layer -->
    <!-- I loaded it here to not waste time unduly -->
    <HeaderMobile />
  </div>
</template>

<script>
import HeaderMobile from "@/components/app/header/Mobile";
export default {
  name: "ProductDetailMobile",
  components: { HeaderMobile },
};
</script>

<style scoped></style>
