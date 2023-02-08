<template>
  <ThemeProvider
    :theme="{ backgroundColor: colors.black, titleColor: colors.white }"
  >
    <ContainerFooter>
      <ContainerContent>
        <DefaultButton
          class="contact-button"
          text="Contact"
          :smallButton="false"
        />
        <ListTitle class="product-title" gridColumn="2" gridRow="1"
          >Products</ListTitle
        >
        <ContainerItems class="product-list" gridColumn="2" gridRow="2">
          <Item>Ovens</Item>
          <Item>Coffee machines</Item>
          <Item>Cooktops</Item>
          <Item>Extractors</Item>
          <Item>Refrigeration</Item>
        </ContainerItems>
        <ListTitle class="inspiration-title" gridColumn="3" gridRow="1"
          >Inspiration</ListTitle
        >
        <ContainerItems class="inspiration-list" gridColumn="3" gridRow="2">
          <Item>Art of the kitchen</Item>
          <Item>The magazine</Item>
          <Item>Respected by gaggenau</Item>
        </ContainerItems>
        <ListTitle class="get-support-title" gridColumn="4" gridRow="1"
          >Get support</ListTitle
        >
        <ContainerItems class="get-support-list" gridColumn="4" gridRow="2">
          <Item>Showroom</Item>
          <Item>Find a dealer</Item>
          <Item>Contact us</Item>
          <Item>User manual</Item>
        </ContainerItems>
        <ListTitle class="rs">
          <InstagramIcon />
          <PinterestIcon />
          <YoutubeIcon />
        </ListTitle>
      </ContainerContent>
    </ContainerFooter>
  </ThemeProvider>
</template>

<script setup>
import { ThemeProvider } from "vue3-styled-components";

import { colors } from "@/theme";
import { InstagramIcon, PinterestIcon, YoutubeIcon } from "@/assets/SvgIcons";
import DefaultButton from "../Button/DefaultButton.vue";
import {
  ContainerFooter,
  ListTitle,
  ContainerItems,
  Item,
  ContainerContent,
} from "./styledComponents";
</script>
