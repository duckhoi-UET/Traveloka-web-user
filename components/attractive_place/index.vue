<template>
  <div class="mt-12 bg-white p-4 rounded-sm shadow-md pt-10">
    <div class="text-center mb-9">
      <h3 class="title-content">APPEALING DESTINATION</h3>
      <span class="title-sub-content">
        Instantly discover tours, activities and attractions for your travel
        itinerary
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
          image: "/images/place/trang-an.jpg",
          title: "Tràng An",
        },
        {
          image: "/images/place/vl.jpg",
          title: "Đầm Vân Long",
        },
        {
          image: "/images/place/Thung-Nham.jpg",
          title: "Thung Nham",
        },
        {
          image: "/images/place/tam-coc.jpg",
          title: "Tam Cốc",
        },
        {
          image: "/images/place/hoa-lu.jpg",
          title: "Hoa Lư",
        },
        {
          image: "/images/place/cuc-phuong.jpg",
          title: "Cúc Phương",
        },
        {
          image: "/images/place/chua-bich-dong.jpg",
          title: "Chùa Bích Động",
        },
        {
          image: "/images/place/bai-dinh.jpg",
          title: "Bái Đính",
        },
      ],
    };
  },
};
</script>

<style></style>

