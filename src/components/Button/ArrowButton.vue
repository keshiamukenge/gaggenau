<template>
  <ThemeProvider :theme="{ color: colors.white }">
    <ContainerArrowButton ref="containerButton" @mouseenter="onHover">
      <TextArrowButton>{{ text }}</TextArrowButton>
      <ArrowCircleIcon :startAnimation="startAnimation" />
    </ContainerArrowButton>
  </ThemeProvider>
</template>

<script setup>
import { ref } from "vue";
import { ThemeProvider } from "vue3-styled-components";

import { colors } from "@/theme.js";
import { ArrowCircleIcon } from "@/assets/SvgIcons";
import { ContainerArrowButton, TextArrowButton } from "./styledComponents";

const containerButton = ref(null);
const startAnimation = ref(false);

defineProps({
  text: {
    type: String,
    default: "Button",
  },
});

function onHover() {
  startAnimation.value = true;

  setTimeout(() => {
    startAnimation.value = false;
  }, 700);
}
</script>
