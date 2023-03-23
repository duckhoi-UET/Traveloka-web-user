<template>
  <div class="mt-12">
    <div class="text-center mb-9">
      <h3 class="title-content">CÁC PHÒNG NỔI BẬT</h3>
      <span class="title-sub-content">
        Các phòng được đặt nhiều nhất trong tháng này
      </span>
    </div>
    <Slider>
      <template v-slot:slider>
        <swiper-slide v-for="(item, index) in tour" :key="index">
          <Tour :data="item"></Tour>
        </swiper-slide>
      </template>
    </Slider>
  </div>
</template>

<script>
import Slider from "@/components/common/Slider";
import Tour from "./components/Item.vue";
export default {
  components: {
    Slider,
    Tour,
  },
  data() {
    return {
      tour: [
        {
          title: "Bungalow Double Room",
          bed: "1 Giường Cỡ King",
          person: "2 khách",
          star: 5,
          price: "499.950",
          oldPrice: "909.000",
          image: "/images/Tour/1.png",
          views: "2.467",
        },
        {
          title: "Bungalow Triple Room",
          bed: "1 Giường Đôi Và 1 Giường Đơn",
          person: "3 khách",
          star: 5,
          price: "668.250",
          oldPrice: "1.215.000",
          image: "/images/Tour/2-2.png",
          views: "4.467",
        },
        {
          title: "Bungalow Family Room",
          bed: "2 Giường Cỡ King",
          person: "4 khách",
          star: 5,
          price: "891.000",
          oldPrice: "1.620.000",
          image: "/images/Tour/3.png",
          views: "1.427",
        },
        {
          title: "Cozy Superior Room",
          bed: "1 Giường Đôi",
          person: "2 khách",
          star: 3,
          price: "1.678.132",
          oldPrice: "2.237.509",
          image: "/images/Tour/4.png",
          views: "3.407",
        },
        {
          title: "Spacious Deluxe Room",
          bed: "1 Giường Đôi",
          person: "2 khách",
          star: 1,
          price: "1.797.999",
          oldPrice: "2.397.332",
          image: "/images/Tour/5.png",
          views: "5.467",
        },
        {
          title: "Premier Executive Room",
          bed: "1 Giường Đôi",
          person: "2 khách",
          star: 3,
          price: "2.554.654",
          oldPrice: "3.406.205",
          image: "/images/Tour/6.png",
          views: "6.467",
        },
      ],
    };
  },
};
</script>

<style></style>
