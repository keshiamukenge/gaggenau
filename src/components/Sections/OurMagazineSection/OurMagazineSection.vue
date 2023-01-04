<template>
  <ContainerSection>
    <ContainerContent>
      <ImageAndText
        text="This home is a refuge from th rugged wind-swept"
        imgHeight="348px"
      >
        <img src="@/assets/images/16.png" />
      </ImageAndText>
      <ImageAndText
        text="The creation, conception and design of a Gaggeneau"
        imgHeight="482px"
      >
        <img src="@/assets/images/17.png" />
      </ImageAndText>
      <ContainerArrowButton>
        <ArrowButton text="Our magazine" />
      </ContainerArrowButton>
      <ImageAndText
        text="A group of people who work to create, craft and develop"
        imgHeight="295px"
      >
        <img src="@/assets/images/18.png" />
      </ImageAndText>
    </ContainerContent>
  </ContainerSection>
</template>

<script setup>
import { ArrowButton } from "../../Button";
import ImageAndText from "./components/ImageAndText.vue";
import {
  ContainerSection,
  ContainerArrowButton,
  ContainerContent,
} from "./styledComponents";
</script>
