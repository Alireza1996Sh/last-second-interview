<template>
  <div>
    <b-container fluid class="bg-dark py-3">
      <div class="d-flex align-items-center">
        <b-button variant="transparent">
          <b-icon-list font-scale="2" variant="white" />
        </b-button>
        <div class="w-100 text-center">
          <b-img
            style="width: 130px"
            :src="require('@/assets/images/logo.png')"
          />
        </div>
        <b-button variant="transparent">
          <b-icon-question-circle font-scale="2" variant="white" />
        </b-button>
      </div>
    </b-container>
    <b-container fluid class="bg-dark-2 py-3">
      <div class="d-flex align-items-center">
        <b-button variant="transparent">
          <b-icon-person font-scale="2" variant="white" />
        </b-button>
        <div class="w-100">
          <b-input-group dir="ltr">
            <template #prepend>
              <b-input-group-text class="bg-dark-3 border-0">
                <b-icon-search variant="white" />
              </b-input-group-text>
            </template>
            <b-form-input
              dir="rtl"
              class="bg-dark-3 text-white border-0"
              placeholder="جستجو کنید"
            />
          </b-input-group>
        </div>
        <b-button variant="transparent">
          <b-icon-bag font-scale="2" variant="white" />
        </b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HeaderMobile",
};
</script>

<style scoped></style>
