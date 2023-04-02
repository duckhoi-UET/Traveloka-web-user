<template>
  <div>
    <img
      class="w-full h-full object-cover rounded-[2px]"
      :src="data.image"
      alt=""
    />
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

<style></style>

