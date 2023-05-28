<template>
  <div class="mt-12">
    <div class="text-center mb-6">
      <h3 class="title-content uppercase text-center">Dịch vụ và ẩm thực</h3>
      <span class="title-sub-content">
        Trải nghiệm các dịch vụ tiện ích và ẩm thực tại đây
      </span>
    </div>
    <div>
      <h3 class="text-3xl capitalize">Dịch vụ</h3>
      <div class="flex flex-wrap gap-6">
        <div v-for="(item, index) in service" :key="index">
          <div class="w-[350px] h-[250px] relative">
            <img
              class="w-full h-full rounded-sm"
              :src="item.image"
              :alt="item.title"
            />
            <span
              class="bg-[#ff6d70] py-2 px-2 pr-4 font-bold absolute top-0 cursor-pointer hover:underline"
            >
              {{ item.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <h3 class="text-3xl capitalize">Ẩm thực</h3>
      <div v-for="(item, index) in foots" :key="index">
        <div class="max-w-[900px] mx-auto underline">
          <h3 class="text-[22px] italic">{{ item.title }}</h3>
        </div>
        <div class="flex flex-col items-center mb-6">
          <div class="w-[450px] h-[350px] shadow-lg">
            <img
              class="w-full h-full rounded-sm"
              :src="item.image"
              alt="foots"
            />
          </div>
          <div class="col-span-2 max-w-[900px] mt-3">
            <span class="text-lg font-medium">{{ item.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service: [
        {
          title: "Nhà Hàng",
          image: "/images/service/image6.png",
        },
        {
          title: "Thuê xe đạp/xe máy",
          image: "/images/service/image5.jpg",
        },
        {
          title: "Xe limousine",
          image: "/images/service/image3.png",
        },
      ],
      foots: [
        {
          title: "Thịt dê",
          desc: "Được chăn thả bên trên những ngọn núi đá nên thịt dê ở Ninh Bình vô cùng săn chắc và dai nên du khách đến Ninh Bình nhất định phải thử món ăn này một lần. Trong khi thịt dê ở đây còn được chế biến ra nhiều món ăn ngon với những cách chế biến không giống nhau như làm thành nem dê, dê hấp, dê nướng hay nổi tiếng nhất là dê tương gừng - một món ăn cực kỳ giàu dinh dưỡng. Nhiều người cũng bảo rằng thịt dê còn có thể chữa được rất nhiều loại bệnh, nên đến Ninh Bình nếu có cơ hội bạn chớ bỏ lỡ thịt dê núi nức tiếng nơi đây.",
          image: "/images/foot/image7.png",
        },
        {
          title: "Cơm cháy",
          desc: "Nhắc đến đặc sản Ninh Bình không thể bỏ qua món cơm cháy ruốc thơm ngon. Điều làm nên sự đặc biệt của món cơm cháy này là người chế biến phải thực hiện vô cùng tỉ mỉ trong từng khâu thực hiện. Cơm cháy phải làm từ những loại gạo ngon và đem nếu vừa phải tới khi chín giòn đúng chuẩn.",
          image: "/images/foot/image2.png",
        },
      ],
    };
  },
};
</script>

