<template>
  <div>
    <div class="bg-white shadow-md rounded-sm p-4">
      <div class="border-b border-b-gray-40 mb-4">
        <div class="flex justify-between">
          <h2 class="text-2xl font-bold !mb-1">{{ $route.params.id }}</h2>
          <a-button
            class="!bg-blue-60"
            type="primary"
            @click="handleBookingRoom(data)"
          >
            <i class="fas fa-calendar-check mr-2"></i>Đặt phòng
          </a-button>
        </div>
        <StarRating
          v-model="star"
          :show-rating="false"
          :star-size="15"
        ></StarRating>
        <div class="mt-2 mb-2 text-gray-60">
          <i class="fas fa-map-marker-alt"></i>
          <span
            >Thôn Văn Lâm, Ninh Thắng, Hoa Lư, Tỉnh Ninh Bình, Việt Nam,
            430000</span
          >
        </div>
      </div>
      <div>
        <SliderDetail :images="images"></SliderDetail>
      </div>
      <div class="px-2">
        <div>
          <h2 class="title">Vị trí</h2>
          <span>
            Lưu trú tại Tam Coc Valley Bungalow là một lựa chọn đúng đắn khi quý
            khách đến thăm Ninh Thắng. khách sạn này rất dễ tìm bởi vị trí đắc
            địa, nằm gần với nhiều tiện ích công cộng.
          </span>
          <h2 class="title">Thông tin về {{ $route.params.id }}</h2>
          <span>
            Vị trí Lưu trú tại Tam Coc Valley Bungalow là một lựa chọn đúng đắn
            khi quý khách đến thăm Ninh Thắng. khách sạn này rất dễ tìm bởi vị
            trí đắc địa, nằm gần với nhiều tiện ích công cộng. Thông tin về Tam
            Coc Valley Bungalow Không chỉ sở hữu vị trí giúp quý khách dễ dàng
            ghé thăm những địa điểm lý thú trong chuyến hành trình, Tam Coc
            Valley Bungalow cũng sẽ mang đến cho quý khách trải nghiệm lưu trú
            mỹ mãn. Dành cho những du khách muốn du lịch thoải mái cùng ngân
            sách tiết kiệm, Tam Coc Valley Bungalow sẽ là lựa chọn lưu trú hoàn
            hảo, nơi cung cấp các tiện nghi chất lượng và dịch vụ tuyệt vời. Hãy
            tận hưởng thời gian vui vẻ cùng cả gia đình với hàng loạt tiện nghi
            giải trí tại Tam Coc Valley Bungalow, một khách sạn tuyệt vời phù
            hợp cho mọi kỳ nghỉ bên người thân. Khách sạn này là nơi tốt nhất
            dành cho những ai mong muốn một nơi thanh bình, thư thái để ẩn mình
            khỏi đám đông ồn ã, xô bồ.
          </span>
        </div>

        <div class="convenient">
          <h2 class="title">Tiện nghi</h2>
          <div class="flex gap-4">
            <div class="flex flex-col items-center">
              <img src="/images/icon/air-conditioner.png" alt="" />
              Máy Lạnh
            </div>
            <div class="flex flex-col items-center">
              <img src="/images/icon/restaurant.png" alt="" />
              Nhà hàng
            </div>
            <div class="flex flex-col items-center">
              <img src="/images/icon/lake.png" alt="" />
              Hồ bơi
            </div>
            <div class="flex flex-col items-center">
              <img src="/images/icon/park.png" alt="" />
              Bãi đậu xe
            </div>
            <div class="flex flex-col items-center">
              <img src="/images/icon/wifi.png" alt="" />
              Wifi
            </div>
          </div>
        </div>
        <div>
          <h2 class="title">Bình luận</h2>
          <a-list
            v-if="comments.length"
            :data-source="comments"
            :header="`${comments.length} ${
              comments.length > 1 ? 'Bình luận' : 'Bình luận'
            }`"
            item-layout="horizontal"
          >
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-comment
                :author="item.author"
                :avatar="item.avatar"
                :content="item.content"
                :datetime="item.datetime"
              />
            </a-list-item>
          </a-list>
          <a-comment>
            <a-avatar
              slot="avatar"
              src="https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
              alt="Han Solo"
            />
            <div slot="content">
              <a-form-item>
                <a-textarea :rows="4" :value="value" @change="handleChange" />
              </a-form-item>
              <a-form-item>
                <a-button
                  html-type="submit"
                  :loading="submitting"
                  type="primary"
                  @click="handleSubmit"
                >
                  Bình luận
                </a-button>
              </a-form-item>
            </div>
          </a-comment>
        </div>
      </div>
    </div>
    <div>
      <h1 class="mt-4 text-2xl font-bold">Liên quan</h1>
    </div>
    <Slider class="mt-4">
      <template v-slot:slider>
        <swiper-slide v-for="(item, index) in tour" :key="index">
          <Tour :data="item"></Tour>
        </swiper-slide>
      </template>
    </Slider>
    <Booking ref="booking"></Booking>
  </div>
</template>

<script>
import Slider from "@/components/common/Slider";
import Tour from "@/components/favorite_room/components/Item.vue";
import StarRating from "vue-star-rating";
import SliderDetail from "@/components/common/SliderDetail";
import Booking from "@/components/favorite_room/modal/Booking.vue";
import moment from "moment";
export default {
  auth: false,
  components: {
    SliderDetail,
    StarRating,
    Slider,
    Tour,
    Booking,
  },
  data() {
    return {
      star: 5,
      comments: [
        {
          author: "Nguyễn Thị Thúy",
          avatar:
            "https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg",
          content:
            "Là một nơi vô cùng hoàn hảo để nghỉ dưỡng.Nếu quay lại NB nhất định tụi mình sẽ chỉ ở đây. Đặt phòng 2 người nhưng đến sớm lúc 5h sáng chị lễ tân đã cho tụi mình vào hẳn phòng 4 người và không thu thêm phụ phí gì. Từ nước uống, cafe và bữa sáng đều miễn phí. Không khí trong lành yên tĩnh đặc biệt khiến tụi mình thích nhất là sự tận tình của lễ tân.",
          datetime: moment().fromNow(),
        },
      ],
      images: [
        "/images/detail/20011220-034e83204b6db50125df61532fda7cdd.png",
        "/images/detail/20011220-8982a40e54f335d9b5350539b0ff7eed.png",
        "/images/detail/20011220-cbca140e39a80481d79b49d37811e628.png",
        "/images/detail/20011220-dd780a5c9b7a17f78e537b2da6cbb645.png",
        "/images/detail/20011220-d6717fd124f1f4bca1121945b33f32e0.png",
      ],
      submitting: false,
      value: "",
      moment,
      likes: 0,
      dislikes: 0,
      action: null,
      tour: [
        {
          title: "Bungalow Double Room",
          bed: "1 Giường Cỡ King",
          person: "2 khách",
          star: 5,
          price: "499.950",
          oldPrice: "909.000",
          image: "/images/Tour/1.png",
          views: "2.467",
        },
        {
          title: "Bungalow Triple Room",
          bed: "1 Giường Đôi Và 1 Giường Đơn",
          person: "3 khách",
          star: 5,
          price: "668.250",
          oldPrice: "1.215.000",
          image: "/images/Tour/2-2.png",
          views: "4.467",
        },
        {
          title: "Bungalow Family Room",
          bed: "2 Giường Cỡ King",
          person: "4 khách",
          star: 5,
          price: "891.000",
          oldPrice: "1.620.000",
          image: "/images/Tour/3.png",
          views: "1.427",
        },
        {
          title: "Cozy Superior Room",
          bed: "1 Giường Đôi",
          person: "2 khách",
          star: 5,
          price: "1.678.132",
          oldPrice: "2.237.509",
          image: "/images/Tour/4.png",
          views: "3.407",
        },
        {
          title: "Spacious Deluxe Room",
          bed: "1 Giường Đôi",
          person: "2 khách",
          star: 5,
          price: "1.797.999",
          oldPrice: "2.397.332",
          image: "/images/Tour/5.png",
          views: "5.467",
        },
        {
          title: "Premier Executive Room",
          bed: "1 Giường Đôi",
          person: "2 khách",
          star: 5,
          price: "2.554.654",
          oldPrice: "3.406.205",
          image: "/images/Tour/6.png",
          views: "6.467",
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: "Đức Khôi",
            avatar:
              "https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg",
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = "";
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = "liked";
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = "disliked";
    },
    handleBookingRoom(item) {
      if (this.$auth.loggedIn) {
        this.$refs.booking.open();
      } else {
        if (confirm("Bạn cần đăng nhâp!") === true) {
          this.$router.push("/login");
        }
      }
    },
  },
  head() {
    return {
      title: `Traveloka - ${this.$route.params.id}`,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  @apply text-xl font-bold mt-2;
}
.convenient {
  img {
    @apply w-7 h-7;
  }
}
</style>
