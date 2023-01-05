<template>
  <ThemeProvider :theme="{ color: colors.grey }">
    <ContainerSection>
      <ContainerText>
        <Heading4>Welcome to our</Heading4>
        <MainText
          data-scroll
          data-scroll-id="slider-section-title"
          class="slider-section-title"
        >
          Milan
        </MainText>
      </ContainerText>
      <Swiper
        :slides-per-view="1"
        :space-between="50"
        :grabCursor="true"
        :loop="true"
        :centeredSlides="true"
        :slidesPerView="2"
        :spaceBetween="50"
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
        <LeftArrowIcon class="swiper-button-prev prev" />
        <RightArrowIcon class="swiper-button-next next" />
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
import { watch } from "vue";
import { ThemeProvider } from "vue3-styled-components";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css/parallax";
import "swiper/css";

import { appearTextOnScroll } from "@/utils/animations.js";
import { colors } from "@/theme.js";
import DefaultButton from "../../Button/DefaultButton.vue";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/SvgIcons";
import {
  ContainerSection,
  ContainerText,
  MainText,
  ContainerImage,
  ContainerTextContent,
  SecondText,
  TextContent,
  Heading4,
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
    appearTextOnScroll(".slider-section-title");
  }
);
</script>
