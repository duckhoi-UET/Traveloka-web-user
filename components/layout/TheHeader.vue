<template>
  <div
    class="py-4 px-4 md:px-6 flex justify-between items-center"
    :class="
      isShowHeader
        ? 'bg-white border-b border-gray-5 shadow-sm'
        : 'bg-transparent border-none'
    "
  >
    <div>
      <div class="md:hidden cursor-pointer" @click="toggleSidebar">
        <i
          class="fas fa-bars text-lg"
          :class="isShowHeader ? '' : 'text-white drop-shadow-lg'"
        />
      </div>
      <div
        class="hidden md:block font-semibold text-xl hover:cursor-pointer"
        @click="$router.push('/')"
        :class="isShowHeader ? 'text-prim-100' : 'text-white drop-shadow-lg'"
      >
        <!-- <img v-if="isShowHeader" src="/images/logo.svg" class="w-32" alt="" /> -->
        <!-- <img src="/images/Tour Travel Business Logo.png" class="w-32" alt="" /> -->
        <div
          class="font-bold text-3xl"
          :class="isShowHeader ? 'text-[#434343]' : ''"
          style="
            font-family: 'Trip Sans VF', 'Trip Sans', Arial, sans-serif !important;
          "
        >
          TamCoc Valley Bungalow
        </div>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <a href="tel:0981 125 768" class="font-semibold">
        <i
          class="fas fa-phone-alt"
          :class="isShowHeader ? 'text-gray-100' : 'text-white drop-shadow-lg'"
        />
        <span
          class="hidden md:inline"
          :class="isShowHeader ? 'text-red-100' : 'text-white drop-shadow-lg'"
          >0981 125 768</span
        >
      </a>
      <div
        class="font-semibold"
        :class="{ 'text-white drop-shadow-lg': !isShowHeader }"
      >
        <i class="fas fa-question-circle" />
        <span class="hidden md:inline">Trợ giúp</span>
      </div>
      <div
        :class="isShowHeader ? 'text-warning-100' : 'text-white drop-shadow-lg'"
      >
        <i class="fas fa-bell text-lg" />
      </div>
      <div></div>
      <div class="flex items-center gap-2" v-if="$auth.loggedIn">
        <a-avatar>
          <i class="fas fa-user" />
        </a-avatar>
        <a-dropdown :trigger="['click']">
          <div
            class="cursor-pointer font-semibold"
            :class="
              isShowHeader ? 'text-gray-100' : 'text-white drop-shadow-lg'
            "
          >
            {{ $auth.user.displayName }}
            <i class="fas fa-chevron-down" />
          </div>
          <template #overlay>
            <a-menu class="!mt-3">
              <!-- <a-menu-item class="!py-2" @click="$refs.updateInfoDialog.open()">
                <i class="mr-4 fas fa-user" />Cập nhật thông tin
              </a-menu-item> -->
              <a-menu-item
                class="!py-2"
                @click="$refs.updatePasswordDialog.open()"
              >
                <i class="mr-4 fas fa-key" />Đổi mật khẩu
              </a-menu-item>
              <a-menu-item class="!py-2" @click="logout">
                <i class="mr-4 fas fa-sign-out-alt" />Đăng xuất
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
      <div v-else class="flex items-center gap-6">
        <nuxt-link
          class="font-bold !text-white !hover:text-red"
          :class="isShowHeader ? '' : ' drop-shadow-lg'"
          to="/register"
        >
          <span
            class="bg-[#0194f3] px-4 py-2 pb-[9px] rounded-md hover:bg-[#007ce8]"
          >
            Đăng Ký
          </span>
        </nuxt-link>
        <nuxt-link
          class="font-bold hover:underline !hover:text-red"
          :class="
            isShowHeader ? '!text-gray-100' : '!text-white drop-shadow-lg'
          "
          to="/login"
        >
          Đăng Nhập
        </nuxt-link>
      </div>
    </div>
    <a-drawer
      class="header-sidebar-drawer"
      :visible="sidebarVisible"
      placement="left"
      :closable="false"
      @close="sidebarVisible = false"
    >
      <template v-slot:title>
        <div class="flex justify-between items-center">
          <nuxt-link to="/">
            <div
              class="font-bold text-[#434343]"
              style="
                font-family: 'Trip Sans VF', 'Trip Sans', Arial, sans-serif !important;
              "
            >
              TamCoc Valley Bungalow
            </div>
          </nuxt-link>
        </div>
      </template>
      <TheSidebar class="h-full" />
    </a-drawer>
    <UpdateInfoDialog ref="updateInfoDialog" />
    <UpdatePasswordDialog ref="updatePasswordDialog" />
  </div>
</template>

<script>
import TheSidebar from "@/components/layout/TheSidebar.vue";
import NotificationPopover from "@/components/notifications/Popover.vue";
import UpdateInfoDialog from "@/components/auth/dialogs/UpdateInfo.vue";
import UpdatePasswordDialog from "@/components/auth/dialogs/UpdatePassword.vue";

export default {
  components: {
    TheSidebar,
    NotificationPopover,
    UpdateInfoDialog,
    UpdatePasswordDialog,
  },

  data() {
    return {
      sidebarVisible: false,
      isShowHeader: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  computed: {
    authUser() {
      return (
        this.$auth.user || {
          fullName: "Lorem Ipsum",
        }
      );
    },
  },

  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },

    async logout() {
      this.$nuxt.$loading.start();
      await this.$auth?.logout();
      sessionStorage.removeItem("user");
      this.$nuxt.$loading.finish();
      this.$router.push("/");
    },
    handleScroll(event) {
      if (window.scrollY > 400) {
        this.isShowHeader = true;
      } else {
        this.isShowHeader = false;
      }
    },
  },
};
</script>

<style lang="scss">
.header-sidebar-drawer {
  .ant-drawer-body {
    @apply p-0 h-full #{!important};
  }
}
</style>
