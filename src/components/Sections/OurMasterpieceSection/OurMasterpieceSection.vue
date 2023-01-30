<template>
  <ContainerSection>
    <ContainerImage
      data-scroll
      data-scroll-id="masterpiece-image"
      class="masterpiece-image"
    >
      <img src="/images/10.png" />
    </ContainerImage>
    <TextBlock
      heading4="Our masterpiece"
      mainParagraph="At every stage of our appliances' production, a craftsperon examines their work using hand and eye, seeking imperfections"
      secondParagraph="The design must perform exceptionally and unfailingly. The designer's vision facilitates this function , yet inspires so much more."
      buttonText="Experience more"
      margin="7rem 0 10rem 0"
      padding="0"
    />
  </ContainerSection>
</template>

<script setup>
import { watch } from "vue";

import { appearImageOnScroll } from "@/utils/animations.js";
import TextBlock from "@/components/TextBlock.vue";
import { ContainerSection, ContainerImage } from "./styledComponents";

const props = defineProps({
  startAnimationOnScroll: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.startAnimationOnScroll,
  () => {
    appearImageOnScroll(".masterpiece-image");
  }
);
</script>
