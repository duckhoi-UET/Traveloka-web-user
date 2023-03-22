<template>
    <div class="bg-white py-4 px-4 md:px-6 flex justify-between items-center border-b border-gray-5">
        <div>
            <div class="md:hidden cursor-pointer" @click="toggleSidebar">
                <i class="fas fa-bars text-lg" />
            </div>
            <div class="hidden lg:block text-prim-100 font-semibold">
                EziHotel - Hệ thống quản trị khách sạn
            </div>
        </div>
        <div class="flex items-center gap-6">
            <a href="tel:024 35 683727" class="font-semibold">
                <i class="fas fa-phone-alt text-gray-100" /> <span class="hidden md:inline text-red-100">024 35 683727</span>
            </a>
            <div class="font-semibold">
                <i class="fas fa-question-circle" /> <span class="hidden md:inline">Trợ giúp</span>
            </div>
            <NotificationPopover />
            <div class="flex items-center gap-2">
                <a-avatar>
                    <i class="fas fa-user" />
                </a-avatar>
                <a-dropdown :trigger="['click']">
                    <div class="cursor-pointer font-semibold">
                        {{ authUser.fullName }}
                        <i class="fas fa-chevron-down" />
                    </div>
                    <template #overlay>
                        <a-menu class="!mt-3">
                            <a-menu-item class="!py-2" @click="$refs.updateInfoDialog.open()">
                                <i class="mr-4 fas fa-user" />Cập nhật thông tin
                            </a-menu-item>
                            <a-menu-item class="!py-2" @click="$refs.updatePasswordDialog.open()">
                                <i class="mr-4 fas fa-key" />Đổi mật khẩu
                            </a-menu-item>
                            <a-menu-item class="!py-2" @click="logout">
                                <i class="mr-4 fas fa-sign-out-alt" />Đăng xuất
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </div>
        <a-drawer
            class="header-sidebar-drawer"
            :visible="sidebarVisible"
            placement="left"
            @close="sidebarVisible = false"
        >
            <TheSidebar class="h-full" />
        </a-drawer>
        <UpdateInfoDialog ref="updateInfoDialog" />
        <UpdatePasswordDialog ref="updatePasswordDialog" />
    </div>
</template>

<script>
    import TheSidebar from '@/components/layout/TheSidebar.vue';
    import NotificationPopover from '@/components/notifications/Popover.vue';
    import UpdateInfoDialog from '@/components/auth/dialogs/UpdateInfo.vue';
    import UpdatePasswordDialog from '@/components/auth/dialogs/UpdatePassword.vue';

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
            };
        },

        computed: {
            authUser() {
                return this.$auth.user || {
                    fullName: 'Lorem Ipsum',
                };
            },
        },

        methods: {
            toggleSidebar() {
                this.sidebarVisible = !this.sidebarVisible;
            },

            async logout() {
                await this.$auth.logout();
                this.$router.push('/login');
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
