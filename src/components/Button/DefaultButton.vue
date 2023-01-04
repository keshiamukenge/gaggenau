<template>
  <ThemeProvider :theme="{ color: colors.white }">
    <ContainerButton
      ref="containerButton"
      :smallButton="smallButton"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
    >
      {{ text }}
    </ContainerButton>
  </ThemeProvider>
</template>

<script setup>
import gsap from "gsap";
import { ref } from "vue";
import { ThemeProvider } from "vue3-styled-components";

import { colors } from "@/theme";
import { ContainerButton } from "./styledComponents";

defineProps({
  text: {
    type: String,
    default: "Button",
  },
  smallButton: {
    type: Boolean,
    default: true,
  },
});

const containerButton = ref(null);

function onEnter() {
  gsap.to(containerButton.value.$el, {
    backgroundColor: colors.white,
    color: colors.black,
    duration: 0.5,
  });
}

function onLeave() {
  gsap.to(containerButton.value.$el, {
    backgroundColor: "transparent",
    color: colors.white,
    duration: 0.5,
  });
}
</script>
