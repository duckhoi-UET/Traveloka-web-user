<template>
  <div class="flex justify-between h-screen">
    <div
      class="w-1/2 hidden md:block !bg-cover !bg-center"
      style="background: url('/images/traveloka.jpg')"
    />

    <div class="w-screen md:w-1/2 flex flex-col items-center mx-4 my-4">
      <div class="flex !justify-end">
        <nuxt-link to="/"
          >Quay lại trang chủ <i class="fas fa-arrow-right"></i
        ></nuxt-link>
      </div>
      <div class="flex-grow flex flex-col items-center justify-center">
        <!-- <img class="w-72" src="/images/logo-card.png" /> -->
        <div class="font-bold text-[#434343] text-4xl mb-0">
          TamCoc Valley Bungalow
        </div>
        <div class="mt-2 mb-12 text-gray-80 text-center">
          Luôn mang lại cho bạn những trải nghiệm đáng nhớ!
        </div>
        <nuxt class="w-full" />
      </div>
      <div
        class="text-gray-80 text-center flex justify-center items-center flex-wrap space-x-2"
      >
        <div>Copyright &copy; 2022</div>
        <div>Produced by NGUYEN DUC KHOI</div>
      </div>
    </div>
  </div>
</template>
