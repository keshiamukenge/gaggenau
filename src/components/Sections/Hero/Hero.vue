<template>
  <SectionElement>
    <ContainerLogoText>
      <img src="@/assets/images/logo-text.svg" />
    </ContainerLogoText>
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
import DefaultButton from "@/components/Button/DefaultButton.vue";
import {
  ContainerImage,
  SectionElement,
  SmallParagraph,
  ContainerLogoText,
  FlexContainer,
} from "./styledComponents";
</script>
