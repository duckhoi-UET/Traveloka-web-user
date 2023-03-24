<template>
  <div class="mt-12">
    <div class="text-center mb-9">
      <h3 class="title-content">CẨM NANG DU LỊCH</h3>
      <span class="title-sub-content">
        Những kinh nghiệm thú vị về du lịch được chia sẻ ở đây
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
            "10 suối nước nóng Nhật Bản được người bản địa yêu thích nhất bản địa yêu thích nhất",
          desc: "Nhật Bản là một trong số ít quốc gia có nguồn suối nước khoáng nóng thiên nhiên dồi dào nhất trên thế giới. Người ta thống kê được rằng trên khắp nước Nhật có đến gần 150 suối nước nóng lớn và 1400 nhánh suối nhỏ. ",
          image: "/images/travel/suoi-nuoc-nong-nhat-ban-6.png",
        },
        {
          title: "Ghé thăm Harajuku - Khu phố sôi động của Nhật Bản",
          desc: "Không chỉ là một bầu không khí náo nhiệt với đông đúc dòng người qua lại, Harajuku còn là một khu phố hội tụ những nét văn hóa, phong cách thời trang độc đáo và những địa điểm tâm linh mang đậm dấu ấn văn hóa Nhật Bản.",
          image: "/images/travel/harajuku-3.png",
        },
        {
          title: "Ghé thăm Harajuku - Khu phố sôi động của Nhật Bản",
          desc: "Không chỉ là một bầu không khí náo nhiệt với đông đúc dòng người qua lại, Harajuku còn là một khu phố hội tụ những nét văn hóa, phong cách thời trang độc đáo và những địa điểm tâm linh mang đậm dấu ấn văn hóa Nhật Bản.",
          image: "/images/travel/harajuku-3.png",
        },
        {
          title: "Ghé thăm Harajuku - Khu phố sôi động của Nhật Bản",
          desc: "Không chỉ là một bầu không khí náo nhiệt với đông đúc dòng người qua lại, Harajuku còn là một khu phố hội tụ những nét văn hóa, phong cách thời trang độc đáo và những địa điểm tâm linh mang đậm dấu ấn văn hóa Nhật Bản.",
          image: "/images/travel/harajuku-3.png",
        },
        {
          title: "Ghé thăm Harajuku - Khu phố sôi động của Nhật Bản",
          desc: "Không chỉ là một bầu không khí náo nhiệt với đông đúc dòng người qua lại, Harajuku còn là một khu phố hội tụ những nét văn hóa, phong cách thời trang độc đáo và những địa điểm tâm linh mang đậm dấu ấn văn hóa Nhật Bản.",
          image: "/images/travel/harajuku-3.png",
        },
        {
          title: "Ghé thăm Harajuku - Khu phố sôi động của Nhật Bản",
          desc: "Không chỉ là một bầu không khí náo nhiệt với đông đúc dòng người qua lại, Harajuku còn là một khu phố hội tụ những nét văn hóa, phong cách thời trang độc đáo và những địa điểm tâm linh mang đậm dấu ấn văn hóa Nhật Bản.",
          image: "/images/travel/harajuku-3.png",
        },
      ],
    };
  },
};
</script>

<style></style>

