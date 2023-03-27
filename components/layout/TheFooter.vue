<template>
  <div
    class="footer w-full min-h-max bg-[#333] p-4 md:p-10 border-t border-t-gray-60 shadow-md"
  >
    <div
      class="container max-w-[1200px] mx-auto flex flex-col gap-4 md:gap-14 lg:gap-6"
    >
      <div class="main grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
        <div class="column flex flex-col gap-5">
          <!-- <div class="w-full h-7">
            <img src="/images/logo-1.png" class="h-7" alt="CTV24" />
          </div> -->
          <div>
            <div
              class="flex flex-wrap items-center justify-center md:justify-start gap-2"
            >
              <div class="flex-grow max-w-[150px]">
                <img class="w-full" src="/images/footer/qr-zalo.png" />
              </div>
              <div class="flex flex-col gap-2">
                <a
                  href="#"
                  target="_blank"
                  class="google-play w-40 h-[42px] cursor-pointer"
                >
                  <img src="/images/footer/google-play.png" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="app-store w-40 h-[42px] cursor-pointer"
                >
                  <img src="/images/footer/app-store.png" />
                </a>
              </div>
            </div>
            <div
              class="mt-4 text-base md:text-xl uppercase text-[#eee] font-semibold text-center"
            >
              Tải ứng dụng
            </div>
          </div>
          <div class="space-y-2">
            <div class="font-semibold text-base md:text-xl text-[#eee]">
              Liên hệ
            </div>
            <div class="!text-[#888]">
              Hotline: <a href="tel:0962462692">0962462692</a>
            </div>
            <div class="!text-[#888]">
              Email: <a href="to:cskh@travel.vn">cskh@travel.vn</a>
            </div>
          </div>
        </div>
        <div
          v-for="(item, index) of FOOER_OPTIONS"
          :key="index"
          class="column flex flex-col gap-5"
        >
          <div
            class="font-semibold text-base md:text-xl text-[#eee] uppercase line-clamp-1"
          >
            {{ item.title }}
          </div>
          <div class="list-pages">
            <ul class="flex flex-col gap-3">
              <li v-for="(link, _index) of item.links" :key="_index">
                <a
                  :href="link.value"
                  class="hover:underline hover:decoration-1 !text-[#888]"
                  >{{ link.label }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="column flex flex-col gap-5">
          <div class="font-semibold text-base md:text-xl text-[#eee] uppercase">
            Theo dõi chúng tôi
          </div>

          <div class="socials flex gap-6 text-3xl">
            <a
              class="opacity-70 !text-[#eee] hover:opacity-100"
              href="https://www.facebook.com/dulichcattour/"
              target="_blank"
              rel="nofollow"
              ><i class="fab fa-facebook"></i
            ></a>
            <a
              class="opacity-70 !text-[#eee] hover:opacity-100"
              target="_blank"
              rel="nofollow"
              ><i class="fab fa-youtube"></i
            ></a>
            <a
              class="opacity-70 !text-[#eee] hover:opacity-100"
              target="_blank"
              rel="nofollow"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              class="opacity-70 !text-[#eee] hover:opacity-100"
              target="_blank"
              rel="nofollow"
              ><i class="fab fa-twitter"></i
            ></a>
          </div>
          <div class="w-full">
            <iframe
              class="w-full h-[200px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14896.864690568374!2d105.79230499999998!3d21.024034699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1679645845947!5m2!1svi!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <hr class="border-0 h-px text-[#eee] bg-prim-100" />

      <div class="info flex flex-col lg:flex-row gap-4 md:gap-16 items-center">
        <div class="full lg:flex-1 flex flex-col gap-4 md:gap-8">
          <div class="title uppercase text-lg !text-[#eee] font-semibold">
            TRAVELOKA
          </div>
          <div class="details gap-3">
            <div class="above gap-3 lg:gap-10">
              <div class="mst !text-[#888]">
                Trụ sở: Tầng 3, số 586 đường Kim Giang, xã Thanh Liệt, Huyện
                Thanh Trì. Thành phố Hà Nội, Việt Nam
              </div>
              <div class="issued-by !text-[#888]">
                Giấy chứng nhận ĐKDN số: 01651254 do phòng đăng ký kinh doanh -
                Sở Kế hoạch & Đầu tư Thành phố Hà Nội cấp ngày 11 tháng 03 năm
                2023.
              </div>
              <div class="issued-at !text-[#888]">
                Số điện thoại: <a href="tel:0962462692">0962 462 692</a>
              </div>
            </div>
            <div class="!text-[#888]">
              Đại diện theo pháp luật: NGUYỄN ĐỨC KHÔI
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FOOER_OPTIONS } from "@/constants/footer";

export default {
  data() {
    return {
      FOOER_OPTIONS,
    };
  },
  // async fetch() {
  //     await this.$store.dispatch('fetchSystemFooter');
  // },

  //   computed: {
  //     ...mapState(["systemFooter"]),
  //   },
  //   async beforeCreate() {
  //     await this.$store.dispatch("fetchSystemFooter");
  //   },

  //   mounted() {
  //     this.$forceUpdate();
  //   },
};
</script>
