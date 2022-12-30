<template>
  <MainContainer :margin="margin" :padding="padding">
    <Heading4>{{ heading4 }}</Heading4>
    <ContainerContent>
      <MainParagraph>{{ mainParagraph }}</MainParagraph>
      <ContainerTextButton>
        <ThemeProvider :theme="{ color: colors.grey }">
          <SecondParagraph>{{ secondParagraph }}</SecondParagraph>
        </ThemeProvider>
        <DefaultButton class="block-text-button" :text="buttonText" />
      </ContainerTextButton>
    </ContainerContent>
  </MainContainer>
</template>

<script setup>
import { ThemeProvider } from "vue3-styled-components";

import { colors } from "@/theme";
import DefaultButton from "@/components/Button/DefaultButton.vue";
import {
  Heading4,
  MainContainer,
  MainParagraph,
  ContainerTextButton,
  SecondParagraph,
  ContainerContent,
} from "./styledComponents";

defineProps({
  heading4: {
    type: String,
    default: "Heading 4",
  },
  mainParagraph: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  secondParagraph: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  buttonText: {
    type: String,
    default: "Button",
  },
  margin: {
    type: String,
    default: "10rem 0",
  },
  padding: {
    type: String,
    default: "5rem 5%",
  },
});
</script>
