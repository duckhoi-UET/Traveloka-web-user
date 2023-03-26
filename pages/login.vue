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
    async login(form) {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API_KEY_FIREBASE}`,
          { ...form, returnSecureToken: true }
        );
        if (response) {
          const { idToken } = response.data;
          this.$auth.setUserToken(idToken);
          this.$auth.setStrategy("local");
          this.$auth.setUser(response.data);
          this.$router.push("/");
          this.$message.success("Đăng nhập thành công");
        }
      } catch (error) {
        this.$message.error(
          "Email hoặc mật khẩu không chính xác, vui lòng thử lại!"
        );
      } finally {
        this.loading = false;
      }
    },
  },

  head() {
    return {
      title: "Đăng nhập",
    };
  },
};
</script>
