<template>
  <a-form-model
    ref="form"
    :model="form"
    :rules="rules"
    class="login-form space-y-4"
  >
    <a-form-model-item prop="displayName">
      <a-input
        v-model="form.displayName"
        size="large"
        placeholder="Tên tài khoản"
        @keyup.native.enter="handleSubmit"
      >
        <template #prefix>
          <i class="far fa-user text-prim-90" />
        </template>
      </a-input>
    </a-form-model-item>
    <a-form-model-item prop="email">
      <a-input
        v-model="form.email"
        size="large"
        placeholder="Email"
        @keyup.native.enter="handleSubmit"
      >
        <template #prefix>
          <i class="fas fa-envelope text-prim-90"></i>
        </template>
      </a-input>
    </a-form-model-item>
    <a-form-model-item prop="password">
      <a-input-password
        v-model="form.password"
        size="large"
        placeholder="Mật khẩu"
        @keyup.native.enter="handleSubmit"
      >
        <template #prefix>
          <i class="fas fa-unlock-alt text-prim-90" />
        </template>
      </a-input-password>
    </a-form-model-item>
    <a-form-model-item prop="password">
      <a-input-password
        v-model="form.rePassword"
        size="large"
        placeholder="Nhập lại mật khẩu"
        @keyup.native.enter="handleSubmit"
      >
        <template #prefix>
          <i class="fas fa-unlock-alt text-prim-90" />
        </template>
      </a-input-password>
    </a-form-model-item>
    <a-button
      :loading="loading"
      type="primary"
      size="large"
      class="w-full"
      @click="handleSubmit"
    >
      Đăng ký
    </a-button>
  </a-form-model>
</template>

<script>
import _cloneDeep from "lodash/cloneDeep";

const defaultForm = {
  email: "",
  password: "",
  rePassword: "",
};

export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      form: _cloneDeep(defaultForm),
      rules: {
        displayName: [
          {
            required: true,
            message: "Vui lòng nhập tên tài khoản",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Vui lòng nhập email",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Vui lòng nhập mật khẩu",
            trigger: "blur",
          },
        ],
        rePassword: [
          {
            required: true,
            message: "Vui lòng nhập mật khẩu",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    handleSubmit() {
      if (this.form.password !== this.form.rePassword) {
        this.$message.error(
          "Mật khẩu đã nhập không chính xác, vui lòng thử lại!"
        );
      } else {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            this.$emit("submit", this.form);
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
.login-form {
  .ant-input::placeholder {
    @apply text-center;
  }
}
</style>

