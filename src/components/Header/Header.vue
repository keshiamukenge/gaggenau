<template>
  <ContainerHeader>
    <ContainerLogo>
      <img src="@/assets/images/logo.png" />
    </ContainerLogo>
    <ThemeProvider :theme="{ color: colors.white }">
      <ContainerItems>
        <Item>Menu</Item>
      </ContainerItems>
    </ThemeProvider>
  </ContainerHeader>
</template>

<script setup>
import { ThemeProvider } from "vue3-styled-components";

import { colors } from "@/theme";
import {
  ContainerHeader,
  ContainerLogo,
  ContainerItems,
  Item,
} from "./styledComponents";
</script>
