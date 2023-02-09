<template>
  <SectionElement>
    <InformationText
      data-scroll
      data-scroll-id="first-section-text"
      class="first-section-text"
    >
      An exceptional reputation built by hand since 1683
    </InformationText>
    <ContainerImage data-scroll data-scroll-speed="2">
      <img src="/images/1.webp" />
    </ContainerImage>
  </SectionElement>
</template>

<script setup>
import { watch } from "vue";

import { appearTextOnScroll } from "@/utils/animations.js";
import {
  SectionElement,
  InformationText,
  ContainerImage,
} from "./styledComponents";

const props = defineProps({
  startAnimationOnScroll: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.startAnimationOnScroll,
  newValue => {
    if (newValue) {
      appearTextOnScroll(".first-section-text");
    }
  }
);
</script>
