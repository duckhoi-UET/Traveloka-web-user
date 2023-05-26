<template>
  <div class="mt-12 bg-white p-4 rounded-sm shadow-md pt-10">
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
    <!-- <Slider class="mt-4">
      <template v-slot:slider>
        <swiper-slide v-for="(item, index) in tour" :key="index">
          <Tour :data="item"></Tour>
        </swiper-slide>
      </template>
    </Slider> -->
    <div
      class="flex justify-center items-center mt-6 text-blue-60 text-xl hover:cursor-pointer"
    >
      <span
        class="border border-blue-60 font-semibold px-10 py-2 rounded-lg hover:bg-blue-60 hover:text-white"
        @click="goToAllRooms"
      >
        Xem tất cả
      </span>
    </div>
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
          book: "1.233",
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
          book: "2.233",
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
          book: "933",
        },
        // {
        //   title: "Cozy Superior Room",
        //   bed: "1 Giường Đôi",
        //   person: "2 khách",
        //   star: 5,
        //   price: "1.678.132",
        //   oldPrice: "2.237.509",
        //   image: "/images/Tour/4.png",
        //   views: "3.407",
        //   book: "2.233",
        // },
        // {
        //   title: "Spacious Deluxe Room",
        //   bed: "1 Giường Đôi",
        //   person: "2 khách",
        //   star: 5,
        //   price: "1.797.999",
        //   oldPrice: "2.397.332",
        //   image: "/images/Tour/5.png",
        //   views: "5.467",
        //   book: "3.233",
        // },
        // {
        //   title: "Premier Executive Room",
        //   bed: "1 Giường Đôi",
        //   person: "2 khách",
        //   star: 5,
        //   price: "2.554.654",
        //   oldPrice: "3.406.205",
        //   image: "/images/Tour/6.png",
        //   views: "6.467",
        //   book: "4.434",
        // },
      ],
    };
  },
  methods: {
    goToAllRooms() {
      window.location.href =
        "https://www.traveloka.com/vi-vn/hotel/detail?spec=31-03-2023.01-04-2023.1.1.HOTEL.3000020011220.Tam%20Coc%20Valley%20Bungalow.2&contexts=%7B%22inventoryRateKey%22%3A%22povEwB3ZzsU2C6pd%2B6MdUwKh3BcjHsHvQbV0EUcyDRFM0tKsNUio4Rxug1zOzHJilcvZa8YdqqIySdppe7dolTIewZlxfjiOGz6oXLTucMvN0%2BgQ3yZPvZcoHwUFNN%2BZpcr%2F%2FNa8o9ElfN8zOYhzzZeg0X586laFpeUViPi9rxCUtTFR67qrm%2BPGUAGAdBe4mhLDdV0WLeT%2FFKfQ0QL8LH02Dvlx%2F8PjYogEE5yzx6g6yOKyKeIDf7jO3GM45O1o1hmSkmz3HiZNSbS8gXb3CDW9nmlhkqLKa4lLkAkZpAEc5mXj8TsTR8cYZF%2B6Rap2MzHRTA23ltYdqQG8gVuxGsx2hCJHuICygbvfdzPcu%2FP5s0RENCoFdb72LkX2indXHX%2FgjvJAXMef7VDSe%2FMsp%2FqbM%2FGZMK2%2BWe8Z4wDWCXFmpc61SwXTm6dr%2FyrjHf6b0j2yMcrctiwr88q0BckX3zr6YNymnTk58iYKaBwFeu9eKx0jA7izbI%2B%2Bg2rqPRLdx0HNTeOsgo2DRHG4NgNm99K86GilTqHjHMsEEFrul1Z8CS%2FWFNqllBTLDfKALgAatbkPrlGHYMvOxUcd8gSuE9olaRmAWbSrbAx4lGVLBha%2FzTvZV0gOgy8QojE2ombEtMM9W5F3LU%2B3MiLXiG%2FcrZ%2BcjOcshP%2FlnzDiU9VoWjc%3D%22%7D&prevSearchId=1761759189734030232&loginPromo=1";
    },
  },
};
</script>

<style></style>
