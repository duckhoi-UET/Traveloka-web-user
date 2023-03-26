<template>
  <div class="flex flex-col items-center">
    <a-alert
      v-if="error"
      class="!mt-3 w-full"
      :message="error"
      type="warning"
      show-icon
    />
    <Register
      :loading="loading"
      class="!mt-3 min-w-[200px] max-w-md w-full"
      @submit="register"
    />
  </div>
</template>

<script>
import Register from "@/components/auth/forms/Register.vue";

export default {
  auth: false,
  layout: "auth",

  components: {
    Register,
  },

  data() {
    return {
      encryptor: null,
      loading: false,
      error: null,
    };
  },

  mounted() {
    const { JSEncrypt } = require("jsencrypt");
    this.encryptor = (message) => {
      const encrypt = new JSEncrypt();
      encrypt.setPublicKey(process.env.RSA_PUBLIC_KEY);

      return encrypt.encrypt(message);
    };
  },

  methods: {
    async register(form) {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.API_KEY_FIREBASE}`,
          { ...form, returnSecureToken: true }
        );
        if (response.data) {
          await await this.$axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.API_KEY_FIREBASE}`,
            {
              idToken: response.data.idToken,
              displayName: form.displayName,
              returnSecureToken: true,
            }
          );
          this.$message.success("Đã đăng ký tài khoản thành công");
          this.$router.push("/login");
        }
      } catch (error) {
        if (error.response.status === 400) {
          this.$message.error("Email đã tồn tại, vui lòng thử lại");
        }
      } finally {
        this.loading = false;
      }
    },
  },

  head() {
    return {
      title: "Đăng ký",
    };
  },
};
</script>

