<template>
  <SectionElement>
    <Heading1>Gaggenau</Heading1>
    <ContainerImage>
      <img src="@/assets/images/13.webp" />
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
import DefaultButton from "@/components/Button/DefaultButton.vue";
import {
  ContainerImage,
  SectionElement,
  SmallParagraph,
  Heading1,
  FlexContainer,
} from "./styledComponents";
</script>
