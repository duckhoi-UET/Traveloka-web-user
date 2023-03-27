<template>
  <div>
    <swiper
      :options="swiperOptionTop"
      class="gallery-top h-[400px] rounded-t-sm"
      ref="swiperTop"
    >
      <swiper-slide v-for="(item, index) in images" :key="index"
        ><img :src="item" class="w-full h-full object-cover" alt=""
      /></swiper-slide>

      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper
      :options="swiperOptionThumbs"
      class="gallery-thumbs h-[150px] rounded-b-sm"
      ref="swiperThumbs"
    >
      <swiper-slide v-for="(item, index) in images" :key="index"
        ><img :src="item" class="w-full h-full object-cover" alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      swiperOptionTop: {
        notNextTick: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: {
            el: ".gallery-thumbs",
            slidesPerView: "auto",
            slideToClickedSlide: true,
          },
          spaceBetween: 10,
          centeredSlides: true,
          slideToClickedSlide: true,
          controller: {
            by: ".gallery-top",
            // control: ".gallery-top",
            // inverse: true,
          },
        },
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        slideToClickedSlide: true,
        controller: {
          by: ".gallery-top",
          //   control: ".gallery-top",
          //   inverse: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: #000;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.gallery-top {
  //   height: 80% !important;
  width: 100%;
}
.gallery-thumbs {
  //   height: 20% !important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>

