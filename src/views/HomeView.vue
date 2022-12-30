<template>
  <main ref="mainContainer">
    <Hero />
    <FirstSection />
    <DifferenceSection />
    <GridSection />
    <ArtKitchenSection />
    <SliderSection />
    <OurMasterpieceSection />
    <OurMagazineSection />
    <ImagesSection />
    <Footer />
  </main>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import LocomotiveScroll from "locomotive-scroll";

import Footer from "@/components/Footer/Footer.vue";
import Hero from "@/components/Sections/Hero/Hero.vue";
import FirstSection from "@/components/Sections/FirstSection/FirstSection.vue";
import DifferenceSection from "@/components/Sections/DifferenceSection/DifferenceSection.vue";
import GridSection from "@/components/Sections/GridSection/GridSection.vue";
import ArtKitchenSection from "@/components/Sections/ArtKitchenSection/ArtKitchenSection.vue";
import OurMasterpieceSection from "@/components/Sections/OurMasterpieceSection/OurMasterpieceSection.vue";
import ImagesSection from "@/components/Sections/ImagesSection/ImagesSection.vue";
import SliderSection from "@/components/Sections/SliderSection/SliderSection.vue";
import OurMagazineSection from "@/components/Sections/OurMagazineSection/OurMagazineSection.vue";

const mainContainer = ref(null);

async function initSmoothScroll() {
  await nextTick();
  new LocomotiveScroll({
    el: mainContainer.value,
    smooth: true,
  });
}

onMounted(() => {
  initSmoothScroll();
});
</script>
