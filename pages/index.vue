<template>
  <div>
    <div class="flex flex-col md:flex-row gap-6">
      <div
        class="flex md:flex-col flex-row lg:flex-row gap-4 justify-center md:border-r md:border-r-gray-40 pr-3"
      >
        <img src="/images/icon/1.png" class="w-16 object-contain" alt="" />
        <div>
          <h3 class="text-xl text-blue-60 mb-0">Đảm bảo giá tốt nhất</h3>
          <span class="text-blue-60"
            >Chúng tôi đảm bảo khách hàng sẽ đặt được dịch vụ với giá tốt nhất,
            những chương trình khuyến mãi hấp dẫn nhất</span
          >
        </div>
      </div>
      <div
        class="flex md:flex-col flex-row lg:flex-row gap-4 justify-center md:border-r md:border-r-gray-40 pr-3"
      >
        <img src="/images/icon/2.png" class="w-16 object-contain" alt="" />
        <div>
          <h3 class="text-xl text-blue-60 mb-0">
            Dịch vụ tin cậy - Giá trị đích thực
          </h3>
          <span class="text-blue-60"
            >Đặt lợi ích khách hàng lên trên hết, chúng tôi hỗ trợ khách hàng
            nhanh và chính xác nhất với dịch vụ tin cậy, giá trị đích
            thực.</span
          >
        </div>
      </div>
      <div class="flex md:flex-col flex-row lg:flex-row gap-4 justify-center">
        <img src="/images/icon/3.png" class="w-16 object-contain" alt="" />
        <div>
          <h3 class="text-xl text-blue-60 mb-0">Đảm bảo chất lượng</h3>
          <span class="text-blue-60"
            >Chúng tôi liên kết chặt chẽ với các đối tác, khảo sát định kỳ để
            đảm bảo chất lượng tốt nhất của dịch vụ</span
          >
        </div>
      </div>
    </div>

    <AttractivePlace></AttractivePlace>
    <FavoriteTour></FavoriteTour>
    <div class="mt-6">
      <img
        class="rounded-md"
        src="/images/Ads/1679649185156-d1f0ae436ff244b389556b428a0d0a17.png"
        alt=""
      />
    </div>
    <Activities />
    <TravelGuide></TravelGuide>
    <div class="mt-6 flex flex-col gap-6">
      <img
        class="rounded-md"
        src="/images/Ads/1679539843354-02e34ffdcfc41abd14696a991ae2c90e.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/banner/Banner.vue";
import FavoriteTour from "@/components/favorite_room";
import AttractivePlace from "@/components/attractive_place";
import TravelGuide from "@/components/travel_guide";
import Activities from "@/components/activities";
export default {
  components: {
    Banner,
    FavoriteTour,
    AttractivePlace,
    TravelGuide,
    Activities,
  },
  auth: false,

  head() {
    return {
      title: "TAMCOC - Điểm đến của mọi nhà",
    };
  },
};
</script>

