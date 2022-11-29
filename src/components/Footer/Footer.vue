<template>
  <ThemeProvider
    :theme="{ backgroundColor: colors.black, titleColor: colors.white }"
  >
    <ContainerFooter>
      <DefaultButton text="Contact" :smallButton="false" />
      <ListTitle gridColumn="2" gridRow="1">Products</ListTitle>
      <ContainerItems gridColumn="2" gridRow="2">
        <Item>Ovens</Item>
        <Item>Coffee machines</Item>
        <Item>Cooktops</Item>
        <Item>Extractors</Item>
        <Item>Refrigeration</Item>
      </ContainerItems>
      <ListTitle gridColumn="3" gridRow="1">Inspiration</ListTitle>
      <ContainerItems gridColumn="3" gridRow="2">
        <Item>Art of the kitchen</Item>
        <Item>The magazine</Item>
        <Item>Respected by gaggenau</Item>
      </ContainerItems>
      <ListTitle gridColumn="4" gridRow="1">Get support</ListTitle>
      <ContainerItems gridColumn="4" gridRow="2">
        <Item>Showroom</Item>
        <Item>Find a dealer</Item>
        <Item>Contact us</Item>
        <Item>User manual</Item>
      </ContainerItems>
      <ListTitle>RS</ListTitle>
    </ContainerFooter>
  </ThemeProvider>
</template>

<script setup>
import { ThemeProvider } from "vue3-styled-components";

import { colors } from "@/theme";
import DefaultButton from "../Button/DefaultButton.vue";
import {
  ContainerFooter,
  ListTitle,
  ContainerItems,
  Item,
} from "./styledComponents";
</script>
