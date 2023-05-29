<template>
  <div>
    <div class="flex flex-col md:flex-row gap-6">
      <div
        class="flex md:flex-col flex-row lg:flex-row gap-4 justify-center md:border-r md:border-r-gray-40 pr-3"
      >
        <img src="/images/icon/1.png" class="w-16 object-contain" alt="" />
        <div>
          <h3 class="text-xl text-blue-60 mb-0">Best price guarantee</h3>
          <span class="text-blue-60"
            >We guarantee that customers will receive the service at the best
            price available, along with the most attractive promotions</span
          >
        </div>
      </div>
      <div
        class="flex md:flex-col flex-row lg:flex-row gap-4 justify-center md:border-r md:border-r-gray-40 pr-3"
      >
        <img src="/images/icon/2.png" class="w-16 object-contain" alt="" />
        <div>
          <h3 class="text-xl text-blue-60 mb-0">
            Reliable service - True value
          </h3>
          <span class="text-blue-60"
            >By prioritizing customer interests, we provide fast and accurate
            support with reliable service and true value</span
          >
        </div>
      </div>
      <div class="flex md:flex-col flex-row lg:flex-row gap-4 justify-center">
        <img src="/images/icon/3.png" class="w-16 object-contain" alt="" />
        <div>
          <h3 class="text-xl text-blue-60 mb-0">Quality assurance</h3>
          <span class="text-blue-60"
            >We maintain close partnerships and conduct regular surveys to
            ensure the highest quality of service</span
          >
        </div>
      </div>
    </div>

    <AttractivePlace></AttractivePlace>
    <FavoriteTour></FavoriteTour>
    <!-- <div class="mt-6">
      <img
        class="rounded-md"
        src="/images/Ads/1679649185156-d1f0ae436ff244b389556b428a0d0a17.png"
        alt=""
      />
    </div> -->
    <Activities />
    <TravelGuide></TravelGuide>
    <Services />
  </div>
</template>

<script>
import Banner from "@/components/banner/Banner.vue";
import FavoriteTour from "@/components/favorite_room";
import AttractivePlace from "@/components/attractive_place";
import TravelGuide from "@/components/travel_guide";
import Activities from "@/components/activities";
import Services from "@/components/service";
export default {
  components: {
    Banner,
    FavoriteTour,
    AttractivePlace,
    TravelGuide,
    Activities,
    Services,
  },
  auth: false,

  head() {
    return {
      title: "TAMCOC - Điểm đến của mọi nhà",
    };
  },
};
</script>

