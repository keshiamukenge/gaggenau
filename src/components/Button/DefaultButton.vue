<template>
  <ThemeProvider :theme="{ color: colors.white }">
    <ContainerButton :smallButton="smallButton">
      {{ text }}
    </ContainerButton>
  </ThemeProvider>
</template>

<script setup>
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
</script>
