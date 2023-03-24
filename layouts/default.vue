<template>
  <div class="min-h-screen flex flex-col">
    <Header class="fixed top-0 w-full z-40" />
    <Banner />

    <div
      class="container mx-auto max-w-[1200px] flex-grow my-4 xl:my-8 px-4 xl:px-0"
    >
      <nuxt v-if="!$slots.default" />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/TheHeader.vue";
import Footer from "@/components/layout/TheFooter.vue";
import Banner from "@/components/banner/Banner.vue";

export default {
  components: {
    Header,
    Footer,
    Banner,
  },
};
</script>

