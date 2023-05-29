<template>
  <div class="mt-12">
    <div class="text-center mb-6">
      <h3 class="title-content uppercase text-center">SERVICES AND FOOD</h3>
      <!-- <span class="title-sub-content">
        Trải nghiệm các dịch vụ tiện ích và ẩm thực tại đây
      </span> -->
    </div>
    <div>
      <h3 class="text-3xl capitalize">Services</h3>
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
      <h3 class="text-3xl capitalize">Foods</h3>
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
          title: "Restaurant",
          image: "/images/service/image6.png",
        },
        {
          title: "Bicycle/motorcycle rental",
          image: "/images/service/image5.jpg",
        },
        {
          title: "Limousine car",
          image: "/images/service/image3.png",
        },
      ],
      foots: [
        {
          title: "Goat meat",
          desc: "Grazed on the rocky mountains, is a specialty in Ninh Binh known for its firm and robust texture. Visitors to Ninh Binh are encouraged to try this dish at least once. The local cuisine offers a variety of delicious goat meat dishes prepared in different ways, such as goat rolls, steamed goats, grilled goats, and the renowned goats with ginger sauce, which is not only flavorful but also highly nutritious. It is often believed that goat meat possesses healing properties and can help with various ailments. When you visit Ninh Binh, don't miss the opportunity to savor the famous mountain goat meat delicacy.",
          image: "/images/foot/image7.png",
        },
        {
          title: "Fried rice",
          desc: "When it comes to Ninh Binh specialties, one cannot overlook the delicious fried rice. What sets this dish apart is the meticulous process it requires at every stage of preparation. The key lies in using high-quality rice and skillfully controlling the heat to achieve the perfect balance of texture and flavor in the crispy rice",
          image: "/images/foot/image2.png",
        },
      ],
    };
  },
};
</script>

