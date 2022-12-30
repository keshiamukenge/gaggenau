<template>
  <ThemeProvider :theme="{ color: colors.grey }">
    <ContainerSection>
      <ContainerText>
        <h4>Welcome to our</h4>
        <MainText>Milan</MainText>
      </ContainerText>
      <Swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide>
          <ContainerImage>
            <img src="@/assets/images/slider/1.png" />
          </ContainerImage>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerImage>
            <img src="@/assets/images/slider/2.png" />
          </ContainerImage>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerImage>
            <img src="@/assets/images/slider/3.png" />
          </ContainerImage>
        </SwiperSlide>
        <!-- <LeftArrowIcon class="left-arrow-slider" />
        <RightArrowIcon class="right-arrow-slider" /> -->
      </Swiper>
      <ContainerTextContent>
        <SecondText>Design week</SecondText>
        <TextContent
          >This year Gaggeneau stepped out of the eurocucina fairgrounds into
          its own space at milan's design week</TextContent
        >
        <DefaultButton text="Explore more" />
      </ContainerTextContent>
    </ContainerSection>
  </ThemeProvider>
</template>

<script setup>
import { ThemeProvider } from "vue3-styled-components";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import { colors } from "@/theme.js";
import DefaultButton from "../../Button/DefaultButton.vue";
// import { LeftArrowIcon, RightArrowIcon } from "@/assets/SvgIcons";
import {
  ContainerSection,
  ContainerText,
  MainText,
  ContainerImage,
  ContainerTextContent,
  SecondText,
  TextContent,
} from "./styledComponents";

const onSwiper = swiper => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
