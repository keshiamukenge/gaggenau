<template>
  <div v-if="start">
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";

import Header from "@/components/Header/Header.vue";
import "./assets/scss/main.scss";

const start = ref(false);

setTimeout(() => {
  start.value = true;
}, 2000);
</script>
