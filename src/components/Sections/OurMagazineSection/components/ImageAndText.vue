<template>
  <Container @mouseenter="onHover" @mouseleave="onLeave">
    <ContainerImage ref="image" :height="imgHeight">
      <slot />
    </ContainerImage>
    <ContainerTextArrow>
      <TextElement>
        {{ text }}
      </TextElement>
      <ArrowCircleIcon :startAnimation="startAnimation" />
    </ContainerTextArrow>
  </Container>
</template>

<script setup>
import { ref } from "vue";
import { onImageHovered, onLeaveImage } from "@/utils/animations.js";

import { ArrowCircleIcon } from "@/assets/SvgIcons";
import {
  Container,
  ContainerImage,
  ContainerTextArrow,
  TextElement,
} from "./styledComponents";

defineProps({
  imgHeight: {
    type: String,
    default: "30px",
  },
  text: {
    type: String,
    default: "Default text",
  },
});

const startAnimation = ref(false);
const image = ref(null);

function onHover() {
  onImageHovered(image.value.$el);
  startAnimation.value = true;

  setTimeout(() => {
    startAnimation.value = false;
  }, 700);
}

function onLeave() {
  onLeaveImage(image.value.$el);
}
</script>
