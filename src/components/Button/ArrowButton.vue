<template>
  <ThemeProvider :theme="{ color: colors.white }">
    <ContainerArrowButton>
      <TextArrowButton>{{ text }}</TextArrowButton>
      <ArrowCircleIcon />
    </ContainerArrowButton>
  </ThemeProvider>
</template>

<script setup>
import { ThemeProvider } from "vue3-styled-components";

import { colors } from "@/theme.js";
import { ArrowCircleIcon } from "@/assets/SvgIcons";
import { ContainerArrowButton, TextArrowButton } from "./styledComponents";

defineProps({
  text: {
    type: String,
    default: "Button",
  },
});
</script>
