<template>
  <ContainerSection>
    <ContainerContent>
      <ImageAndText
        text="This home is a refuge from th rugged wind-swept"
        src="./src/assets/images/16.png"
        imgHeight="348px"
      />
      <ImageAndText
        text="The creation, conception and design of a Gaggeneau"
        src="./src/assets/images/17.png"
        imgHeight="482px"
      />
      <ContainerArrowButton>
        <ArrowButton text="Our magazine" />
      </ContainerArrowButton>
      <ImageAndText
        text="A group of people who work to create, craft and develop"
        src="./src/assets/images/18.png"
        imgHeight="295px"
      />
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
