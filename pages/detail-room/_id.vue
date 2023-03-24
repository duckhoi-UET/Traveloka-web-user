<template>
  <div class="bg-white shadow-md rounded-sm p-4">
    <ul>
      <li v-for="(item, index) in 40" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  auth: false,
};
</script>

<style></style>

