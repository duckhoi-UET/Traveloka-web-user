<template>
  <div>
    <div class="flex flex-col items-center">
      <a-alert
        v-if="error"
        class="!mt-3 w-full"
        :message="error"
        type="warning"
        show-icon
      />
      <LoginForm
        :loading="loading"
        class="!mt-3 min-w-[200px] max-w-md w-full"
        @submit="login"
      />
    </div>
    <div class="flex justify-end mt-2">
      <nuxt-link class="hover:underline" to="/register">Đăng ký</nuxt-link>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/forms/Login.vue";

export default {
  layout: "auth",

  components: {
    LoginForm,
  },

  data() {
    return {
      encryptor: null,
      loading: false,
      error: null,
    };
  },

  methods: {
    login(form) {
      this.loading = true;
      this.$auth
        .loginWith("local", {
          data: {
            ...form,
          },
        })
        .then(async () => {
          this.$router.push("/");
          this.$message.success("Đăng nhập thành công");
        })
        .catch((error) => {
          this.$handleError(error, (_error) => {
            const errorData = _error?.response?.data;

            if (errorData?.code === 401) {
              this.error = "Tên đăng nhập hoặc mật khẩu không chính xác";
              this.$forceUpdate();
            }
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },

  head() {
    return {
      title: "Đăng nhập",
    };
  },
};
</script>

