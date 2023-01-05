<template>
  <SectionElement>
    <Heading1>
      <AnimatedLetters
        word="Gaggenau"
        :hide="hide"
        :startLetterPosition="100"
      />
    </Heading1>
    <ContainerImage>
      <img src="@/assets/images/13.png" />
    </ContainerImage>
    <FlexContainer>
      <SmallParagraph>
        We are pleased to welcome you in a world of pure beauty
      </SmallParagraph>
      <DefaultButton class="hero-button" text="Experience more" />
    </FlexContainer>
  </SectionElement>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AnimatedLetters from "@/components/AnimatedLetters.vue";
import DefaultButton from "@/components/Button/DefaultButton.vue";
import {
  ContainerImage,
  SectionElement,
  SmallParagraph,
  Heading1,
  FlexContainer,
} from "./styledComponents";

const hide = ref(true);

onMounted(() => {
  setTimeout(() => {
    hide.value = false;
  }, 300);
});
</script>
