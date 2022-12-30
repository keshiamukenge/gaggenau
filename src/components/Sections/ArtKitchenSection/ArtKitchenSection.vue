<template>
  <ContainerSection>
    <ContainerPart class="art-kitchen-text">
      <ContainerTextPart>
        <h2>The art of kitchen</h2>
        <ContainerTextButton>
          <ThemeProvider :theme="{ color: colors.grey }">
            <TextElement
              >See the timeless design of our pieces shine within a myriad of
              interior styles and discover fellow perfectionists</TextElement
            >
          </ThemeProvider>
          <DefaultButton text="Explore more" />
        </ContainerTextButton>
      </ContainerTextPart>
    </ContainerPart>
    <ContainerPart class="art-kitchen-image">
      <img src="@/assets/images/12.webp" />
    </ContainerPart>
  </ContainerSection>
</template>

<script setup>
import { ThemeProvider } from "vue3-styled-components";

import { colors } from "@/theme";
import DefaultButton from "@/components/Button/DefaultButton.vue";
import {
  ContainerSection,
  ContainerPart,
  TextElement,
  ContainerTextButton,
  ContainerTextPart,
} from "./styledComponents";
</script>
