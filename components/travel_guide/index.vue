<template>
  <div class="mt-12">
    <div class="text-center mb-9">
      <h3 class="title-content">TRAVEL GUIDEBOOK</h3>
      <span class="title-sub-content">
        Interesting travel experiences are shared here
      </span>
    </div>
    <Slider :autoPlay="false">
      <template v-slot:slider>
        <swiper-slide v-for="(item, index) in travel" :key="index">
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
      travel: [
        {
          title:
            "Tạp chí Forbes: Ninh Bình là “Hạ Long cạn” ẩn chứa nhiều kỳ quan thiên nhiên đẹp",
          desc: "Hè năm 2023 đang tới, Di sản Văn hóa và thiên nhiên thế giới Tràng An (Ninh Bình) phơi bày vẻ đẹp quyến rũ khác lạ so với mùa xuân vừa qua.",
          image: "/images/travel/img-3277-7167.jpg",
          link: "https://nhandan.vn/tap-chi-forbes-ninh-binh-la-ha-long-can-an-chua-nhieu-ky-quan-thien-nhien-dep-post747585.html?fbclid=IwAR0gVqtP7aUDpBwXRiDuLWWt0q8MrMrOtPcsglX8fBB0uI44SmDxqO8tTIw",
        },
        {
          title:
            "Thưởng ngoạn các danh lam thắng cảnh tuyệt sắc trong tour miền Bắc 5N4Đ",
          desc: "Chỉ với 8.790.000 đồng, du khách sẽ được tận hưởng hành trình thưởng ngoạn qua các danh lam thắng cảnh nổi tiếng và xinh đẹp của miền Bắc Việt Nam. Cùng iVIVU khám phá tour miền Bắc 5N4Đ trong bài…",
          image: "/images/travel/Khu-du-lịch-Tràng-An11-370x215.jpg",
          link: "https://www.ivivu.com/blog/2023/03/thuong-ngoan-cac-danh-lam-thang-canh-tuyet-sac-trong-tour-mien-bac-5n4d/",
        },
        {
          title:
            "Chiêm ngưỡng những danh lam thắng cảnh đặc sắc trong tour miền Bắc 5N4Đ",
          desc: "Hành trình liên tuyến với tour miền Bắc 5N4Đ khởi hành từ Sài Gòn đưa du khách qua những danh lam thắng cảnh đặc sắc, tuyệt đẹp của miền Bắc và Tây Bắc Việt Nam.",
          image: "/images/travel/vịnh-hạ-long-ivivu-370x215.jpg",
          link: "https://www.ivivu.com/blog/2023/03/chiem-nguong-nhung-danh-lam-thang-canh-dac-sac-trong-tour-mien-bac-5n4d/",
        },
        {
          title:
            "Chùa Bái Đính – Quần thể chùa lập nhiều kỷ lục Việt Nam và châu Á",
          desc: "Quần thể chùa Bái Đính nằm ở phía Tây cố đô Hoa Lư, thuộc xã Gia Sinh, tỉnh Ninh Bình. Quần thể gồm một khu chùa cổ và một khu chùa mới đã trở thành địa điểm tham quan thu…",
          image: "/images/travel/chùa-Bái-Đính-ivivu-5-370x215.jpg",
          link: "https://www.ivivu.com/blog/2023/02/chua-bai-dinh-quan-the-chua-lap-nhieu-ky-luc-viet-nam-va-chau-a/",
        },
        {
          title:
            "Đền thờ Đinh Tiên Hoàng – vị vua nổi tiếng với “Tập trận cờ lau”",
          desc: "Đền thờ Đinh Tiên Hoàng là di tích quan trọng thuộc quần thể cố đô Hoa Lư, huyện Hoa Lư, tỉnh Ninh Bình. Đền thờ Đinh Bộ Lĩnh, là người có công dẹp loạn 12 sứ quân và là hoàng…",
          image: "/images/travel/den-tho-dinh-tien-hoang-ivivu-4-370x215.jpg",
          link: "https://www.ivivu.com/blog/2023/02/den-tho-dinh-tien-hoang-vi-vua-noi-tieng-voi-tap-tran-co-lau/",
        },
        {
          title:
            "Hang Múa – Điểm check-in nổi tiếng trong lòng di sản Tràng An",
          desc: "Hang Múa là điểm du lịch hấp dẫn nằm trong vùng lõi quần thể di sản thế giới Tràng An. Hang Múa thuộc núi đá vôi ở thôn Khê Đầu Hạ, xã Ninh Xuân, huyện Hoa Lư, tỉnh Ninh Bình.",
          image: "/images/travel/hang-mua-ivivu-14-370x215.jpg",
          link: "https://www.ivivu.com/blog/2023/02/hang-mua-diem-check-in-noi-tieng-trong-long-di-san-trang-an/",
        },
        {
          title: "Chùa Nhất Trụ – Ngôi chùa cổ gắn với kinh thành Hoa Lư xưa",
          desc: "Chùa Nhất Trụ là ngôi chùa cổ nằm trong quần thể khu di tích cố đô Hoa Lư, chùa lưu giữ nhiều cổ vật gắn với lịch sử kinh đô xưa, trong đó nổi bật nhất là cột kinh Phật…",
          image: "/images/travel/chua-nhat-tru-ivivu-1-370x215.jpg",
          link: "https://www.ivivu.com/blog/2023/01/chua-nhat-tru-ngoi-chua-co-gan-voi-kinh-thanh-hoa-lu-xua/",
        },
      ],
    };
  },
};
</script>

<style></style>

