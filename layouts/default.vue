<template>
    <div class="flex justify-between bg-[#f8f8f8] h-screen">
        <div class="hidden md:block">
            <TheSidebar />
        </div>
        <div class="flex-grow flex flex-col h-screen overflow-x-hidden">
            <TheHeader />
            <div class="flex-grow overflow-y-auto max-h-screen custom-scroll">
                <nuxt class="bg-[#FAFBFF] shadow-light p-4 m-3 md:m-6 overflow-x-hidden" />
            </div>
            <TheFooter />
        </div>
    </div>
</template>

<script>
    import TheSidebar from '@/components/layout/TheSidebar.vue';
    import TheHeader from '@/components/layout/TheHeader.vue';
    import TheFooter from '@/components/layout/TheFooter.vue';

    export default {
        components: {
            TheSidebar,
            TheHeader,
            TheFooter,
        },
    };
</script>
