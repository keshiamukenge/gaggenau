<template>
  <ContainerSection>
    <ContainerContent>
      <ImageAndText
        class="magazine-image-1"
        data-scroll
        data-scroll-id="magazine-image-1"
        text="This home is a refuge from th rugged wind-swept"
        imgHeight="348px"
      >
        <img src="/images/16.png" />
      </ImageAndText>
      <ImageAndText
        class="magazine-image-2"
        data-scroll
        data-scroll-id="magazine-image-2"
        text="The creation, conception and design of a Gaggeneau"
        imgHeight="482px"
      >
        <img src="/images/17.png" />
      </ImageAndText>
      <ContainerArrowButton>
        <ArrowButton text="Our magazine" />
      </ContainerArrowButton>
      <ImageAndText
        class="magazine-image-3"
        data-scroll
        data-scroll-id="magazine-image-3"
        text="A group of people who work to create, craft and develop"
        imgHeight="295px"
      >
        <img src="/images/18.png" />
      </ImageAndText>
    </ContainerContent>
  </ContainerSection>
</template>

<script setup>
import { watch } from "vue";

import { appearImageOnScroll } from "@/utils/animations.js";
import { ArrowButton } from "../../Button";
import ImageAndText from "./components/ImageAndText.vue";
import {
  ContainerSection,
  ContainerArrowButton,
  ContainerContent,
} from "./styledComponents";

const props = defineProps({
  startAnimationOnScroll: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.startAnimationOnScroll,
  () => {
    appearImageOnScroll(".magazine-image-1");
    appearImageOnScroll(".magazine-image-2");
    appearImageOnScroll(".magazine-image-3");
  }
);
</script>
