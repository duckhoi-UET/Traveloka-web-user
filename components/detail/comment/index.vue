<template>
  <div>
    <a-list
      v-if="comments.length"
      :data-source="comments"
      :header="`${comments.length} ${
        comments.length > 1 ? 'Bình luận' : 'Bình luận'
      }`"
      item-layout="vertical"
    >
      <a-list-item>
        <a-comment v-for="(item, index) in comments" :key="index">
          <a slot="author"
            >{{ item.author }}
            <StarRating
              v-model="item.star"
              :read-only="true"
              :show-rating="false"
              :star-size="15"
            ></StarRating
          ></a>

          <a-avatar slot="avatar" :src="item.avatar" alt="avatar" />
          <div slot="content">
            <span>
              {{ item.content }}
            </span>
            <div v-if="item.images?.length" class="flex gap-6 flex-wrap mt-4">
              <img
                v-for="(image, index) in item.images"
                :key="index"
                :src="image"
                class="object-contain max-w-[150px] cursor-pointer"
                alt="comment"
                @click="previewImage(image)"
              />
            </div>
          </div>
          <a-tooltip
            slot="datetime"
            :title="moment().format('YYYY-MM-DD HH:mm:ss')"
          >
            <span>{{ moment().fromNow() }}</span>
          </a-tooltip>
        </a-comment>
      </a-list-item>
    </a-list>

    <a-comment>
      <a-avatar
        slot="avatar"
        src="https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
        alt="Han Solo"
      />

      <div slot="content">
        <div class="flex gap-4 items-center ml-1 mb-4 text-lg font-semibold">
          <span>Đánh giá:</span>
          <StarRating
            v-model="star"
            class="mb-1"
            :show-rating="false"
            :star-size="20"
          ></StarRating>
        </div>

        <div class="border rounded-md border-gray-40 p-2">
          <a-form-item class="!mb-1">
            <a-textarea
              class="!border-none !outline-none"
              :rows="4"
              :value="value"
              placeholder="Bình luận..."
              @change="handleChange"
            />
          </a-form-item>
          <UploadFile></UploadFile>
        </div>
        <a-form-item>
          <a-button
            html-type="submit"
            :loading="submitting"
            class="!bg-blue-60 mt-2"
            type="primary"
            @click="handleSubmit"
          >
            Bình luận
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
    <PreviewImage ref="previewImage"></PreviewImage>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import PreviewImage from "@/components/common/PreviewImage";
import UploadFile from "@/components/detail/upload_file";
import moment from "moment";
export default {
  components: {
    PreviewImage,
    StarRating,
    UploadFile,
  },
  data() {
    return {
      star: 5,
      submitting: false,
      value: "",
      moment,
      likes: 0,
      dislikes: 0,
      action: null,
      comments: [
        {
          author: "Nguyễn Thị Thúy",
          avatar:
            "https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg",
          content:
            "Là một nơi vô cùng hoàn hảo để nghỉ dưỡng.Nếu quay lại NB nhất định tụi mình sẽ chỉ ở đây. Đặt phòng 2 người nhưng đến sớm lúc 5h sáng chị lễ tân đã cho tụi mình vào hẳn phòng 4 người và không thu thêm phụ phí gì. Từ nước uống, cafe và bữa sáng đều miễn phí. Không khí trong lành yên tĩnh đặc biệt khiến tụi mình thích nhất là sự tận tình của lễ tân.",
          datetime: moment().fromNow(),
          images: [
            "/images/detail/20011220-034e83204b6db50125df61532fda7cdd.png",
            "/images/detail/20011220-8982a40e54f335d9b5350539b0ff7eed.png",
            "/images/detail/20011220-cbca140e39a80481d79b49d37811e628.png",
          ],
          star: 5,
        },
        {
          author: "Dương Ngô hạnh",
          avatar:
            "https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg",
          content:
            "Dịch vụ rất tốt, view siêu siêu đẹp. Trải nghiệm tuyệt vời ",
          datetime: moment().fromNow(),
          images: [
            "/images/detail/20011220-cbca140e39a80481d79b49d37811e628.png",
            "/images/detail/20011220-dd780a5c9b7a17f78e537b2da6cbb645.png",
            "/images/detail/20011220-d6717fd124f1f4bca1121945b33f32e0.png",
          ],
          star: 5,
        },
        {
          author: "Nguyễn Đức Khôi",
          avatar:
            "https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg",
          content:
            "Là một nơi vô cùng hoàn hảo để nghỉ dưỡng.Nếu quay lại NB nhất định tụi mình sẽ chỉ ở đây. Đặt phòng 2 người nhưng đến sớm lúc 5h sáng chị lễ tân đã cho tụi mình vào hẳn phòng 4 người và không thu thêm phụ phí gì. Từ nước uống, cafe và bữa sáng đều miễn phí. Không khí trong lành yên tĩnh đặc biệt khiến tụi mình thích nhất là sự tận tình của lễ tân. 11/10 điểm luôn ạ",
          datetime: moment().fromNow(),
          images: [
            "/images/detail/20011220-034e83204b6db50125df61532fda7cdd.png",
            "/images/detail/20011220-8982a40e54f335d9b5350539b0ff7eed.png",
            "/images/detail/20011220-cbca140e39a80481d79b49d37811e628.png",
            "/images/detail/20011220-dd780a5c9b7a17f78e537b2da6cbb645.png",
          ],
          star: 5,
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      if (this.$auth.loggedIn) {
        if (!this.value) {
          return;
        }

        this.submitting = true;

        setTimeout(() => {
          this.submitting = false;
          this.comments = [
            {
              author: this.$auth.user.displayName,
              avatar:
                "https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg",
              content: this.value,
              datetime: moment().fromNow(),
              images: [
                "/images/detail/20011220-cbca140e39a80481d79b49d37811e628.png",
                "/images/detail/20011220-dd780a5c9b7a17f78e537b2da6cbb645.png",
                "/images/detail/20011220-d6717fd124f1f4bca1121945b33f32e0.png",
              ],
            },
            ...this.comments,
          ];
          this.value = "";
        }, 1000);
      } else {
        if (confirm("Bạn cần đăng nhâp!") === true) {
          this.$router.push("/login");
        }
      }
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
    previewImage(image) {
      this.$refs.previewImage.open(image);
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
}
textarea:focus {
  border: none;
  outline: none;
  box-shadow: unset;
}
</style>

