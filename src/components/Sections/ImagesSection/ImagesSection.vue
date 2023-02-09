<template>
  <ContainerImagesSection>
    <ContainerImage
      data-scroll
      data-scroll-id="last-section-img-1"
      class="last-section-img-1"
    >
      <img src="/images/1-1.webp" />
    </ContainerImage>
    <ContainerImage
      data-scroll
      data-scroll-id="last-section-img-2"
      class="last-section-img-2"
    >
      <img src="/images/2.webp" />
    </ContainerImage>
  </ContainerImagesSection>
</template>

<script setup>
import { watch } from "vue";

import { appearImageOnScroll } from "@/utils/animations.js";
import { ContainerImagesSection, ContainerImage } from "./styledComponents";

const props = defineProps({
  startAnimationOnScroll: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.startAnimationOnScroll,
  () => {
    appearImageOnScroll(".last-section-img-1");
    appearImageOnScroll(".last-section-img-2");
  }
);
</script>
