<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";

import { useIsMobileDeviceStore } from "@/stores/isMobileDevice";
import Header from "@/components/Header/Header.vue";
import "./assets/scss/main.scss";

const isMobile = useIsMobileDeviceStore();

onMounted(() => {
  isMobile.isOnMobileDevice();
});
</script>
