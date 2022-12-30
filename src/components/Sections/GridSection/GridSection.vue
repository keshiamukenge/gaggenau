<template>
  <ContainerGrid>
    <ContainerImage class="el-1">
      <img src="@/assets/images/3.png" />
      <TextContent>(Ovens)</TextContent>
    </ContainerImage>
    <ContainerImage class="el-2">
      <img src="@/assets/images/4.png" />
      <TextContent>(Warming drawer)</TextContent>
    </ContainerImage>
    <ContainerImage class="el-3">
      <TextContent>
        <ArrowButton text="See all appliances" />
      </TextContent>
    </ContainerImage>
    <ContainerImage class="el-4">
      <img src="@/assets/images/6.png" />
      <TextContent>(Extractors)</TextContent>
    </ContainerImage>
    <ContainerImage class="el-5">
      <img src="@/assets/images/9.png" />
      <TextContent>(Washing machine)</TextContent>
    </ContainerImage>
    <ContainerImage class="el-6">
      <img src="@/assets/images/8.png" />
      <TextContent>(Cooktop)</TextContent>
    </ContainerImage>
    <ContainerImage class="el-7">
      <img src="@/assets/images/11.png" />
      <TextContent>(Refrigerators)</TextContent>
    </ContainerImage>
    <ContainerImage class="el-8">
      <img src="@/assets/images/5.png" />
      <TextContent>(Dishwasher)</TextContent>
    </ContainerImage>
  </ContainerGrid>
</template>

<script setup>
import { ArrowButton } from "../../Button";
import { ContainerGrid, ContainerImage, TextContent } from "./styledComponents";
</script>
