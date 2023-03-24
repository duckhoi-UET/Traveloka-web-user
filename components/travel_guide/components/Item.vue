<template>
  <div
    class="item-travel-guide min-h-[370px] rounded-sm"
    :style="{ backgroundImage: `url(${data.image})` }"
  >
    <div
      class="content text-white flex flex-col items-end justify-end min-h-[370px] text-center pb-6 px-2"
    >
      <h4
        class="text-white font-semibold text-2xl title hover:underline shadow-sm"
      >
        {{ data.title }}
      </h4>
      <span class="description">
        {{ data.desc }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      rating: 3,
    };
  },
};
</script>

<style lang="scss" scoped>
.item-travel-guide {
  background-size: cover;
  background-repeat: no-repeat;
}
.item-travel-guide {
  &:hover {
    cursor: pointer;
    transition: all 0.6s ease;
    transform: translateY(-8px);
  }
  // .content:hover {
  //   opacity: 1;
  //   transition: all 0.6s ease;
  // }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 25px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}
</style>

