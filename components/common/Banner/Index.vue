<template>
  <div class="banner swiper max-h-[600px] w-full">
    <swiper :options="swiperOptions" class="max-h-[600px] w-full">
      <swiper-slide v-for="(item, index) in dataSwiper" :key="index">
        <div class="relative">
          <img
            :src="item.image"
            class="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
            alt=""
          />
          <Slogan v-if="item.slogan.length" :slogan="item.slogan" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import Slogan from "./Slogan.vue";
export default {
  components: {
    Slogan,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,

        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
      dataSwiper: [
        {
          image: "/images/banner/ninh-binh.jpg",
          slogan: [],
        },
        {
          image: "/images/banner/1.jpg",
          slogan: [
            "Luôn ",
            "là ",
            "sự ",
            "lựa ",
            "chọn ",
            "tuyệt ",
            "vời ",
            "nhất!",
          ],
        },
        {
          image: "/images/banner/2.jpg",
          slogan: [
            "Điểm ",
            "đến ",
            "thú ",
            "vị ",
            ", vui ",
            "chơi ",
            "thỏa ",
            "thích!",
          ],
        },
        {
          image: "/images/banner/ninhbinh_homestay-ninh-binh-co-be-boi-3.jpg",
          slogan: [
            "Cuộc ",
            "hành ",
            "trình ",
            "đang ",
            "chờ ",
            "đợi ",
            "chúng ",
            "ta!",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  .swiper-container {
    .swiper-wrapper {
      @apply w-full max-h-[600px] #{!important};
    }
  }
}
</style>
