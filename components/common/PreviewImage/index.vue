<template>
  <a-modal v-model="visible" destroy-on-close :footer="null">
    <div>
      <img :src="image" class="object-contain" alt="" />
    </div>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      image: "",
    };
  },

  methods: {
    open(image) {
      if (image) {
        this.image = image;
        this.visible = true;
      }
    },

    close() {
      this.visible = false;
    },
  },
};
</script>

