<template>
  <Webgl>
    <main ref="mainContainer">
      <Hero />
      <FirstSection :startAnimationOnScroll="firstSectionInView" />
      <DifferenceSection :startAnimationOnScroll="differenceSectionInView" />
      <GridSection />
      <ArtKitchenSection :startAnimationOnScroll="artKitchenSectionInView" />
      <SliderSection :startAnimationOnScroll="sliderSectionInView" />
      <OurMasterpieceSection
        :startAnimationOnScroll="masterpieceSectionInView"
      />
      <OurMagazineSection :startAnimationOnScroll="magazineSectionInView" />
      <ImagesSection :startAnimationOnScroll="imagesSectionInView" />
      <Footer />
    </main>
  </Webgl>
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
import Webgl from "@/components/Webgl/Webgl.vue";

const mainContainer = ref(null);
const artKitchenSectionInView = ref(false);
const masterpieceSectionInView = ref(false);
const magazineSectionInView = ref(false);
const imagesSectionInView = ref(false);
const firstSectionInView = ref(false);
const differenceSectionInView = ref(false);
const sliderSectionInView = ref(false);

async function initSmoothScroll() {
  await nextTick();
  const scroll = new LocomotiveScroll({
    el: mainContainer.value,
    smooth: true,
  });

  scroll.on("scroll", args => {
    if (typeof args.currentElements["art-kitchen-image"] === "object") {
      artKitchenSectionInView.value = true;
    }

    if (typeof args.currentElements["masterpiece-image"] === "object") {
      masterpieceSectionInView.value = true;
    }

    if (typeof args.currentElements["magazine-image-1"] === "object") {
      magazineSectionInView.value = true;
    }

    if (typeof args.currentElements["last-section-img-1"] === "object") {
      imagesSectionInView.value = true;
    }

    if (typeof args.currentElements["first-section-text"] === "object") {
      firstSectionInView.value = true;
    }

    if (typeof args.currentElements["difference-section-text"] === "object") {
      differenceSectionInView.value = true;
    }

    if (typeof args.currentElements["slider-section-title"] === "object") {
      sliderSectionInView.value = true;
    }
  });

  setTimeout(() => {
    scroll.update();
  }, 2000);
}

onMounted(() => {
  initSmoothScroll();
});
</script>
