<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";

import Header from "@/components/Header/Header.vue";
import "./assets/scss/main.scss";
</script>
