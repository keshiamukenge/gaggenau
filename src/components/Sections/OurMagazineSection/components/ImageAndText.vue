<template>
  <Container>
    <ContainerImage :height="imgHeight">
      <img :src="src" />
    </ContainerImage>
    <ContainerTextArrow>
      <TextElement>
        {{ text }}
      </TextElement>
      <ArrowCircleIcon />
    </ContainerTextArrow>
  </Container>
</template>

<script setup>
import { ArrowCircleIcon } from "@/assets/SvgIcons";
import {
  Container,
  ContainerImage,
  ContainerTextArrow,
  TextElement,
} from "./styledComponents";

defineProps({
  src: {
    type: String,
    default: "",
  },
  imgHeight: {
    type: String,
    default: "30px",
  },
  text: {
    type: String,
    default: "Default text",
  },
});
</script>
