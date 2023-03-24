<template>
  <div class="places h-[200px] relative">
    <img
      :src="data.image"
      class="w-full h-full object-cover rounded-[2px]"
      :alt="data.title"
    />
    <div
      class="title absolute top-1/2 -translate-y-1/2 w-full text-center hidden"
    >
      <h4 class="text-white text-2xl font-semibold">{{ data.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.places {
  &:hover {
    img {
      @apply opacity-80;
    }
    .title {
      @apply block;
      h4 {
        @apply font-bold shadow-lg;
      }
    }
  }
}
</style>

