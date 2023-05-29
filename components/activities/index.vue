<template>
  <div class="mt-12 bg-white p-4 rounded-sm shadow-md pt-10">
    <div class="text-center mb-9">
      <h3 class="title-content">HIGHLIGHTS ACTIVITIES</h3>
      <span class="title-sub-content">
        Join now the outstanding and attractive activities
      </span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Item v-for="(item, index) in places" :key="index" :data="item"></Item>
    </div>
  </div>
</template>

<script>
import Item from "./components/Item.vue";
export default {
  components: {
    Item,
  },
  data() {
    return {
      places: [
        {
          image: "/images/activities/1.jpg",
          title: "Tràng An",
        },
        {
          image: "/images/activities/2.jpg",
          title: "Đầm Vân Long",
        },
        {
          image: "/images/activities/3.jpg",
          title: "Thung Nham",
        },
        {
          image: "/images/activities/4.jpg",
          title: "Tam Cốc",
        },
        {
          image: "/images/activities/5.jpg",
          title: "Hoa Lư",
        },
        {
          image: "/images/activities/6.jpg",
          title: "Cúc Phương",
        },
        {
          image: "/images/activities/7.jpg",
          title: "Chùa Bích Động",
        },
        {
          image: "/images/activities/8.jpg",
          title: "Bái Đính",
        },
        {
          image: "/images/activities/9.jpg",
          title: "Bái Đính",
        },
      ],
    };
  },
};
</script>

<style></style>

