<template>
  <ContainerHeader>
    <ContainerLogo>
      <img src="@/assets/images/logo.png" />
    </ContainerLogo>
    <ThemeProvider :theme="{ color: colors.white }">
      <ContainerItems>
        <HeaderItem ref="menuItem" @click="menu.handleClick">
          <AnimatedLetters
            word="Menu"
            customClass="menu"
            :startLetterPosition="0"
            :hide="hide"
          />
          <AnimatedLetters
            word="(Close)"
            customClass="close"
            :startLetterPosition="100"
            :hide="!hide"
            :isSecondWord="true"
          />
        </HeaderItem>
      </ContainerItems>
      <Menu />
    </ThemeProvider>
  </ContainerHeader>
</template>

<script setup>
import { ref } from "vue";
import { ThemeProvider } from "vue3-styled-components";

import Menu from "./Menu.vue";
import { useMenuStore } from "@/stores/menu";
import { colors } from "@/theme";
import AnimatedLetters from "../AnimatedLetters.vue";
import {
  ContainerHeader,
  ContainerLogo,
  ContainerItems,
  HeaderItem,
} from "./styledComponents";

const menuItem = ref(null);
const hide = ref(false);
const menu = useMenuStore();

function onOpen() {
  hide.value = true;
}

function onClose() {
  hide.value = false;
}

menu.onAction({ onOpen, onClose });
</script>
