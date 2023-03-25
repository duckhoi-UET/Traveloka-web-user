<template>
  <div class="bg-white shadow-md rounded-sm p-4">
    <div class="border-b border-b-gray-40 mb-4">
      <h2 class="text-2xl font-bold !mb-1">Tam Coc Valley Bungalow</h2>
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
      <SliderDetail></SliderDetail>
    </div>
    <div class="px-2">
      <div>
        <h2 class="title">Vị trí</h2>
        <span>
          Lưu trú tại Tam Coc Valley Bungalow là một lựa chọn đúng đắn khi quý
          khách đến thăm Ninh Thắng. khách sạn này rất dễ tìm bởi vị trí đắc
          địa, nằm gần với nhiều tiện ích công cộng.
        </span>
        <h2 class="title">Thông tin về Tam Coc Valley Bungalow</h2>
        <span>
          Vị trí Lưu trú tại Tam Coc Valley Bungalow là một lựa chọn đúng đắn
          khi quý khách đến thăm Ninh Thắng. khách sạn này rất dễ tìm bởi vị trí
          đắc địa, nằm gần với nhiều tiện ích công cộng. Thông tin về Tam Coc
          Valley Bungalow Không chỉ sở hữu vị trí giúp quý khách dễ dàng ghé
          thăm những địa điểm lý thú trong chuyến hành trình, Tam Coc Valley
          Bungalow cũng sẽ mang đến cho quý khách trải nghiệm lưu trú mỹ mãn.
          Dành cho những du khách muốn du lịch thoải mái cùng ngân sách tiết
          kiệm, Tam Coc Valley Bungalow sẽ là lựa chọn lưu trú hoàn hảo, nơi
          cung cấp các tiện nghi chất lượng và dịch vụ tuyệt vời. Hãy tận hưởng
          thời gian vui vẻ cùng cả gia đình với hàng loạt tiện nghi giải trí tại
          Tam Coc Valley Bungalow, một khách sạn tuyệt vời phù hợp cho mọi kỳ
          nghỉ bên người thân. Khách sạn này là nơi tốt nhất dành cho những ai
          mong muốn một nơi thanh bình, thư thái để ẩn mình khỏi đám đông ồn ã,
          xô bồ.
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
</template>

<script>
import StarRating from "vue-star-rating";
import SliderDetail from "@/components/common/SliderDetail";
import moment from "moment";
export default {
  auth: false,
  components: {
    SliderDetail,
    StarRating,
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
      submitting: false,
      value: "",
      moment,
      likes: 0,
      dislikes: 0,
      action: null,
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
