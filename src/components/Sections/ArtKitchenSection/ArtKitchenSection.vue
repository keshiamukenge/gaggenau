<template>
  <ContainerSection>
    <ContainerPart class="art-kitchen-text">
      <ContainerTextPart>
        <h2 class="art-kitchen-title">The art of kitchen</h2>
        <ContainerTextButton>
          <ThemeProvider :theme="{ color: colors.grey }">
            <TextElement>
              See the timeless design of our pieces shine within a myriad of
              interior styles and discover fellow perfectionists
            </TextElement>
          </ThemeProvider>
          <DefaultButton text="Explore more" />
        </ContainerTextButton>
      </ContainerTextPart>
    </ContainerPart>
    <ContainerPart
      data-scroll
      data-scroll-id="art-kitchen-image"
      class="art-kitchen-image"
    >
      <img src="@/assets/images/12.png" />
    </ContainerPart>
  </ContainerSection>
</template>

<script setup>
import { watch } from "vue";
import { ThemeProvider } from "vue3-styled-components";

import { appearImageOnScroll, appearTextOnScroll } from "@/utils/animations.js";
import { colors } from "@/theme";
import DefaultButton from "@/components/Button/DefaultButton.vue";
import {
  ContainerSection,
  ContainerPart,
  TextElement,
  ContainerTextButton,
  ContainerTextPart,
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
    appearImageOnScroll(".art-kitchen-image");
    appearTextOnScroll(".art-kitchen-title");
  }
);
</script>
