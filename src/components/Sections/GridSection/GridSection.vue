<template>
  <ContainerGrid>
    <ContainerImage
      class="el-1"
      @mouseenter="onImageHovered(img1)"
      @mouseleave="onLeaveImage(img1)"
    >
      <img ref="img1" src="@/assets/images/3.png" />
      <TextContent>(Ovens)</TextContent>
    </ContainerImage>
    <ContainerImage
      class="el-2"
      @mouseenter="onImageHovered(img2)"
      @mouseleave="onLeaveImage(img2)"
    >
      <img ref="img2" src="@/assets/images/4.png" />
      <TextContent>(Warming drawer)</TextContent>
    </ContainerImage>
    <ContainerImage class="el-3">
      <TextContent class="grid-section-button-item">
        <ArrowButton text="See all appliances" />
      </TextContent>
    </ContainerImage>
    <ContainerImage
      class="el-4"
      @mouseenter="onImageHovered(img3)"
      @mouseleave="onLeaveImage(img3)"
    >
      <img ref="img3" src="@/assets/images/6.png" />
      <TextContent>(Extractors)</TextContent>
    </ContainerImage>
    <ContainerImage
      class="el-5"
      @mouseenter="onImageHovered(img4)"
      @mouseleave="onLeaveImage(img4)"
    >
      <img ref="img4" src="@/assets/images/9.png" />
      <TextContent>(Washing machine)</TextContent>
    </ContainerImage>
    <ContainerImage
      class="el-6"
      @mouseenter="onImageHovered(img5)"
      @mouseleave="onLeaveImage(img5)"
    >
      <img ref="img5" src="@/assets/images/8.png" />
      <TextContent>(Cooktop)</TextContent>
    </ContainerImage>
    <ContainerImage
      class="el-7"
      @mouseenter="onImageHovered(img6)"
      @mouseleave="onLeaveImage(img6)"
    >
      <img ref="img6" src="@/assets/images/11.png" />
      <TextContent>(Refrigerators)</TextContent>
    </ContainerImage>
    <ContainerImage
      class="el-8"
      @mouseenter="onImageHovered(img7)"
      @mouseleave="onLeaveImage(img7)"
    >
      <img ref="img7" src="@/assets/images/5.png" />
      <TextContent>(Dishwasher)</TextContent>
    </ContainerImage>
  </ContainerGrid>
</template>

<script setup>
import { ref } from "vue";

import { onImageHovered, onLeaveImage } from "@/utils/animations.js";
import { ArrowButton } from "../../Button";
import { ContainerGrid, ContainerImage, TextContent } from "./styledComponents";

const img1 = ref(null);
const img2 = ref(null);
const img3 = ref(null);
const img4 = ref(null);
const img5 = ref(null);
const img6 = ref(null);
const img7 = ref(null);
</script>
