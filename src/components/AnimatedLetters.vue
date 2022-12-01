<template>
  <ContainerAnimatedLetters
    ref="containerWord"
    :startPosition="startLetterPosition"
    :isSecondWord="isSecondWord"
  >
    {{ word }}
  </ContainerAnimatedLetters>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import gsap from "gsap";

import { ContainerAnimatedLetters } from "./styledComponents";

const containerWord = ref(null);

const props = defineProps({
  word: {
    type: String,
    default: "Word",
  },
  hide: {
    type: Boolean,
    default: false,
  },
  startLetterPosition: {
    type: Number,
    default: 0,
  },
  customClass: {
    type: String,
    default: "",
  },
  isSecondWord: {
    type: Boolean,
    default: false,
  },
});

function wrapEachLetters(word) {
  let letters = [];
  letters = word.split("");

  return letters
    .map(
      (letter, id) =>
        `<div><span class="letter${
          id + props.customClass
        }">${letter}</span></div>`
    )
    .join("");
}

onMounted(() => {
  containerWord.value.$el.innerHTML = wrapEachLetters(props.word);
});

watch(
  () => props.hide,
  () => {
    if (props.hide) {
      [...containerWord.value.$el.children].forEach((letter, id) => {
        gsap.to(".letter" + id + props.customClass, {
          x: 100 + "%",
          duration: 0.6,
          ease: "power.inOut",
        });
      });
    } else {
      [...containerWord.value.$el.children].forEach((letter, id) => {
        gsap.to(".letter" + id + props.customClass, {
          x: 0,
          duration: 0.6,
          ease: "power.inOut",
          delay: 0.45,
        });
      });
    }
  }
);
</script>
