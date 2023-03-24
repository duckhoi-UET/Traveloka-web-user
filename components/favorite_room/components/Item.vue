<template>
  <div class="item-favorite">
    <a-card hoverable class="min-h-[370px]">
      <img
        slot="cover"
        class="object-cover h-[180px] w-full"
        alt="example"
        :src="data.image"
      />
      <div>
        <h4
          class="text-xl font-semibold text-blue-60 hover:underline hover:text-red-100"
          @click="goToDetailRoom(data.title)"
        >
          {{ data.title }}
        </h4>
        <div class="flex justify-between items-center">
          <div class="flex items-center w-2/3">
            <i class="fas fa-bed mr-2"></i>
            <span class="truncate">{{ data.bed }}</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-user mr-2"></i>
            <span>{{ data.person }}</span>
          </div>
        </div>
        <div class="flex justify-between mt-2">
          <StarRating
            v-model="data.star"
            :show-rating="false"
            :star-size="15"
          ></StarRating>
          <div class="font-semibold text-prim-100">
            <span class="text-lg">{{ data.price }}đ</span>
            <span class="text-red-100 text-xs line-through"
              >{{ data.oldPrice }}đ</span
            >
          </div>
        </div>
        <div class="mt-2 flex justify-between">
          <div class="flex items-center gap-2">
            <i class="fas fa-eye text-lg mt-[1px]"></i>
            <span>{{ data.views }}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fas fa-eye text-lg mt-[1px]"></i>
            <span>100 lượt/tháng</span>
          </div>
        </div>
      </div>

      <a-button class="mt-6 !bg-blue-60" type="primary">
        <i class="fas fa-calendar-check mr-2"></i>Đặt phòng
      </a-button>
    </a-card>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  components: {
    StarRating,
  },
  data() {
    return {
      rating: 3,
    };
  },
  methods: {
    goToDetailRoom(id) {
      this.$router.push(`/detail-room/${id}`);
    },
  },
};
</script>

<style lang="scss">
.item-favorite {
  .ant-card-body {
    @apply p-3 #{!important};
  }
}
</style>

