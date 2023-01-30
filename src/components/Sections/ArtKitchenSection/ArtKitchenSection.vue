<template>
  <ContainerSection data-scroll data-scroll-id="art-kitchen-image">
    <h2 class="art-kitchen-title">The art of kitchen</h2>
    <ContainerPart>
      <ContainerTextButton>
        <ThemeProvider :theme="{ color: colors.grey }">
          <TextElement>
            See the timeless design of our pieces shine within a myriad of
            interior styles and discover fellow perfectionists
          </TextElement>
        </ThemeProvider>
        <DefaultButton text="Explore more" />
      </ContainerTextButton>
    </ContainerPart>
    <img class="art-kitchen-image" src="/images/12.png" />
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
