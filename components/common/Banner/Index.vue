<template>
  <div class="banner swiper max-h-[600px] w-full relative">
    <swiper :options="swiperOptions" class="max-h-[600px] w-full">
      <swiper-slide>
        <img
          src="/images/banner/14021258.jpg"
          class="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/banner/baidinh.jpg"
          class="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/banner/banner_3.jpg"
          class="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/banner/banner_1.png"
          class="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
          alt=""
        />
      </swiper-slide>
    </swiper>
    <div
      class="absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center"
    >
      <h1
        class="uppercase text-white font-bold shadow-md text-2xl md:text-3xl lg:text-5xl"
      >
        <span>Luôn</span>
        <span>là</span>
        <span>sự</span>
        <span>lựa</span>
        <span>chọn</span>
        <span>tuyệt</span>
        <span>vời</span>
        <span>nhất!</span>
      </h1>
      <h2 class="text-white shadow-md lg:text-2xl">
        <span>Hãy</span>
        <span>để</span>
        <span>chúng</span>
        <span>tôi</span>
        <span>giúp</span>
        <span>bạn</span>
        <span>có</span>
        <span>những</span>
        <span>chuyến</span>
        <span>đi</span>
        <span>ý</span>
        <span>nghĩa</span>
      </h2>
    </div>
  </div>
</template>
<script>
export default {
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

h1 {
  color: #fff;
  font-family: "tahoma";
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
    0 0 3px rgba(255, 255, 255, 0.3);
}
h2 {
  color: #fff;
  font-family: "tahoma";
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
    0 0 3px rgba(255, 255, 255, 0.3);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}
span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}
span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}
span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}
span:nth-child(11) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}
span:nth-child(12) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>

