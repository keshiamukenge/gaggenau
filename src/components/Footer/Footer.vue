<template>
  <ThemeProvider
    :theme="{
      backgroundColor: colors.black,
      titleColor: colors.white,
      grey: colors.grey,
    }"
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
        <LegalMentions class="legal-mentions" gridColumn="1" gridRow="5">
          All materials are the property of their owners and are used for
          educational and non-commercial purposes.
        </LegalMentions>
        <ContentMention class="content-mention" gridColumn="2" gridRow="5">
          Content :
          <a target="_blank" href="https://www.gaggenau.com/">gaggenau.com</a>
        </ContentMention>
        <DesignerMention class="designer-mention" gridColumn="5" gridRow="5">
          Designed by
          <a
            target="_blank"
            href="https://www.behance.net/gallery/156337103/Gaggenauwebsite-redesign"
          >
            Maria Sheveleva
          </a>
        </DesignerMention>
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
  LegalMentions,
  DesignerMention,
  ContentMention,
} from "./styledComponents";
</script>
