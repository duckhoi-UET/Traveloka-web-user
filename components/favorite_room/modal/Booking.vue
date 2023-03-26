<template>
  <a-modal
    class="booking"
    v-model="visible"
    destroy-on-close
    title="Điền đầy đủ thông tin"
  >
    <a-form-model
      ref="form"
      :model="form"
      :rules="rules"
      layout="vertical"
      :colon="false"
    >
      <a-form-model-item label="Họ và tên" prop="fullName">
        <a-input v-model="form.fullName" placeholder="Nhập nội dung" />
      </a-form-model-item>
      <a-form-model-item label="CMND/CCCD" prop="numberCard">
        <a-input v-model="form.numberCard" placeholder="Nhập nội dung" />
      </a-form-model-item>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <a-form-model-item label="Số điện thoại" prop="mobile">
          <a-input v-model="form.mobile" placeholder="Nhập nội dung" />
        </a-form-model-item>
        <a-form-model-item label="Email" prop="email">
          <a-input v-model="form.email" placeholder="Nhập nội dung" />
        </a-form-model-item>
      </div>
      <a-form-model-item label="Chọn ngày" prop="endDate">
        <a-range-picker
          :show-time="{ format: 'HH:mm' }"
          format="YYYY-MM-DD HH:mm"
          :placeholder="['Bắt đầu', 'Kết thúc']"
          class="!w-full"
          @change="onChange"
          @ok="onOk"
        />
      </a-form-model-item>
    </a-form-model>
    <div slot="footer" class="flex justify-center items-center gap-2">
      <a-button class="w-28" @click="close"> Hủy bỏ </a-button>
      <a-button
        :loading="loading"
        class="w-28 !bg-blue-60"
        type="primary"
        @click="onBookingRoom"
      >
        Đặt phòng
      </a-button>
    </div>
  </a-modal>
</template>

<script>
import { phoneValidator } from "@/utils/form";

export default {
  data() {
    return {
      visible: false,
      loading: false,
      room: null,
      form: {},
      rules: {
        fullName: [
          {
            required: true,
            message: "Vui lòng nhập họ tên",
            trigger: "blur",
          },
        ],
        mobile: [
          {
            required: true,
            validator: phoneValidator,
            trigger: "blur",
          },
        ],
        email: [
          {
            type: "email",
            message: "Vui lòng nhập đúng định dạng email",
            trigger: "blur",
          },
        ],
        numberCard: [
          {
            required: true,
            message: "Vui lòng nhập số CMND/CCCD",
            trigger: "blur",
          },
        ],
        endDate: [
          {
            required: true,
            message: "Vui lòng nhập chọn ngày giờ",
            trigger: "blur",
          },
        ],
      },
    };
  },

  computed: {
    authUser() {
      return this.$auth?.user;
    },
  },

  methods: {
    open() {
      this.form = {
        fullName: this.authUser?.fullName,
        email: this.authUser?.email,
        mobile: this.authUser?.mobile,
      };
      this.visible = true;
    },

    close() {
      this.visible = false;
    },
    onChange(value, dateString) {
      this.form.startDate = dateString[0];
      this.form.endDate = dateString[1];
      console.log("Selected Time: ", value);
      console.log("Formatted Selected Time: ", dateString);
    },
    onOk(value) {
      console.log("onOk: ", value);
    },

    async onBookingRoom() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.$message.success(
              "Đã xác nhận yêu cầu đặt phòng của quý khách, chúng tôi sẽ liên hệ với bạn trong thời gian ngắn nhất"
            );
            this.close();
            this.loading = false;
          }, 300);
        }
      });
    },
  },
};
</script>

<style lang="scss">
.booking {
  .ant-calendar-picker .ant-calendar-picker-input {
    @apply flex justify-around;
  }
  .ant-calendar-picker .ant-calendar-range-picker-input {
    @apply w-auto #{!important};
  }
}
</style>

